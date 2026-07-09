---
name: publish-blog-post
description: Publish a blog post to arperture.io from a Google Doc — writes the post into lib/data.ts with full SEO/GEO treatment, generates a featured image and infographics with Higgsfield, deploys a Vercel preview, then STOPS for the owner's approval before merging to production. Use when the user shares a Google Docs link and asks to post/publish/add it to the blog.
---

# Publish a blog post from a Google Doc

Input: a Google Docs URL (or file ID) in `$ARGUMENTS` or the user's message.
Deliverable: a PR with the complete post, verified on a Vercel preview, handed
to the user for approval. **Never merge to production without the user's
explicit go-ahead — the preview review is the point of this workflow.**

## 1. Branch

- If the session has a designated `claude/...` branch whose PR was already
  merged, restart it from main:
  `git fetch origin main && git checkout -B <branch> origin/main`
  (force-with-lease push later is fine when the remote branch holds only
  merged history).
- Otherwise create `blog/<slug>` from `origin/main`.

## 2. Fetch and adapt the doc

- Read via Google Drive MCP: `read_file_content` with the ID from the URL
  (`/document/d/<ID>/`).
- Add the post as the FIRST entry of `BLOG_POSTS` in `lib/data.ts` (new
  `blog-N` id = highest existing + 1). Fill every field:
  - `slug`: short, keyword-rich, hyphenated.
  - `date` ("Jul 2026" style) and `datePublished` (ISO, today).
  - `readTime`: ~200 wpm, rounded ("7 min read").
  - `category`: "Small Business AI" for small-business topics; match an
    existing category when one fits.
  - `excerpt` (~1–2 sentences) and `metaDescription` (~150–160 chars,
    keyword-bearing — it feeds meta/OG/Twitter).
  - `faqs`: exactly the kind of questions people ask AI assistants
    (3 is the norm). They render on-page AND become FAQPage JSON-LD, so
    answers must be self-contained and factual. Include one
    answer-engine-friendly question when the content allows.
  - `body`: blocks of `{h2}`, `{p}`, and `{img, src, text}` (text = alt).
    House style: H2s in Title Case (Every Word Capitalized); em-dashes;
    typographic quotes. Convert doc bullet lists into flowing prose;
    replace any comparison table with an infographic (the body format has
    no table block). If the doc's closing CTA links to the doc itself or
    anywhere odd, rewrite it as plain text pointing to the contact page.
    Stay faithful to the doc's voice and facts — light copyedit only.
- Add the post's URL to `public/llms.txt` under Writing (title + one-line
  description). Sitemap picks the slug up automatically from `BLOG_POSTS`.

## 3. Images (Higgsfield MCP)

Aesthetic rule from the owner: **never futuristic** — no holograms, glowing
screens, robots, sci-fi. Imagery is for real small-business owners.

- **Cover** — `generate_image` model `soul_2`, `aspect_ratio "16:9"`,
  `count: 2`. Prompt pattern: documentary-style editorial photo of a real
  small business owner in an authentic workplace, warm natural light,
  35mm, shallow depth of field; end with the negative list
  ("No futuristic elements, no holograms, no glowing screens, no robots,
  no visible brand logos, no readable signage text"). Readable signage is
  the top reject reason — generated store signs come out as gibberish.
- **Infographics** (1–2, one per major stat/framework in the post) —
  model `nano_banana_pro`, 16:9. Brand style block for the prompt:
  dark charcoal background `#1C1C1C`, off-white sans-serif type, accents
  coral `#FF6F61`, cyan `#2ECCFA`, purple `#B98CE8`; small uppercase
  letterspaced mono-style title; "flat vector style, generous whitespace,
  no gradients, no 3D, no robots, no photographs". Spell out EVERY word
  and number the graphic must contain, and state chart proportions
  explicitly ("the 31% arc must cover about one-third of the circle").
- Poll `show_generations`, download the `rawUrl` PNGs with curl.
  If downloads 403 (egress policy blocks `d8j0ntlcm91z4.cloudfront.net`),
  don't route around it — tell the user to allow that host in the
  environment's network policy, and park the PR as draft with the asset
  paths documented until they do.
- **Proofread every image by Reading it**: no gibberish text anywhere,
  every number matches the article, chart proportions match the stated
  percentages. Regenerate (with corrective prompt language) rather than
  ship a wrong graphic.
- Compress with Pillow (`pip install Pillow` if missing) into
  `public/assets/`: cover → `blog-N.jpg`, 1400px wide, progressive JPEG
  quality 75 (target ≤ ~140 KB); infographics → `blog-N-<topic>.jpg`,
  native 1376×768, quality 85.

## 4. Verify, ship, preview

- `npm run build` must pass; confirm the new route appears in the output.
- Commit (existing message conventions), push, open a **draft PR** to
  main; subscribe to PR activity.
- Wait for the Vercel preview (~60–90 s; a 404 on the preview URL just
  means the build hasn't finished — the branch alias serves the previous
  deploy until then). Verify the rendered page via the Vercel MCP
  (`web_fetch_vercel_url`): HTTP 200, title, canonical, BlogPosting +
  FAQPage JSON-LD, and all `blog-N*` image references present. Note the
  fetched HTML escapes quotes (`rel=\"canonical\"`), so grep accordingly.
- Send the user the preview URL for the post page and **stop. Wait for
  approval.** Do not mark ready or merge on your own.

## 5. After the user approves

- Mark the PR ready for review (merge is blocked while draft), merge it,
  then confirm the production deployment for the merge commit reaches
  READY (Vercel MCP `list_deployments`) and give the user the live
  arperture.io URL. Clean up any check-in triggers.
