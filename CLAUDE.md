# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm start        # Start production server
pnpm types:check  # Run fumadocs-mdx codegen + tsc type check
```

After installing deps (`pnpm install`), `fumadocs-mdx` runs automatically via `postinstall` to generate types from content collections. If you see missing type errors for `fumadocs-mdx:collections/server`, run `pnpm types:check` or just `pnpm dev` once.

## Architecture

**Content pipeline:** Markdown files in `src/content/` → Fumadocs MDX generates typed collections (output to `.source/`) → `src/lib/writing.ts` and `src/lib/pages.ts` load them via `fumadocs-core/source` loader → pages consume the data.

**Collections** are defined in `source.config.ts` with Zod schemas. Two collections:
- `writing` — blog posts (`src/content/writing/*.md`), frontmatter: `title`, `created`, `summary`, `draft`, `updated`
- `pages` — static pages (`src/content/pages/*.md`), frontmatter: `title`, `description`

**Adding a post:** Create a `.md` file in `src/content/writing/` with the required frontmatter. Set `draft: true` to hide from listings. The `created` field drives sort order everywhere.

**Site config** lives entirely in `src/lib/site.ts` — name, tagline, description, and the featured home quote. Edit this file to rebrand or change the quote.

## Styling

All styles are in `src/app/global.css` — no separate component CSS files. Tailwind is used for layout/spacing; semantic design tokens (CSS custom properties) handle color and typography. The named classes (`.paper-frame`, `.paper-panel`, `.post-row`, `.article-body`, etc.) are the design system — prefer extending these over adding new Tailwind utility classes inline.

Font pairing: **Newsreader** (serif, body text) + **IBM Plex Mono** (headings, dates, nav, UI chrome). Mono elements use classes like `.page-title`, `.date-stamp`, `.nav-link`, `.meta-label`.

Color tokens: `--paper-*` for backgrounds, `--ink-*` for text hierarchy, `--line-*` for borders, `--accent` (#7b3f00 warm brown) for interactive/highlight elements.
