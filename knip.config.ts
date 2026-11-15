import type { KnipConfig } from "knip";

import { existsSync } from "node:fs";

// slidev2pptx is an optional dependency until it's published, and knip can't see its peer dependencies used without it.
const peersOfMissingSlidev2pptx = existsSync(
	"node_modules/slidev2pptx/package.json",
)
	? []
	: ["@slidev/client", "@slidev/parser", "@slidev/types", "vue"];

export default {
	ignoreDependencies: peersOfMissingSlidev2pptx,
	ignoreExportsUsedInFile: { interface: true, type: true },
	treatConfigHintsAsErrors: true,
	workspaces: {
		".": {},
		// Slidev loads a deck's setup files and styles by convention, which only decks written in Slidev have.
		"packages/2026-11-17-make-ai-write-better-code": {
			entry: ["src/setup/*.ts", "src/styles/index.ts"],
		},
	},
} satisfies KnipConfig;
