import * as fs from "node:fs";
import { describe, expect, it } from "vitest";

const packages = new URL("../packages/", import.meta.url);
const talks = fs
	.readdirSync(packages, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.sort();

describe("talk READMEs", () => {
	it.each(talks)("%s links to its slides in talk-files", (talk) => {
		const lines = fs
			.readFileSync(new URL(`${talk}/README.md`, packages), "utf8")
			.split("\n");

		expect(lines[2]).toBe(
			`> **[Download the talk's PowerPoint slides here](https://github.com/JoshuaKGoldberg/talk-files/raw/main/${talk}.pptx)**`,
		);
	});
});
