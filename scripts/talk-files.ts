/**
 * Keeps each talk's built PowerPoint file in sync with the talk-files repository.
 * Built files are too large to commit here, so each talk commits a talk-files.json instead,
 * recording a hash of the inputs it was built from and the Git blob hash of its built file.
 * - `record`: run by each talk's `build` script, writes its talk-files.json
 * - `check`: run in CI, fails if any talk's inputs or talk-files copy don't match its talk-files.json
 * - `upload`: copies built files into a ../talk-files checkout, then commits and pushes them
 * @example
 * ```shell
 * node ../../scripts/talk-files.ts record
 * node scripts/talk-files.ts check
 * node scripts/talk-files.ts upload
 * ```
 */
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

interface Manifest {
	/** SHA-256 of the talk's src/ files and package.json. */
	inputs: string;
	/** Git blob hash of the built file, as the talk-files repository stores it. */
	pptx: string;
}

const manifestName = "talk-files.json";
const remote = "JoshuaKGoldberg/talk-files";
const root = path.resolve(import.meta.dirname, "..");
const checkout = path.resolve(root, "../talk-files");

switch (process.argv[2]) {
	case "check":
		await check();
		break;
	case "record":
		await record(process.cwd());
		break;
	case "upload":
		await upload();
		break;
	default:
		throw new Error("Usage: talk-files.ts check | record | upload");
}

async function blobHash(file: string) {
	const contents = await fs.readFile(file);
	return crypto
		.createHash("sha1")
		.update(`blob ${contents.length.toString()}\0`)
		.update(contents)
		.digest("hex");
}

async function check() {
	const response = await fetch(
		`https://api.github.com/repos/${remote}/git/trees/HEAD`,
		{
			headers: process.env.GITHUB_TOKEN
				? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
				: {},
		},
	);
	if (!response.ok) {
		throw new Error(`Couldn't list ${remote}: ${response.statusText}`);
	}

	const { tree } = (await response.json()) as {
		tree: { path: string; sha: string }[];
	};
	const uploaded = new Map(tree.map((entry) => [entry.path, entry.sha]));
	const problems: string[] = [];

	for (const talk of await talks()) {
		const manifest = await readManifest(talk);
		if (!manifest) {
			problems.push(`${talk}: no ${manifestName}, so it was never built`);
			continue;
		}

		if (manifest.inputs !== (await inputsHash(talkDirectory(talk)))) {
			problems.push(`${talk}: changed since it was last built`);
		}

		if (manifest.pptx !== uploaded.get(`${talk}.pptx`)) {
			problems.push(`${talk}: its built file isn't uploaded to ${remote}`);
		}
	}

	if (problems.length) {
		console.error(
			[
				"These talks' built files are out of date:",
				...problems.map((problem) => `  ${problem}`),
				"Run `pnpm build` and then `pnpm upload` to update them.",
			].join("\n"),
		);
		process.exitCode = 1;
	}
}

async function inputsHash(directory: string) {
	// Untracked files count, so a talk can be recorded before it's committed, but ignored ones like copied fonts don't.
	const files = execFileSync(
		"git",
		[
			"ls-files",
			"--cached",
			"--others",
			"--exclude-standard",
			"-z",
			"--",
			"src",
			"package.json",
		],
		{ cwd: directory, encoding: "utf8" },
	)
		.split("\0")
		.filter(Boolean)
		.sort();

	const hash = crypto.createHash("sha256");
	for (const file of files) {
		hash.update(`${file}\0`);
		hash.update(await fs.readFile(path.join(directory, file)));
		hash.update("\0");
	}

	return hash.digest("hex");
}

function pptxPath(talk: string) {
	return path.join(talkDirectory(talk), "lib", `${talk}.pptx`);
}

async function readManifest(talk: string) {
	return fs
		.readFile(path.join(talkDirectory(talk), manifestName), "utf8")
		.then((text) => JSON.parse(text) as Manifest)
		.catch(() => undefined);
}

async function record(directory: string) {
	const talk = path.basename(directory);
	const manifest: Manifest = {
		inputs: await inputsHash(directory),
		pptx: await blobHash(pptxPath(talk)),
	};

	await fs.writeFile(
		path.join(directory, manifestName),
		`${JSON.stringify(manifest, null, "\t")}\n`,
	);
}

function talkDirectory(talk: string) {
	return path.join(root, "packages", talk);
}

async function talks() {
	const entries = await fs.readdir(path.join(root, "packages"), {
		withFileTypes: true,
	});
	return entries
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort();
}

async function upload() {
	const git = (...args: string[]) =>
		execFileSync("git", args, { cwd: checkout, stdio: "inherit" });

	git("pull", "--ff-only");

	const updated: string[] = [];
	for (const talk of await talks()) {
		const manifest = await readManifest(talk);
		const target = path.join(checkout, `${talk}.pptx`);
		if (
			!manifest ||
			manifest.pptx === (await blobHash(target).catch(() => undefined))
		) {
			continue;
		}

		if ((await blobHash(pptxPath(talk))) !== manifest.pptx) {
			throw new Error(
				`${talk}: lib/ doesn't match its ${manifestName}, so rebuild it`,
			);
		}

		await fs.copyFile(pptxPath(talk), target);
		updated.push(talk);
	}

	if (!updated.length) {
		console.log(`${remote} is already up to date.`);
		return;
	}

	git("add", ...updated.map((talk) => `${talk}.pptx`));
	git(
		"commit",
		"--message",
		updated.length === 1
			? `Update ${updated[0]}`
			: `Update ${updated.length.toString()} talks`,
		"--message",
		updated.join("\n"),
	);
	git("push");
	console.log(`Uploaded ${updated.length.toString()} talks to ${remote}.`);
}
