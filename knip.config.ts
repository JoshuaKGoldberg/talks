import type { KnipConfig } from "knip";

export default {
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
