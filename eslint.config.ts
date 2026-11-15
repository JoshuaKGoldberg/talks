import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import markdown from "@eslint/markdown";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier/flat";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import markdownLinks from "eslint-plugin-markdown-links";
import n from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json";
import perfectionist from "eslint-plugin-perfectionist";
import * as regexp from "eslint-plugin-regexp";
import vue from "eslint-plugin-vue";
import yml from "eslint-plugin-yml";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	globalIgnores(
		[
			"**/*.snap",
			"node_modules",
			"packages/*/lib",
			"packages/*/src",
			// Decks written in Slidev, rather than converted from PowerPoint, are linted.
			"!packages/2026-11-17-make-ai-write-better-code/src",
			"packages/*/src/slides.md",
			"packages/*/src/node_modules",
			"pnpm-lock.yaml",
		],
		"Global Ignores",
	),
	{ linterOptions: { reportUnusedDisableDirectives: "error" } },
	{
		extends: [
			comments.recommended,
			eslint.configs.recommended,
			jsdoc.configs["flat/contents-typescript-error"],
			jsdoc.configs["flat/logical-typescript-error"],
			jsdoc.configs["flat/stylistic-typescript-error"],
			n.configs["flat/recommended"],
			perfectionist.configs["recommended-natural"],
			regexp.configs["flat/recommended"],
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			vue.configs["flat/recommended"],
		],
		files: ["**/*.{js,ts,vue}"],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: [".vue"],
				parser: tseslint.parser,
				projectService: true,
			},
		},
		rules: {
			// Stylistic concerns that don't interfere with Prettier
			"logical-assignment-operators": [
				"error",
				"always",
				{ enforceForIfStatements: true },
			],
			"no-useless-rename": "error",
			"object-shorthand": "error",
			"operator-assignment": "error",
		},
		settings: { perfectionist: { partitionByComment: true, type: "natural" } },
	},
	{
		extends: [tseslint.configs.disableTypeChecked, prettier],
		files: ["**/*.vue"],
		rules: { "no-undef": "off" },
	},
	{
		extends: [vitest.configs.recommended],
		files: ["**/*.test.ts"],
		rules: {
			"@typescript-eslint/no-unsafe-assignment": "off",
			"vitest/prefer-describe-function-title": "error",
		},
		settings: { vitest: { typecheck: true } },
	},
	{
		extends: [jsonc.configs["flat/recommended-with-json"]],
		files: ["**/*.json"],
	},
	{
		extends: [markdown.configs.recommended, markdownLinks.configs.recommended],
		files: ["**/*.md"],
		rules: {
			// https://github.com/eslint/markdown/issues/294
			"markdown/no-missing-label-refs": "off",
		},
	},
	{
		extends: [tseslint.configs.disableTypeChecked],
		files: ["**/*.md/*.ts"],
		rules: { "n/no-missing-import": "off" },
	},
	{
		files: ["eslint.config.*"],
		rules: { "n/no-unsupported-features/node-builtins": "off" },
	},
	{
		extends: [yml.configs["flat/standard"], yml.configs["flat/prettier"]],
		files: ["**/*.{yml,yaml}"],
		rules: {
			"yml/file-extension": "error",
			"yml/sort-keys": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
			"yml/sort-sequence-values": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
		},
	},
	{
		extends: [packageJson.configs.recommended, packageJson.configs.stylistic],
		files: ["**/package.json"],
	},
);
