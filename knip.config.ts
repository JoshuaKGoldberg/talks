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
} satisfies KnipConfig;
