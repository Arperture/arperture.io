# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The production marketing site for **Arperture Media**, live at **arperture.io**. Arperture is an **AI video production studio** for small businesses and DTC/SaaS brands: cinematic brand films, ads, and short-form social content. The site's one main action is booking a discovery call. The small-business services it used to lead with (AI consulting, AI fluency training, Web Visibility / SEO-GEO-AEO audits) were dropped in Nov 2026 and should not be reintroduced. It's a **Next.js 15 App Router** app built as a **fully static export** and deployed on **Vercel**. Pushing to `main` auto-deploys.

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
This is the most important thing to know. **Almost all copy, data, pricing, and configuration is centralized in `lib/data.ts`** — portfolio work, case studies, blog posts (full bodies + FAQs), services, verticals, the 14-step process, enhancement pricing tiers, the FAQ list, nav items, footer links, social links, Calendly/Formspree constants, and the site-wide `ORG_JSONLD` structured data. **To change wording, prices, or add an item, edit `lib/data.ts`** — the page components just render it.

### Pages (`app/*/page.tsx`)
One folder per route (server components). Dynamic routes use `generateStaticParams` fed from `lib/data.ts`:
- `app/blog/[slug]` — one page per `BLOG_POSTS` entry
- `app/portfolio/[slug]` — one page per `CASES` entry (case studies)

### Components (`components/`)
Server by default; these are `"use client"` because they're interactive:
- `Nav.tsx` — sticky nav (Work, Services, Brands, About, Blog, Contact + Book a call), mobile drawer (`usePathname` for active state)
- `HomeHero.tsx` — the homepage video wall: five tilted, drifting columns of silent loops from `WALL_COLUMNS` (`public/media/wall/<id>.mp4` + `.jpg`). Only on-screen loops play; reduced motion shows posters.
- `WorkGrid.tsx` — portfolio grid from `PROJECTS` (filter chips, hover-to-play, `masonry` or `uniform` layout)
- `Lightbox.tsx` — shared player: YouTube (`youtube-nocookie`) when `youtubeId` is set, else a self-hosted `film` (`public/media/films/`), else the loop
- Every `PROJECTS` entry needs an honest `label` ("Client work · …" only for cleared clients, "Spec · …" for spec work) and a `year`. No real-brand IP in spec work.
- `ContactForm.tsx` — posts to Formspree (`FORMSPREE_ENDPOINT` in data.ts), then `location.replace`s to `/thank-you/` — the noindex page Google Ads conversion tracking keys on. Keep it a full page load, not `router.push`.
- `CalendlyButton.tsx` / `lib/calendly.ts` — opens the Calendly popup widget (script loaded in `app/layout.tsx`)
- `BlogShare.tsx` — share buttons + copy-link
- `ui.tsx` (`Kicker`, `H1`, `H2`, `GhostLink`) and `icons.tsx` are presentational helpers

### Styling
Two layers, no CSS framework:
- `app/colors_and_type.css` — the Arperture design-system tokens (v3). One family, **Archivo** variable (condensed 62% width / 800 weight uppercase for display, normal width for body), loaded via CDN `@import` — **do not self-host / swap to `next/font`.** Warm dark ground `#12100E`, paper text `#F1ECE3`, one **amber** accent `#E9A23B`. Dark only (no light theme). Legacy cyan/coral/purple/blue token names still exist but resolve to amber or warm neutrals; don't add new gradients, glows, or mono "kicker" labels.
- `app/globals.css` — reset, reusable classes (`.btn*`, `.card*`, `.wrap`, `.nav*`, hover/focus states), responsive breakpoints, and the `arpSpin` keyframe.
- Pattern: **inline `style` objects for one-off layout; CSS classes for anything needing `:hover`/`:focus`/media queries** (inline styles can't express those). The accent color is amber via `--accent`. Buttons are square-ish (3px radius); cards and media use 6px.

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

## Blog

- Posts are `BLOG_POSTS` entries in `lib/data.ts` (newest first, `id` = `blog-N`, highest + 1). Body blocks are `h2`, `p`, or `img` only (no lists or tables). Every post needs `metaDescription`, `datePublished`, and 3 FAQs (they render on-page and become FAQPage JSON-LD).
- Add each new post to `public/llms.txt` under **Writing**. The sitemap picks posts up automatically.
- Categories in use: `AI for Business`, `Craft & Process`, `Technique`, and `AI News`.
- **AI News** is a weekly roundup (AI video, advertising, media, small business) drafted by a scheduled task every Monday. It reuses the standing cover `/assets/blog-ai-news.jpg`, ships on a `blog/ai-roundup-YYYY-MM-DD` branch as a draft PR, and is merged only after the owner approves the Vercel preview.
- Never merge a blog post to `main` without the owner's explicit approval. See `.claude/skills/publish-blog-post/SKILL.md` for the full checklist.

