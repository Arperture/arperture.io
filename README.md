# Arperture Media — Website

The production website for **Arperture Media**, a cinematic AI creative studio.
Built as a statically-exported **Next.js (App Router)** site and designed to deploy to **Vercel**.

This is the real implementation of the design prototype exported from Claude Design.
The original handoff bundle (design source, chat transcripts, design-system tokens) is
preserved under [`project/`](./project) and [`chats/`](./chats) for reference.

## Stack

- **Next.js 15** (App Router) with `output: "export"` → a fully static site (no server needed)
- **React 19**, **TypeScript**
- Design tokens from the Arperture design system (`app/colors_and_type.css`)
- Fonts: Clash Display, Hanken Grotesk, Space Mono (loaded via CDN in the tokens CSS)

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | AI Video Services & Production |
| `/small-business` | AI Consulting & Search Visibility (`#consulting`, `#visibility`) |
| `/portfolio` | Portfolio grid (video lightboxes) |
| `/portfolio/yield`, `/portfolio/judge` | Case studies |
| `/enhancement` | Image & Video Enhancement / Restoration |
| `/about` | About |
| `/training` | Training & Consulting |
| `/blog`, `/blog/[slug]` | Blog + 3 full posts (with FAQ + Article JSON-LD for SEO/GEO) |
| `/contact` | Contact form (Formspree) |
| `/privacy` | Privacy Policy |
| `/booking-confirmed` | Post-Calendly confirmation (noindex) |

`sitemap.xml` and `robots.txt` are generated at build time.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)

```bash
npm run build      # outputs a static site to ./out
```

## Deploy to Vercel

Import the repo in Vercel and accept the defaults — Vercel detects Next.js and runs
`next build` automatically. No environment variables are required.

## Integrations to know

- **Contact form** posts to Formspree endpoint `https://formspree.io/f/mlgyowya`
  (in `lib/data.ts` → `FORMSPREE_ENDPOINT`).
- **Calendly** popups use `drew-arperture/30min` (Book a Call) and
  `drew-arperture/geo-foundation-audit` (GEO audit), configured in `lib/data.ts`.
- **Portfolio videos** embed via `youtube-nocookie.com` in an in-page lightbox.

## Editing content

Nearly all copy and data lives in [`lib/data.ts`](./lib/data.ts) — work, case studies,
blog posts, service tiers, pricing, nav, and footer links. Images are in
[`public/assets/`](./public/assets).
