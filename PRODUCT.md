# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed by Drew, Nov 2026):

- **Local business owners** in Northern Virginia and the DC Metro area (the studio is in Leesburg, Loudoun County). They want brand films, ads and short-form social content that look expensive without hiring a crew. They are usually not video experts and judge by what they see.
- **DTC and SaaS brands.** DTC brands running Meta and TikTok ads who need a steady supply of fresh ad hooks and cutdowns; SaaS companies who need product walkthroughs and feature demos that are easy to update.

Both arrive to answer one question: can this studio make something this good for me?

## Product Purpose

arperture.io is the marketing site for Arperture Media, a founder-led AI video production studio. It exists to show the work, explain the offers plainly, and get qualified visitors to book a 30-minute discovery call. Success is booked calls.

## Positioning

Cinematic AI video that is written, directed, scored and finished like a full production house, priced well below a traditional shoot. A person directs every project: the AI generates, the studio makes the hundred decisions a generation tool cannot. Current headline: "Big-brand video, small-business budget."

## Operating Context

- Visitors evaluate by watching. Full films live on YouTube (@ArpertureIO); the site shows posters and short loops and opens the films.
- Primary action: Calendly 30-minute discovery call (`CALENDLY_30MIN` in `lib/data.ts`). Secondary: contact form (Formspree) that redirects to `/thank-you/`, which Google Ads conversion tracking depends on.
- HubSpot tracking and forms load site-wide.

## Capabilities and Constraints

- **Offers on the site:** brand films and commercials; ads and short-form social; monthly content partnership; Brand Quickies (from $100 each); spec ads by industry; DTC Always-On AI Ad Creative (Pilot $1.5k one-time, Starter $2k/mo, Growth $4k/mo); SaaS Product Demo Factory (Hero demo $2.5k, Refresh $3k/mo, Variant +$750); image and video enhancement, restoration and colorization.
- **Not offered:** AI consulting, AI fluency training and web visibility audits were removed in Nov 2026. Do not reintroduce them.
- **Stack:** Next.js 15 App Router, fully static export (`output: "export"`), deployed on Vercel; pushing to `main` deploys. All copy and data live in `lib/data.ts`.
- **SEO/GEO is a core requirement:** per-page canonical URLs with trailing slashes, Organization and WebSite JSON-LD, FAQPage and BlogPosting JSON-LD, `sitemap.ts`, `robots.ts` and `public/llms.txt` kept in sync.
- **Security headers:** a strict Content-Security-Policy in `vercel.json`. Self-hosted media in `public/` already works; any new third-party host needs a CSP change.
- **Theme:** dark is the default; a light/dark toggle exists.
- **Undecided:** the final clip set and hosting for a homepage video wall (self-hosted on Vercel is the current plan).

## Brand Commitments

- Name: Arperture Media, shortened to Arperture. Not a typo for "aperture"; keep the spelling consistent everywhere.
- The aperture logo mark (`public/assets/arperture-mark.webp`) is binding.
- Colors, typography and layout are open for redesign (confirmed Nov 2026). The current cyan/coral palette and Clash Display headlines are not binding.
- Founder: Andrew Dallons. Based in Leesburg, Virginia. Contact: contact@arperture.io, (571) 200-1186.

## Evidence on Hand

- **Client work:** Yield Bookkeeping Services (ongoing 2024–present campaign: brand films, seasonal spots, Brand Quickies, social cuts; case study at `/portfolio/yield/`), Terra C Serum brand spot, Bike Nerd documentary trailer.
- **Originals:** Life of Gremmie (10-episode dark comedy; teaser live), Judge Silverback's Court (AI comedy series; case study at `/portfolio/judge/`), Pick Up Gerald (short film), Iridescence (music video).
- **Spec work, labeled as spec:** 11 industry spec ads (food and drink, home services, real estate, pet care, community), Law Office pitch, Monster Energy concept, plus newer spec pieces Catoctin Row (archviz), Pike & Patty (food) and Dulles Dirty (beverage). DTC and SaaS spec hooks in `public/media/dtc/`.
- **Absent, do not fabricate:** client testimonials, client logo walls, view counts, revenue or performance stats, awards.

## Product Principles

1. The work is the proof. Every claim on the page sits next to footage that backs it.
2. One studio, two doors. Local businesses and brands each find their path within one screen, without the site splitting into two brands.
3. Spec is labeled spec. Honest labeling of client work, originals and spec pieces is non-negotiable.
4. One action. Every page leads to booking a discovery call.
5. Fast and findable. Load speed, accessibility and search/AI-answer visibility are never traded for effect.
