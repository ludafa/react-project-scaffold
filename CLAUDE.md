# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project purpose

This repo is a **template scaffold** (consumed via `degit ludafa/react-project-scaffold` or GitHub "Use this template"). It is intentionally minimal — `src/` contains a single `App.tsx` demo page. Treat changes as edits to a starter template, not a product.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` and `pnpm` overrides in `package.json`).

- `pnpm dev` — start Vite dev server with HMR
- `pnpm build` — type-check (`tsc`) then `vite build`. The `tsc` step must pass for the build to succeed.
- `pnpm lint` — ESLint over `.ts`/`.tsx` with `--max-warnings 0` (any warning fails CI)
- `pnpm preview` — preview production build

There is no test runner configured.

## Architecture notes

- **Vite is replaced with `rolldown-vite`.** `package.json` declares `"vite": "npm:rolldown-vite@7.3.1"` in devDependencies and a `pnpm.overrides` entry pinning `vite` to `npm:rolldown-vite@7.2.5` across the dep graph. When debugging build/bundling issues, remember the underlying bundler is Rolldown, not Rollup/esbuild — behavior may diverge from upstream Vite docs.
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no `tailwind.config.*` file — v4 is config-less / CSS-first). Styles enter through `src/main.css` (`@import "tailwindcss";`), which is loaded by `<link rel="stylesheet">` in `index.html` rather than imported from `main.tsx`. If you add Tailwind theme customizations, use the v4 CSS `@theme` syntax in `main.css`.
- **Icons** come from `@iconify/react` with the `logos`, `solar`, and `svg-spinners` icon sets bundled as devDependencies. Use `<Icon icon="logos:react" />` style — no manual SVG imports.
- **Entry chain**: `index.html` → `src/main.tsx` (React 19 `createRoot` + `StrictMode`) → `src/App.tsx`. `main.css` is loaded directly by `index.html`, not via JS import.

## Tooling quirks to be aware of

- **ESLint config file is `eslintrc.config.mjs`** — note this filename is non-standard (neither `.eslintrc.*` legacy nor `eslint.config.*` flat). It is listed in its own `ignorePatterns` and the `lint` script uses the legacy `--ext ts,tsx` flag, so it is being consumed as a legacy-style config. Do not rename it without also updating the lint script.
- **`simple-import-sort`** is enabled — imports and exports are auto-sorted; let the linter rewrite order rather than hand-sorting.
- **Prettier** runs via `eslint-plugin-prettier` and uses `prettier-plugin-tailwindcss` to sort Tailwind class names. Run lint (or your editor's Prettier integration) after edits to keep class order stable.
- **TypeScript** is split into `tsconfig.json` (project references), `tsconfig.app.json` (app code), and `tsconfig.node.json` (Vite config). Path/lib changes for app code go in `tsconfig.app.json`.

## README content of note

The README's "Expanding the ESLint configuration" section is upstream Vite-template boilerplate suggesting type-aware lint rules — it does **not** describe the current config. The README also still mentions UnoCSS in places; the project migrated to Tailwind in commit `e7db69b` and UnoCSS is no longer present.
