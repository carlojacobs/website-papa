# AGENTS.md

This file provides guidance to AI coding agents (e.g. OpenAI Codex, GitHub Copilot Workspace) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm start        # Start production server
pnpm types:check  # Run fumadocs-mdx codegen + tsc type check
```

After installing deps (`pnpm install`), `fumadocs-mdx` runs automatically via `postinstall` to generate types from content collections. If you see missing type errors for `fumadocs-mdx:collections/server`, run `pnpm types:check` or just `pnpm dev` once.

## Architecture

**Content pipeline:** Markdown files → Fumadocs MDX generates typed collections (output to `.source/`) → `src/lib/writing.ts` and `src/lib/pages.ts` load them via `fumadocs-core/source` loader → pages consume the data.

**Collections** are defined in `source.config.ts` with Zod schemas. Two collections:
- `writing` — blog posts (`ARTIKELEN/*.md`), frontmatter: `titel`, `datum`, `samenvatting`, `concept` (draft flag), `bijgewerkt`
- `pages` — static pages (`src/content/pages/*.md`), frontmatter: `titel`, `beschrijving`

Note: all frontmatter field names are Dutch. The schema `.transform()` maps them to English (`title`, `description`) for framework compatibility.

**Adding a post:** Create a `.md` file in `ARTIKELEN/` with the required frontmatter. The `datum` field drives sort order everywhere. Drafts live in `CONCEPTEN/` — only files in `ARTIKELEN/` are loaded by the collection.

**Site config** lives entirely in `src/lib/site.ts` — name, tagline, description, and the featured home quote. Edit this file to rebrand or change the quote.

## Styling

All styles are in `src/app/global.css` — no separate component CSS files. Tailwind is used for layout/spacing; semantic design tokens (CSS custom properties) handle color and typography. The named classes (`.featured-section`, `.post-item`, `.article-body`, `.section-label`, etc.) are the design system — prefer extending these over adding new Tailwind utility classes inline.

Font pairing: **IM Fell English** (serif, body text) + **Cormorant Garamond** (display/headings) + **Courier Prime** (mono UI chrome). Variables: `--font-body`, `--font-display`, `--font-mono`, `--font-script` (Caveat).

Color tokens: `--bg` (page background), `--ink` / `--ink-light` (text hierarchy), `--rule` / `--rule-strong` (borders), `--accent` (#2e5c3e dark green) for interactive/highlight elements.
