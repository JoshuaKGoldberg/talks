import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		setupFiles: ["console-fail-test/setup"],
	},
});
