import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		// Each talk's own tests are run by its package's test script.
		include: ["test/**/*.test.ts"],
		setupFiles: ["console-fail-test/setup"],
	},
});
