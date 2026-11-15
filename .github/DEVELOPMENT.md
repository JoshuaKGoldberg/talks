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

Each talk in `packages/` is a [Slidev](https://sli.dev) deck in its `src/`.
slidev2pptx builds each deck into a PowerPoint file in its package's `lib/` directory.
It isn't published yet, so this repository installs it as an optional dependency from a local checkout next to it, in `../slidev2pptx`.
Without that checkout, `pnpm install` still works, and you can present talks and run the format, lint, and type checks, but not build talks or run `pnpm lint:packages`, whose `pnpm dedupe --check` would drop slidev2pptx from the lockfile.
If you have the checkout, build it before installing:

```shell
cd ../slidev2pptx
pnpm install
pnpm build
cd ../talks
pnpm install
```

Rerun `pnpm install` here after rebuilding slidev2pptx to pick up its changes.

Then build every talk:

```shell
pnpm build
```

...or build or present one talk by its package name:

```shell
pnpm --filter 2026-05-21-what-s-new-in-typescript-6-0 build
pnpm --filter 2026-05-21-what-s-new-in-typescript-6-0 dev
```

### Fonts

Each talk's `src/style.css` declares the fonts its slides use.
Only openly licensed fonts are committed in its `src/fonts/`; the rest, like Microsoft's, can't be redistributed.
Each talk's `build` and `dev` scripts first run [`scripts/fonts.ts`](../scripts/fonts.ts), which copies those fonts in from macOS's font folders (`~/Library/Fonts`, `/Library/Fonts`, and `/System/Library/Fonts`) and from inside Microsoft PowerPoint for Mac.
Other operating systems aren't searched yet.
Fonts it can't find are listed, and the deck draws with fallbacks for them.

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

Read the individual documentation for each linter to understand how it can be configured and used best.

For example, ESLint can be run with `--fix` to auto-fix some lint rule complaints:

```shell
pnpm run lint --fix
```

Lint rules skip each talk's `src/`, since its Slidev decks are converted from PowerPoint files rather than written by hand.

## Type Checking

You should be able to see suggestions from [TypeScript](https://typescriptlang.org) in your editor for all open files.

However, it can be useful to run the TypeScript command-line (`tsc`) to type check the repository's config files:

```shell
pnpm tsc
```

Add `--watch` to keep the type checker running in a watch mode that updates the display as you save files:

```shell
pnpm tsc --watch
```
