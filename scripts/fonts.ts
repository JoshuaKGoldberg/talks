/**
 * Copies a talk's fonts into its src/fonts/ from where macOS and Microsoft PowerPoint for Mac install them.
 * Only openly licensed fonts are committed: the rest, like Microsoft's, can't be redistributed,
 * so each deck's style.css names them and this finds them locally, including inside PowerPoint.
 * @example
 * ```shell
 * node ../../scripts/fonts.ts
 * ```
 */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

/** Where fonts can be found, most specific first. */
const SOURCES = [
	path.join(os.homedir(), "Library/Fonts"),
	"/Library/Fonts",
	"/System/Library/Fonts/Supplemental",
	"/System/Library/Fonts",
	"/Applications/Microsoft PowerPoint.app/Contents/Resources/DFonts",
];

const fonts = path.resolve(process.argv[2] ?? ".", "src/fonts");
const styles = await fs.readFile(
	path.join(path.dirname(fonts), "style.css"),
	"utf8",
);
const wanted = [
	...new Set(
		[...styles.matchAll(/url\("\.\/fonts\/([^"]+)"\)/g)].map(
			([, name]) => name,
		),
	),
];

await fs.mkdir(fonts, { recursive: true });
const missing: string[] = [];
for (const name of wanted) {
	const target = path.join(fonts, name);
	if (await exists(target)) {
		continue;
	}

	// The converter names each file by its index and its original name, with characters other than word characters, dots, and dashes replaced.
	const original = name.replace(/^\d+-/, "");
	const source = await findFont(original);
	if (source) {
		await fs.writeFile(target, withoutEmptyTables(await fs.readFile(source)));
	} else {
		missing.push(original);
	}
}

if (missing.length) {
	console.warn(
		`Couldn't find these fonts installed, so the deck will draw with fallbacks: ${missing.join(", ")}`,
	);
}

async function exists(file: string) {
	return fs.stat(file).then(
		() => true,
		() => false,
	);
}

async function findFont(sanitized: string) {
	for (const directory of SOURCES) {
		const files = await fs.readdir(directory).catch(() => []);
		const match = files.find(
			(file) => file.replaceAll(/[^\w.-]/g, "_") === sanitized,
		);
		if (match) {
			return path.join(directory, match);
		}
	}

	return undefined;
}

/**
 * A copy of a TrueType or OpenType font without its empty tables, as the converter writes it.
 * Chromium's font sanitizer rejects whole fonts for them, such as the empty `prep` table in
 * the Consolas that PowerPoint bundles, though PowerPoint draws them fine.
 */
function withoutEmptyTables(font: Buffer) {
	const signature = font.toString("latin1", 0, 4);
	if (!["\0\x01\0\0", "OTTO", "true"].includes(signature)) {
		return font;
	}

	const tables = Array.from({ length: font.readUInt16BE(4) }, (_, index) => {
		const at = 12 + index * 16;
		return {
			checksum: font.readUInt32BE(at + 4),
			length: font.readUInt32BE(at + 12),
			offset: font.readUInt32BE(at + 8),
			tag: font.toString("latin1", at, at + 4),
		};
	});
	const kept = tables.filter((table) => table.length > 0);
	if (kept.length === tables.length) {
		return font;
	}

	const header = Buffer.alloc(12 + kept.length * 16);
	font.copy(header, 0, 0, 4);
	const exponent = Math.floor(Math.log2(kept.length));
	header.writeUInt16BE(kept.length, 4);
	header.writeUInt16BE(2 ** exponent * 16, 6);
	header.writeUInt16BE(exponent, 8);
	header.writeUInt16BE(kept.length * 16 - 2 ** exponent * 16, 10);

	const bodies: Buffer[] = [];
	let offset = header.length;
	for (const [index, table] of kept.entries()) {
		// Tables start on 4-byte boundaries.
		const body = Buffer.alloc((table.length + 3) & ~3);
		font.copy(body, 0, table.offset, table.offset + table.length);
		const at = 12 + index * 16;
		header.write(table.tag, at, "latin1");
		header.writeUInt32BE(table.checksum, at + 4);
		header.writeUInt32BE(offset, at + 8);
		header.writeUInt32BE(table.length, at + 12);
		bodies.push(body);
		offset += body.length;
	}

	return Buffer.concat([header, ...bodies]);
}
