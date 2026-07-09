# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The production marketing site for **Arperture**, live at **arperture.io**. Arperture helps small businesses put AI to work — the site **leads with small-business services** (AI consulting, AI fluency training, and Web Visibility / SEO-GEO-AEO audits) and features **cinematic AI video production** as a secondary offering. It's a **Next.js 15 App Router** app built as a **fully static export** and deployed on **Vercel**. Pushing to `main` auto-deploys.

It was recreated from an HTML/CSS prototype exported from Claude Design; that original design source is preserved under `project/` and `chats/` (reference only — not part of the app, excluded in `tsconfig.json`).

## Commands

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # static export → ./out  (also runs TypeScript type-checking)
```

- **No test suite and no configured linter.** Type-checking runs as part of `npm run build` — treat a clean build as the bar before pushing.
- The build must succeed with `output: "export"`: every route is prerendered to static HTML in `out/`. If a page can't be statically generated, the build fails.

## Architecture

### Content lives in one file: `lib/data.ts`
This is the most important thing to know. **Almost all copy, data, pricing, and configuration is centralized in `lib/data.ts`** — portfolio work, case studies, blog posts (full bodies + FAQs), services, verticals, the 14-step process, small-business/consulting offerings, enhancement pricing tiers, the FAQ list, nav items, footer links, social links, Calendly/Formspree constants, and the site-wide `ORG_JSONLD` structured data. **To change wording, prices, or add an item, edit `lib/data.ts`** — the page components just render it.

### Pages (`app/*/page.tsx`)
One folder per route (server components). Dynamic routes use `generateStaticParams` fed from `lib/data.ts`:
- `app/blog/[slug]` — one page per `BLOG_POSTS` entry
- `app/portfolio/[slug]` — one page per `CASES` entry (case studies)

### Components (`components/`)
Server by default; these are `"use client"` because they're interactive:
- `Nav.tsx` — sticky nav, Services + Socials dropdowns, mobile hamburger drawer (`usePathname` for active state)
- `PortfolioGrid.tsx` — portfolio cards + YouTube video lightbox (`youtube-nocookie` embeds)
- `ContactForm.tsx` — posts to Formspree (`FORMSPREE_ENDPOINT` in data.ts)
- `CalendlyButton.tsx` / `lib/calendly.ts` — opens the Calendly popup widget (script loaded in `app/layout.tsx`)
- `BlogShare.tsx` — share buttons + copy-link
- `ui.tsx` (`Kicker`, `H1`, `H2`, `GhostLink`) and `icons.tsx` are presentational helpers

### Styling
Two layers, no CSS framework:
- `app/colors_and_type.css` — the Arperture design-system tokens (CSS custom properties: colors, type, spacing, radii, motion). Fonts load via CDN `@import` here — **do not self-host / swap to `next/font`.**
- `app/globals.css` — reset, reusable classes (`.btn*`, `.card*`, `.wrap`, `.nav*`, hover/focus states), responsive breakpoints, and the `arpSpin` keyframe.
- Pattern: **inline `style` objects for one-off layout; CSS classes for anything needing `:hover`/`:focus`/media queries** (inline styles can't express those). The accent color is coral via `--accent`.

### SEO / GEO (a core requirement — don't regress it)
- Every page's `metadata` sets `alternates: { canonical: "/route/" }` (note trailing slash — `trailingSlash: true` is on).
- Site-wide **Organization/ProfessionalService + WebSite JSON-LD** is injected in `app/layout.tsx` from `ORG_JSONLD`.
- `FAQPage` JSON-LD on `app/faq` and each blog post; `BlogPosting` JSON-LD on blog posts.
- `app/sitemap.ts`, `app/robots.ts`, and `public/llms.txt` — keep these in sync when adding routes.

## Conventions & gotchas

- **Adding a page:** create `app/<route>/page.tsx` with a `metadata` export including `alternates: { canonical: "/<route>/" }`; add the path to `app/sitemap.ts`; add a nav/footer link in `lib/data.ts`.
- **Metadata routes need `export const dynamic = "force-static"`** (`app/sitemap.ts`, `app/robots.ts`) — required under `output: "export"`, or the build errors.
- **Anything interactive** (state, effects, event handlers, browser APIs) must be a `"use client"` component.
- **Images:** use `next/image` with local assets in `public/assets/`. The export runs with `images: { unoptimized: true }`, so **compress source images before adding them** (the repo uses resized progressive JPEGs; large PNGs hurt Core Web Vitals). Photographic covers double as OG images, so keep them JPEG.
- **Brand text rules:** H1s render uppercase (via `textTransform`), H2s use title case — keep this consistent with existing pages.
- Business facts (phone, Leesburg VA address, socials, founder) live in `ORG_JSONLD` and the footer/contact data — update them together.
