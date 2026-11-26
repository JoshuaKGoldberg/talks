# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/(your-name-here)/talks
cd talks
pnpm install
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Building

[slidev2pptx](https://github.com/JoshuaKGoldberg/slidev2pptx) builds each talk's [Slidev](https://sli.dev) deck into a PowerPoint file in its package's `lib/` directory.
To build every talk:

```shell
pnpm build
```

To build or present one talk, filter by its package name:

```shell
pnpm --filter 2026-05-21-what-s-new-in-typescript-6-0 build
pnpm --filter 2026-05-21-what-s-new-in-typescript-6-0 dev
```

### Fonts

Talks written in Slidev load their fonts from npm packages.
Talks converted from PowerPoint declare their fonts in their package's `src/style.css`.
Only openly licensed fonts are committed in their `src/fonts/`, since others, like Microsoft's, can't be redistributed.
Each talk's `build` and `dev` scripts first run [`scripts/fonts.ts`](../scripts/fonts.ts) to copy in the rest.
It looks in macOS's font folders, such as `~/Library/Fonts`, and inside Microsoft PowerPoint for Mac.
Other operating systems aren't searched yet.
Fonts it can't find are listed, and the deck draws with fallbacks for them.

### Built PowerPoint Files

Built PowerPoint files are too large to commit here, so they're kept in the [files](https://github.com/JoshuaKGoldberg/files) repository instead, which needs to be checked out next to this one in `../files`.
Each talk's `build` script writes a `files.json` recording the Git hash of its built file and a hash of its inputs: its `src/`, its `package.json`, and the slidev2pptx version.
After building, commit the changed `files.json` files, and upload the built files to the files repository:

```shell
pnpm upload
```

CI runs `pnpm lint:files`, which fails if a talk's inputs changed since its `files.json` was recorded, or if the files repository doesn't have its built file.
It doesn't build talks itself, since their fonts aren't installed in CI.

## Formatting

[Prettier](https://prettier.io) is used to format code.
It should be applied automatically when you save files in VS Code or make a Git commit.

To manually reformat all files, you can run:

```shell
pnpm format --write
```

## Linting

This repository includes several forms of linting to enforce consistent code quality and styling.
Each should be shown in VS Code, and can be run manually on the command-line:

- `pnpm lint` ([ESLint](https://eslint.org) with [typescript-eslint](https://typescript-eslint.io)): Lints source files, including JavaScript, Markdown, and TypeScript
- `pnpm lint:knip` ([knip](https://github.com/webpro/knip)): Detects unused files, dependencies, and code exports
- `pnpm lint:packages` ([pnpm dedupe](https://pnpm.io/cli/dedupe)): Checks for unnecessarily duplicated packages in the `pnpm-lock.yaml` file
- `pnpm lint:spelling` ([cspell](https://cspell.org)): Spell checks across all source files
- `pnpm lint:files`: Checks that each talk's built PowerPoint file in the [files repository](#built-powerpoint-files) is up to date

Read the individual documentation for each linter to understand how it can be configured and used best.

For example, ESLint can be run with `--fix` to auto-fix some lint rule complaints:

```shell
pnpm run lint --fix
```

> ESLint, Prettier, and cspell skip the `src/` of talks converted from PowerPoint, since those decks are generated.
> ESLint and Prettier also skip the `slides.md` of talks written in Slidev.

## Testing

[Vitest](https://vitest.dev) tests in the root `test/` directory check every talk, such as that each talk's README links to its slides in the [files repository](#built-powerpoint-files).
Talks written in Slidev can also have tests in their own `test/` directory.
To run them all:

```shell
pnpm run test
```

## Type Checking

You should be able to see suggestions from [TypeScript](https://typescriptlang.org) in your editor for all open files.

However, it can be useful to run the TypeScript command-line (`tsc`) to type check all `.ts` files:

```shell
pnpm tsc
```

Add `--watch` to keep the type checker running in a watch mode that updates the display as you save files:

```shell
pnpm tsc --watch
```
