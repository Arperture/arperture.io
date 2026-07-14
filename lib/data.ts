// ============================================================
// Arperture Media — site content (ported from the design prototype)
// ============================================================

export const SITE_URL = "https://arperture.io";
export const DEFAULT_OG_IMAGE = "/assets/pickup-gerald-hero.jpg";

export const CALENDLY_30MIN = "https://calendly.com/drew-arperture/30min";
export const CALENDLY_GEO = "https://calendly.com/drew-arperture/geo-foundation-audit";
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgyowya";
export const PHONE = "(571) 200-1186";
export const PHONE_TEL = "+15712001186";
export const EMAIL = "contact@arperture.io";

// ---------- SOCIAL LINKS ----------
export type SocialKey = "instagram" | "youtube" | "tiktok" | "facebook";
export const SOCIAL_LINKS: { key: SocialKey; label: string; url: string }[] = [
  { key: "instagram", label: "Instagram", url: "https://www.instagram.com/arperturemedia/" },
  { key: "youtube", label: "YouTube", url: "https://www.youtube.com/@DrewDoesAI" },
  { key: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@arperturemedia" },
  { key: "facebook", label: "Facebook", url: "https://www.facebook.com/arperture" },
];

// ---------- ORGANIZATION / LOCAL BUSINESS SCHEMA (site-wide) ----------
// Entity data for search engines and answer engines (GEO/AEO).
export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Arperture Media",
      alternateName: "Arperture",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/arperture-mark.webp`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description:
        "Arperture helps small businesses put AI to work — hands-on AI consulting, AI fluency training for teams, and Web Visibility audits (SEO, GEO & AEO) that show whether Google and ChatGPT recommend your business. The studio also produces cinematic AI video, sound design, and branded stories for brands, artists & storytellers.",
      email: EMAIL,
      telephone: "+1-571-200-1186",
      founder: { "@type": "Person", name: "Andrew Dallons" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Leesburg",
        addressRegion: "VA",
        addressCountry: "US",
      },
      areaServed: { "@type": "Place", name: "Worldwide" },
      sameAs: SOCIAL_LINKS.map((s) => s.url),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Arperture Media",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

// ---------- NAV ----------
export const NAV_PRIMARY: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_MENU: { label: string; href: string }[] = [
  { label: "Consulting", href: "/small-business#consulting" },
  { label: "AI Fluency", href: "/small-business#fluency" },
  { label: "Search Visibility", href: "/small-business#visibility" },
  { label: "Video", href: "/services" },
];

// ---------- PORTFOLIO / WORK ----------
export type Work = {
  id: string;
  slug: string; // case-study route slug ("" when no case)
  title: string;
  category: string;
  date: string;
  grad: string;
  blurb: string;
  youtubeId: string;
  hasCase: boolean;
};

export const WORK_DATA: Work[] = [
  {
    id: "pickup-gerald", slug: "", title: "Pick Up Gerald", category: "AI Short Film", date: "June 2025",
    grad: "conic-gradient(from 210deg,var(--cyan-400),var(--purple-400),var(--coral-400),var(--cyan-400))",
    blurb: "A fully AI-directed short film created with Google Veo. Exploring character, narrative, and cinematic language through generative video.",
    youtubeId: "jwmfDa8gbXw", hasCase: false,
  },
  {
    id: "yield", slug: "yield", title: "Yield Bookkeeping Services", category: "Client Work · Brand Videos", date: "2024–Present",
    grad: "linear-gradient(135deg,var(--blue-400) 0%,var(--purple-400) 55%,var(--coral-400) 100%)",
    blurb: "A full AI-powered video content campaign for a Brambleton, VA bookkeeping firm — brand films, seasonal spots, and short-form social content.",
    youtubeId: "y0uDNgH5Oxc", hasCase: true,
  },
  {
    id: "terra-c-serum", slug: "", title: "Terra C Serum", category: "Client Work · Brand Video", date: "April 2026",
    grad: "linear-gradient(135deg,var(--blue-400) 0%,var(--purple-400) 55%,var(--coral-400) 100%)",
    blurb: "A horizontal brand spot for Terra C Serum — AI-generated product storytelling built for a clean, cinematic skincare launch.",
    youtubeId: "_DEeKSSlOis", hasCase: false,
  },
  {
    id: "monster-energy", slug: "", title: "Monster Energy: Unleash the Ultra", category: "Spec Ad · Concept", date: "2026",
    grad: "linear-gradient(135deg,var(--blue-400) 0%,var(--purple-400) 55%,var(--coral-400) 100%)",
    blurb: "A conceptual spec commercial for Monster Energy Ultra Zero — the mid-day office slump, unleashed. A self-directed proof that AI-generated production can stand shoulder to shoulder with a big-brand spot.",
    youtubeId: "p-7DyWsf15I", hasCase: false,
  },
  {
    id: "music-video", slug: "", title: "Iridescence", category: "Music Video", date: "Spring 2025",
    grad: "conic-gradient(from 210deg,var(--cyan-400),var(--purple-400),var(--coral-400),var(--cyan-400))",
    blurb: "A hypnotic AI-generated music video for an upbeat dub techno journey — a showcase of AI serving artistic vision, not replacing it.",
    youtubeId: "MLvROCITfpY", hasCase: false,
  },
  {
    id: "judge", slug: "judge", title: "Judge Silverback's Court", category: "AI Comedy Series · YouTube", date: "Aug 2025–Feb 2026",
    grad: "linear-gradient(135deg,var(--blue-400) 0%,var(--purple-400) 55%,var(--coral-400) 100%)",
    blurb: "An ongoing AI courtroom comedy series — Judge Silverback presides over absurd cases with full AI-generated visuals, voice, and atmosphere.",
    youtubeId: "tgkLIjMx2k4", hasCase: true,
  },
  {
    id: "bike-nerd", slug: "", title: "Bike Nerd", category: "Client Work · Documentary Trailer", date: "Summer 2024",
    grad: "conic-gradient(from 210deg,var(--cyan-400),var(--purple-400),var(--coral-400),var(--cyan-400))",
    blurb: "An AI-generated pitch trailer for a feature documentary following the first African American female professional mountain biking racer.",
    youtubeId: "p0yhKpYAd4c", hasCase: false,
  },
];

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string, autoplay = false) =>
  `https://www.youtube-nocookie.com/embed/${id}?${autoplay ? "autoplay=1&mute=1&" : ""}rel=0&modestbranding=1`;

// ---------- CASE STUDIES ----------
export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  badgeBg: string;
  badgeColor: string;
  youtubeId: string;
  detail: string;
  linkLabel: string;
  linkUrl: string;
  stats: { n: string; l: string }[];
  projectsLabel: string;
  projects: { tag: string; title: string; body: string }[];
  shortFormLabel: string;
  shortForm: { tag: string; title: string }[];
};

export const CASES: Record<string, CaseStudy> = {
  yield: {
    slug: "yield", title: "Yield Bookkeeping Services",
    category: "Client Work · Brand Videos · Ongoing Collaboration",
    client: "Yield Bookkeeping Services", year: "2024–2026",
    badgeBg: "rgba(255,111,97,.12)", badgeColor: "var(--coral-300)", youtubeId: "y0uDNgH5Oxc",
    detail: "A full AI-powered video content campaign for a Brambleton, VA bookkeeping firm — built to make financial services feel human. Brand films, seasonal spots, and social-first short-form content, crafted with Midjourney, Kling AI, Runway, Eleven Labs, and Suno.",
    linkLabel: "Visit yieldbookkeeping.com", linkUrl: "https://www.yieldbookkeeping.com",
    stats: [{ n: "3", l: "Brand films" }, { n: "4", l: "Social cuts" }, { n: "5", l: "AI tools in pipeline" }],
    projectsLabel: "Widescreen content",
    projects: [
      { tag: "Brand Film · 2024", title: "A Moment of Zen", body: "A calming brand film positioning Yield as the antidote to financial stress. Created entirely with AI — Midjourney for visuals, Kling AI and Runway for motion, Eleven Labs for voice, and Suno for the original score." },
      { tag: "Brand Film · 2024", title: "Say No to Excel!", body: "A punchy, humor-driven spot making the case for professional bookkeeping over DIY spreadsheets. Fast-paced editing, AI-generated visuals, and a direct message that resonates with small business owners everywhere." },
      { tag: "Seasonal Brand Film · 2024", title: "The North Pole's Secret", body: "A holiday brand film that reimagines Santa's operation as a perfectly-organized business — because great bookkeeping is the real magic behind every success. Yield's most creative campaign to date." },
    ],
    shortFormLabel: "Vertical & social content",
    shortForm: [
      { tag: "Brand · 2024", title: "A Moment of Zen" },
      { tag: "Seasonal · 2024", title: "The Gift of Bookkeeping" },
      { tag: "Informational · 2025", title: "You Filed a Tax Extension" },
      { tag: "Brand · 2025", title: "Free Time" },
    ],
  },
  judge: {
    slug: "judge", title: "Judge Silverback's Court",
    category: "AI Series · Courtroom Comedy · Ongoing Collaboration",
    client: "“It's A Jungle In There.”", year: "2026",
    badgeBg: "rgba(142,68,173,.15)", badgeColor: "var(--purple-300)", youtubeId: "tgkLIjMx2k4",
    detail: "An AI-produced courtroom comedy web series developed in long-term collaboration with a writing partner. Real unemployment disputes — dramatized through AI-generated animal characters. The Honorable Judge Silverback presides with primal authority. Excuses are crushed. Fairness is absolute. Final verdicts.",
    linkLabel: "Watch on judgesilverback.com", linkUrl: "https://judgesilverback.com",
    stats: [{ n: "Ongoing", l: "Episodes & shorts" }, { n: "1", l: "Recurring lead" }, { n: "Weekly", l: "Release cadence" }],
    projectsLabel: "In this project",
    projects: [
      { tag: "Hype Reel", title: "Case Dismissed", body: "The official hype reel for Judge Silverback's Court — introducing the world to the courtroom where the law of the jungle reigns supreme. AI-generated characters, real stakes, unforgettable drama." },
      { tag: "Featured Episode", title: "The Case of the Buzzing Distraction", body: "A normal unemployment hearing spirals into chaos when a mysterious buzzing fills the courtroom. The claimant brought a vibrator to work for “stress relief”, was warned, and did it again. Judge Silverback must decide: was the employer too harsh, or did the employee cross the line?" },
    ],
    shortFormLabel: "Courtroom shorts — bite-sized justice, served daily",
    shortForm: [
      { tag: "Courtroom Short", title: "Can You Hear That Buzzing?" },
      { tag: "Courtroom Short", title: "Ken Kalihari Investigates" },
      { tag: "Courtroom Short", title: "Back-Lot Tour" },
    ],
  },
};

// ---------- BLOG ----------
// For img blocks, `text` is the image's alt text and `src` the asset path.
export type BlogBlock = { h2?: boolean; p?: boolean; img?: boolean; src?: string; text: string };
export type BlogPost = {
  id: string;
  slug: string;
  date: string;
  datePublished: string; // ISO 8601, for structured data
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  coverSrc: string;
  faqs: { q: string; a: string }[];
  body: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-5", slug: "claude-vs-chatgpt-vs-gemini-for-small-business",
    date: "Jul 2026", datePublished: "2026-07-09", readTime: "7 min read", category: "Small Business AI",
    title: "Claude vs. ChatGPT vs. Gemini: A Plain-English Guide for Small Business Owners",
    excerpt: "All three cost the same $20 a month, so price can't decide for you. How to pick by what each tool is actually good at.",
    metaDescription: "Claude vs. ChatGPT vs. Gemini for small businesses in 2026 — what each AI assistant is best at, where they differ on images, video, and documents, and a practical four-step way to pick one.",
    coverSrc: "/assets/blog-5.jpg",
    faqs: [
      { q: "Which AI tool is best for a small business in 2026?", a: "There's no single winner — Claude, ChatGPT, and Gemini all cost about $20/month and all handle everyday writing, summarizing, and research well. Pick by your highest-volume task: ChatGPT for one broad all-rounder across a mixed team, Claude for writing quality and long-document analysis, and Gemini if your business runs on Google Workspace or needs images and video." },
      { q: "Can ChatGPT still generate video?", a: "No. OpenAI retired its video generator, Sora, in April 2026, so ChatGPT no longer creates video on its own — it still generates strong images. For AI video, Google's Gemini is now the mainstream option, with its Veo model producing short clips with synchronized audio, plugged directly into YouTube Shorts." },
      { q: "Should a small business pay for more than one AI assistant?", a: "Usually not at first. Too many tools create confusion and unused subscriptions. Test the free tiers on real work for two weeks, pay for the one that wins, and only add a second tool if it has a clearly different job — for example, one subscription for writing plus a free tier covering visuals." },
    ],
    body: [
      { p: true, text: "If you run a small business and you've been putting off the “which AI should I actually use” decision, here's the good news: in 2026 there's no wrong answer. Claude, ChatGPT, and Gemini are all genuinely useful, and all three cost the same $20/month for their standard paid plans (each also has a free tier worth trying first). The price is identical, so you get to choose based on what the tool is good at — not what it costs." },
      { p: true, text: "The bad news is that “they're all good” is exactly why the choice feels confusing. So let's cut through it. Here's the thirty-second version, then the detail." },
      { h2: true, text: "The Thirty-Second Version" },
      { p: true, text: "ChatGPT is the breadth play — the flexible all-rounder that does a little of everything competently, and the safest first tool if you want one assistant for the whole team. Claude is the depth play — the best at writing that doesn't sound like a robot wrote it, at reading long documents, and at anything that needs careful, precise output. Gemini is the ecosystem play — if your business already lives in Gmail, Google Docs, Sheets, and Drive, Gemini is baked right into the apps you use all day, and it's also the clear leader for images and video." },
      { p: true, text: "If you take nothing else away: pick the tool that touches your highest-volume task. Whatever you do most, choose the AI that's best at that." },
      { img: true, src: "/assets/blog-5-comparison.jpg", text: "Infographic: ChatGPT is breadth (a little of everything for the whole team), Claude is depth (the best writing and long-document analysis), Gemini is ecosystem (built into Gmail, Docs & Sheets and the leader in images and video). Pick the tool that touches your highest-volume task." },
      { h2: true, text: "First, What They All Have In Common" },
      { p: true, text: "Before the differences, it's worth saying how similar these tools really are. All three can write emails, summarize a report, brainstorm ideas, answer research questions, draft social posts, clean up a spreadsheet, and explain something complicated in plain language. For the everyday “help me write this / help me understand that” work that makes up most of a business owner's AI use, any of the three will serve you well." },
      { p: true, text: "They're also structurally the same: a chat window you can use in a browser, mobile apps, a free tier with limits, a ~$20 paid tier that removes most of those limits, and business/team plans for when you're rolling it out to staff. So the question isn't really whether AI will help — it's which flavor fits your work best." },
      { h2: true, text: "ChatGPT — The Versatile All-Rounder" },
      { p: true, text: "ChatGPT is the most widely used AI tool in business, and its biggest advantage is simply that it's good at almost everything. It's not necessarily the best at any one thing, but it's genuinely capable across writing, brainstorming, data analysis, image generation, and voice — all in one interface. You can write a marketing email, generate a product image, analyze a spreadsheet, and talk to it out loud with voice mode, without switching tools." },
      { p: true, text: "It also has the biggest ecosystem: more third-party apps, chatbot platforms, and automation tools plug into ChatGPT than any competitor, so if you ever want to build a customer-facing chatbot or wire AI into other software, ChatGPT usually gets supported first. Custom GPTs let you build a reusable mini-assistant — say, one that always writes in your brand voice — and share it with your team, with agent mode carrying out multi-step tasks on higher tiers." },
      { p: true, text: "Worth knowing: OpenAI retired its video generator, Sora, in April 2026 — so ChatGPT no longer creates video on its own. It still generates strong images, but if video matters to you, that's now Gemini's territory (more below). Best for: businesses that want one broad, familiar assistant for a whole team, plus anyone building AI into other software." },
      { h2: true, text: "Claude — The Writing And Analysis Specialist" },
      { p: true, text: "Claude's reputation is for quality and care. It produces the most natural-sounding writing of the three — the least “generic AI filler” — and it follows detailed instructions the most precisely. It's also the strongest of the three at reading and reasoning through long, dense documents: paste in a full contract, an RFP, a policy, or a stack of reports and ask questions across all of it. This is where Claude quietly shines for service businesses, consultants, and anyone drowning in paperwork." },
      { p: true, text: "Claude's Projects feature lets you set up a workspace with persistent instructions and reference files, so it keeps your context across many conversations instead of starting fresh each time. Anthropic also launched a small-business offering in 2026, with connectors and ready-to-run workflows aimed specifically at smaller teams. And if you (or a developer you hire) build websites, scripts, or automations, Claude is the strongest coding tool of the three." },
      { p: true, text: "Worth knowing: Claude leans into text. It handles images you give it well, but it isn't built around generating images and video the way Gemini is, and its library of native app integrations is smaller than ChatGPT's or Gemini's. Best for: document-heavy and writing-heavy work — proposals, contracts, long-form content, and anything where the quality of the words on the page matters." },
      { h2: true, text: "Gemini — The Creative And Google-Native Powerhouse" },
      { p: true, text: "Gemini's superpower is that it lives inside Google. If your business already runs on Google Workspace — Gmail, Docs, Sheets, Slides, Drive, Calendar, Meet — Gemini shows up right where you're already working. It'll draft a reply inside Gmail, summarize a doc inside Docs, build a formula inside Sheets, and recap a meeting inside Meet, with no copying and pasting between tabs. For a lot of small teams, the value isn't in the chat window at all — it's in the AI features baked into the apps you already pay for. And in 2026, Gemini is bundled into the paid Google Workspace plans, so you may already have it." },
      { p: true, text: "For images and video, Gemini is the clear leader — and that matters a lot for marketing. Nano Banana (and the higher-quality Nano Banana Pro) is Google's fast, sharp image generator — great for social graphics, mockups, storyboard frames, and infographics, and unusually good at rendering readable text inside an image. Veo is Google's cinematic video generator, producing short clips with synchronized audio, plugged directly into YouTube Shorts. With ChatGPT's Sora gone, Gemini is effectively the mainstream AI video option now. The two are designed to work together: design the perfect opening frame as an image, then hand it to the video model to animate. That image-first, then-animate workflow is the single most useful trick in AI content creation right now." },
      { p: true, text: "Because Gemini is grounded in Google Search, it's also the most reliable of the three for up-to-the-minute information — competitor research, current trends, local market context. Paired with its native reach into Google's tools, it's a natural fit for the local-marketing and analytics work small businesses actually care about. Best for: teams already on Google Workspace, and anyone whose work is heavy on visuals, video, or current-information research." },
      { h2: true, text: "So Which One Should You Actually Buy?" },
      { p: true, text: "Here's the honest answer most comparison articles won't give you: most small businesses shouldn't pay for all three. Too many tools create confusion, unused subscriptions, and staff who never fully learn any of them." },
      { p: true, text: "A practical way to decide: start with your biggest recurring task — writing customer emails and content all day means try Claude; living in Gmail and Sheets means try Gemini; wanting one general-purpose helper for a mixed team means try ChatGPT. Then test on real work for two weeks, on the free tiers, which are genuinely useful in 2026 — run your most annoying weekly task through each and see which one feels right. Pay for the winner. Then, if a second tool has a clearly different job (say, Claude for writing and Gemini for visuals), add it — a common two-tool setup is one paid subscription plus one free tier covering the gaps. Finally, set a few ground rules: use business plans (not personal accounts) for company work, decide what kind of information can go into each tool, and always have a human review anything customer-facing, financial, or legal before it goes out." },
      { img: true, src: "/assets/blog-5-decision.jpg", text: "Infographic: how to pick an AI tool in four steps — start with your biggest recurring task, test the free tiers on real work for two weeks, pay for the winner, and set ground rules for the team." },
      { p: true, text: "One last thing that's easy to forget: the best AI tool for your business is the one your team will actually use. A technically superior tool that sits unused because nobody learned it delivers less value than a “good enough” one that's genuinely woven into daily work. Adoption is the strategy — not an afterthought." },
      { p: true, text: "Not sure which of these fits your business — or how to actually build AI into your day-to-day without the overwhelm? That's what we do at Arperture. Reach out through the contact page and we'll help you pick the right tool and set it up around your real workflow." },
    ],
  },
  {
    id: "blog-4", slug: "why-small-ai-projects-are-beating-the-giants",
    date: "Jul 2026", datePublished: "2026-07-09", readTime: "7 min read", category: "Small Business AI",
    title: "The 159.8% ROI Number: Why Small AI Projects Are Beating the Giants in 2026",
    excerpt: "The data says small, human-governed AI projects out-earn six-figure rollouts. Here's where the returns actually come from.",
    metaDescription: "Why small-budget AI projects deliver 2.1× higher ROI than six-figure rollouts — the data on training budgets, human-in-the-loop systems, and workflow automation for small businesses.",
    coverSrc: "/assets/blog-4.jpg",
    faqs: [
      { q: "Do small businesses get better ROI from AI than large enterprises?", a: "The data says yes. A study of 200 B2B AI deployments found that projects with budgets under €15K delivered 2.1× higher ROI than deployments over €100K — a +428% median return against +198% — with a median breakeven of eight months. Small budgets force the discipline of picking one use case that pays off and shipping it." },
      { q: "How much of an AI budget should go to training?", a: "At least 25%. Teams that put a quarter or more of their AI budget into training saw a 2.4× ROI multiplier. Skip the training and adoption stalls around 31% of employees; invest in it and autonomous use climbs to 87%." },
      { q: "What is human-in-the-loop AI and why does it matter for small businesses?", a: "Human-in-the-loop means a person reviews and approves AI output before it ships. These setups cut critical incidents by 4.3× compared to fully autonomous systems and still delivered better returns — +372% ROI against +268%. The human sign-off is the quality check that stops one bad output from becoming a reputation and capital problem." },
    ],
    body: [
      { p: true, text: "You can still run a company without AI in 2026. It's just more expensive than it needs to be, and the cost shows up in three places: time, capital, and attention. That gap has stopped being a talking point you can wave away and turned into something you can put a number on." },
      { p: true, text: "At Arperture, we treat AI as infrastructure, not a stand-in for human judgment. It handles the machine work so people can spend their hours on the parts that actually need a person. What follows isn't hype. It's what the data says about where the returns are really coming from." },
      { h2: true, text: "Smaller Budgets Are Winning" },
      { p: true, text: "Denis Atlan studied 200 B2B deployments and found something most vendors would rather you didn't know: spending more does not buy you a better return. Projects with budgets under €15K delivered 2.1× higher ROI than deployments over €100K." },
      { p: true, text: "The reason is discipline. Big projects tend to sprawl. Scope creeps, more stakeholders weigh in, and the internal politics get heavier than the problem being solved. A small budget forces one decision: pick the single use case that pays off and ship it. The median breakeven on those small projects was eight months." },
      { p: true, text: "The headline from the study: small-budget projects under €15K hit +428% median ROI, against +198% for the ones over €100K." },
      { img: true, src: "/assets/blog-4-budget-roi.jpg", text: "Infographic: AI projects under €15K delivered +428% median ROI versus +198% for projects over €100K — 2.1× higher ROI on small budgets, with an 8-month median breakeven." },
      { h2: true, text: "Put 25% Of The Budget Into Training" },
      { p: true, text: "There's a useful frame for this from strategy research — the Resource-Based View (Barney, 1991). The software itself is just a resource, something anyone with a credit card can buy. The advantage comes from turning that resource into a capability, and that only happens through people who know how to use it." },
      { p: true, text: "The numbers back it up. Teams that put at least 25% of their AI budget into training saw a 2.4× ROI multiplier. The National Science Foundation frames “AI-Ready” as a continuum — literacy, then proficiency, then fluency — and it starts with two plain questions: why AI, and when AI. Skip the training and adoption stalls around 31%. Invest in it and autonomous use among employees climbs to 87%." },
      { img: true, src: "/assets/blog-4-training.jpg", text: "Infographic: a 2.4× ROI multiplier when at least 25% of the AI budget goes to team training, and employee adoption rising from 31% without training to 87% autonomous use with it." },
      { h2: true, text: "Human-In-The-Loop Is Where The Profit Is" },
      { p: true, text: "A lot of people assume full autonomy is the goal. The most profitable deployments say otherwise. Human-in-the-loop setups cut critical incidents by 4.3× and still came out ahead on return — +372% against +268% for fully autonomous systems." },
      { p: true, text: "The downside of going fully hands-off is real, not hypothetical. Atlan's research points to a fintech startup whose autonomous chatbot hallucinated financial advice. That mistake cost them a customer worth €10,000, plus an €8,000 legal settlement on top of it. Keeping a person in the loop is the quality check that stops one bad output from becoming a reputation and capital problem." },
      { p: true, text: "One rule worth taping to the monitor: if you wouldn't post it publicly, don't type it into a public GenAI tool." },
      { h2: true, text: "Your AI Choice Is Mostly A Spreadsheet Question" },
      { p: true, text: "When teams weigh Google Gemini against Microsoft Copilot, the deciding factor usually isn't the model. It's the ecosystem you already live in. For a 10-person team, adding Copilot Business runs about $2,160 more per year than Google Workspace, which folded Gemini into its plans back in January 2025." },
      { p: true, text: "Then there's the switching cost. File permissions, retraining people, support tickets. That bill usually dwarfs whatever edge one assistant has over the other. For most owners, the smart move is to get more out of the suite you're already paying for, not to run a messy migration for a single feature." },
      { h2: true, text: "AI Is Trading Your “Laundry” For “Poetry”" },
      { p: true, text: "Research out of MIT Sloan used accounting as a stand-in for knowledge work and found a clear shift in how time gets spent. AI is moving roughly 8.5% of work hours off the laundry — the data entry and clerical grind — and onto the poetry: the client conversations and strategic calls that are worth an expert's attention." },
      { p: true, text: "That shift rewards experience. Seasoned professionals read the AI's confidence scores, notice when it's unsure, and step in before a shaky answer ships. Beginners tend to take the suggestion at face value, and the output shows it." },
      { h2: true, text: "Treat Automation As A Nervous System, Not A Brain" },
      { p: true, text: "The operators getting the most out of this stop thinking of AI as a single tool and start treating it as connective tissue. A common 2026 setup: Google Sheets as the command center, an LLM as the brain, and something like Zapier as the nervous system moving information between them." },
      { p: true, text: "That's what lets you automate the connective work, like PDF and invoice processing. Drop a document in a folder, let the system pull the data out and file it, and the hours add up fast — north of 150 a year for a lot of small businesses. That's the line between doing data entry and running the operation." },
      { p: true, text: "Here's what that looks like in practice. Yield Bookkeeping had the problem every small firm runs into: nobody had time to post consistently, so the brand stayed invisible. I built a system on Claude that runs the whole content operation. It takes raw media, writes the captions, and queues everything as drafts in Buffer, our scheduler. It turns articles into blog posts written in Yield's own voice, publishes them, then reformats the same piece into a newsletter for the mailing list. A connected image tool generates the blog art and the newsletter infographics along the way. Everything lands as a draft first. Once a week I review the batch, approve it, and it ships. Start to finish, about 30 minutes. The machine handles the assembly. A person still signs off on every piece." },
      { h2: true, text: "The Workflow Matters More Than The Hype" },
      { p: true, text: "The direction of travel is clear enough, with State and Territory Coordination Hubs and national “AI-Ready” standards taking shape, and 60 to 70% of repetitive tasks already automatable. But the 159.8% median ROI isn't coming from giant enterprise rollouts. It's coming from small, human-governed systems built by teams that trained for the work and integrated it on purpose." },
      { p: true, text: "So here's the question worth sitting with: if you got 100 hours of laundry back this year, what would you actually do with them?" },
    ],
  },
  {
    id: "blog-1", slug: "directing-when-the-camera-is-a-prompt",
    date: "Jun 2026", datePublished: "2026-06-15", readTime: "7 min read", category: "Craft & Process",
    title: "What ‘Directing’ Means When the Camera Is a Prompt",
    excerpt: "Why prompt grammar is the new coverage, and how to think in shots instead of images.",
    metaDescription: "How AI film directors translate shot lists into prompts, why prompt grammar is the new coverage, and where human judgment still decides the final cut in generative video production.",
    coverSrc: "/assets/blog-1.jpg",
    faqs: [
      { q: "Do you still need a director for AI-generated video?", a: "Yes. The director's job — deciding what a scene needs to say and how to say it visually — hasn't changed. Only the tool that executes the shot has changed, from a physical camera to a written prompt." },
      { q: "What is ‘prompt grammar’ in AI filmmaking?", a: "Prompt grammar is the structured way a director describes a shot to a generative model: subject, action, camera movement, lens language, lighting, and pacing, in an order and vocabulary the model reads consistently." },
      { q: "Can AI video tools replace a shot list?", a: "No. A shot list still comes first. Prompts are how that shot list gets executed once the creative decisions are already made." },
    ],
    body: [
      { p: true, text: "Ask ten people what a film director does and you'll get ten answers about cameras, actors, and “action!” None of those things exist on an AI production. There's no crew, no blocking rehearsal, no cinematographer adjusting a lens. And yet, if you've watched an AI-generated short and felt something — tension building, a joke landing, a character's loneliness in a wide shot — someone directed that. It just didn't look like directing used to look." },
      { h2: true, text: "The Director's Job Hasn't Changed. The Toolkit Has." },
      { p: true, text: "Directing has always been the act of translating a feeling into a sequence of images. Coverage, blocking, lens choice, cutting rhythm — these are all just vocabulary for one question: what does the audience need to see, and when, to feel the thing you want them to feel? Generative video hasn't touched that question. It's changed the answer's delivery mechanism from a camera department to a well-structured sentence." },
      { p: true, text: "That reframing matters because a lot of people assume AI filmmaking is about typing a vague idea and hoping for magic. It isn't. Every shot in a competent AI-directed project still starts as a directing decision — wide or close, static or moving, warm or cold — before it ever becomes a prompt. The prompt is the execution layer, not the creative one." },
      { h2: true, text: "Prompt Grammar Is The New Coverage" },
      { p: true, text: "In traditional production, “coverage” means shooting a scene from enough angles that an editor has real choices later. In AI production, coverage means writing prompts with a consistent internal grammar so the model produces shots that actually cut together. That grammar tends to follow a reliable order: subject and wardrobe, action, camera behavior (push in, static wide, handheld drift), lens character (35mm, anamorphic flare, shallow depth of field), lighting quality, and finally mood or reference tone." },
      { p: true, text: "Directors who skip steps in that grammar — who describe mood but never camera behavior, for instance — tend to get beautiful but directionless footage: gorgeous frames that don't know what job they're doing in the sequence. Directors who front-load the camera language get shots that behave like shots, not like static paintings." },
      { h2: true, text: "Shot-First Thinking, Not Frame-First" },
      { p: true, text: "The biggest mental shift for anyone moving from traditional production into generative video is learning to think in shots again, not in single frames. It's tempting to fall in love with one perfect generated image and build a prompt around reproducing it. But a single gorgeous frame isn't a film. A director's real leverage is in sequencing: the wide that establishes space, the medium that holds a decision, the close-up that lands the emotional beat. That structure has to be decided before a single prompt is written, exactly as it would on a traditional set." },
      { p: true, text: "On every Arperture project, the prompt library comes after the shot list, never before. We block the sequence on paper — what each shot needs to accomplish narratively — and only then translate each entry into the camera and lighting language the model responds to." },
      { h2: true, text: "Where Human Judgment Still Wins" },
      { p: true, text: "Generative tools are extraordinary at execution and still unreliable at judgment. They don't know that a scene is dragging, that a joke needs one more beat of silence, or that an audience won't buy a character's motivation without an extra establishing shot. That's still entirely a director's call, made in the edit as much as in the prompt. The craft that's disappeared is manual operation — the craft that hasn't disappeared, and arguably matters more now, is narrative judgment: knowing what to ask for, and knowing when what you got isn't right yet." },
      { p: true, text: "That's the honest version of what “directing” means on an AI production: fewer people on set, no set at all in most cases, but the same relentless, specific decision-making about what the audience sees and feels, shot by shot. The camera changed. The job didn't." },
    ],
  },
  {
    id: "blog-2", slug: "keeping-a-character-consistent",
    date: "May 2026", datePublished: "2026-05-15", readTime: "8 min read", category: "Technique",
    title: "Keeping a Character Consistent Across Every Shot",
    excerpt: "Notes from producing Pick Up Gerald on reference frames and locked seeds.",
    metaDescription: "A practical breakdown of AI character consistency techniques — reference frames, locked seeds, and style anchors — drawn from producing the AI short film Pick Up Gerald.",
    coverSrc: "/assets/blog-2.jpg",
    faqs: [
      { q: "Why do AI-generated characters change between shots?", a: "Most generative video models sample new visual details on every generation unless they're anchored. Without a locked reference, small variations in a prompt — or even random seed changes — can shift a character's face, wardrobe, or proportions from shot to shot." },
      { q: "What is a reference frame in AI video production?", a: "A reference frame is a single, approved image of a character — face, outfit, and proportions locked — that gets fed back into the model for every subsequent shot, so new generations are anchored to the same visual identity instead of drifting." },
      { q: "Does locking a seed guarantee character consistency?", a: "It helps, but it isn't sufficient alone. A locked seed keeps a model's random starting point stable, but reference frames and consistent style tokens in the prompt do most of the actual work of holding a character's identity together." },
    ],
    body: [
      { p: true, text: "The single hardest unsolved problem in AI filmmaking isn't image quality — today's models render skin, light, and motion convincingly. It's continuity. Ask a generative model for the same character in eight different shots and, left unmanaged, you'll get eight subtly different people: a nose that shifts, a jacket that changes color, eyes that drift half a shade. An audience won't consciously catalog every discrepancy, but they will feel that something is off, and that feeling breaks trust in the story faster than almost any other flaw." },
      { h2: true, text: "The Consistency Problem In AI Video" },
      { p: true, text: "Generative video models don't have a persistent memory of a character the way a costume department or a casting choice does. Every generation is, in a real sense, starting over — reconstructing a face and a body from a text description and whatever reference material you give it. That means consistency isn't something the model does for you by default. It's something a director has to engineer, shot by shot, the same way a traditional production engineers continuity through wardrobe notes and script supervisors." },
      { h2: true, text: "Reference Frames As The Anchor" },
      { p: true, text: "The most reliable tool in the kit is the reference frame: one carefully generated and approved image that becomes the character's visual ground truth. Once that frame exists — face, proportions, wardrobe, palette all locked — it gets fed back into the model alongside every new prompt, so each subsequent shot is generated in reference to that identity instead of guessing at one from scratch. Treat the reference frame the way a traditional production treats a lookbook: nothing ships until it matches." },
      { p: true, text: "This is also where a lot of productions go wrong by rushing. Spending extra time perfecting the reference frame before generating a single sequence shot always pays for itself later — it's far cheaper to fix a face once than to fix it across twenty shots." },
      { h2: true, text: "Locking Seeds and Style Tokens" },
      { p: true, text: "Beyond reference frames, locking the model's seed value — the random starting point for generation — reduces unwanted variation between takes of the same shot. It's not a silver bullet on its own; a locked seed with a sloppy prompt still drifts. But paired with a consistent set of style tokens — the same lighting descriptors, the same lens language, the same color-grade vocabulary — in every prompt for a given character or scene, it meaningfully tightens the visual thread running through a sequence." },
      { h2: true, text: "What We Learned Producing Pick Up Gerald" },
      { p: true, text: "Pick Up Gerald, our fully AI-directed short film built on Google Veo, was as much an exercise in continuity discipline as it was in storytelling. With a single recurring lead character carrying the film across multiple locations and emotional beats, any drift in his face or wardrobe would have been immediately visible. The production leaned hard on locked reference frames for every costume and lighting state the character appears in, then cross-checked each new generated shot against that library before it was allowed into the edit." },
      { p: true, text: "The lesson that traveled forward into every project since: consistency isn't a generation-time problem you solve once. It's a pipeline discipline you maintain on every single shot, with a reference library that grows more authoritative as the production goes on. Treat your character's first approved frame as canon, and everything after it as a shot that has to earn its place next to that canon — not the other way around." },
    ],
  },
  {
    id: "blog-3", slug: "sound-sells-the-shot",
    date: "Apr 2026", datePublished: "2026-04-15", readTime: "6 min read", category: "Craft & Process",
    title: "Sound Sells the Shot",
    excerpt: "Why score and mix matter more than resolution when the picture is generated.",
    metaDescription: "Why voice, score, and mix matter more than picture resolution in AI-generated video, and a practical sound checklist for producing believable generative film and brand content.",
    coverSrc: "/assets/blog-3.jpg",
    faqs: [
      { q: "Is sound design more important than visuals in AI video?", a: "Not more important, but far more underrated. Once picture quality clears a believability bar, additional visual polish has diminishing returns, while sound — voice, score, and mix — keeps adding emotional impact well past that point." },
      { q: "What tools are used for AI-generated voice and music?", a: "On Arperture productions, Eleven Labs typically handles voice performance and Suno handles original score and music beds, layered with traditional sound design and mixing techniques." },
      { q: "Why does a generated video feel fake even when the picture looks real?", a: "Usually because the audio doesn't match the space, action, or emotional register of the picture — a mismatched or absent sound layer is one of the fastest ways an otherwise convincing shot reads as artificial." },
    ],
    body: [
      { p: true, text: "Show a generative video clip to a room of people and ask what feels off, and most will point at the picture — a hand that moves strangely, a texture that looks too smooth. They're usually wrong about the real problem. In our experience producing AI video for brands, series, and short films, the picture clears the believability bar faster than people expect. What actually sells or breaks a shot, almost every time, is the sound." },
      { h2: true, text: "Why Picture Quality Isn't The Bottleneck Anymore" },
      { p: true, text: "Generative video models have crossed a threshold where a well-directed, well-lit shot can hold up against real footage on a first watch. Once a picture clears that bar, spending more effort chasing marginal visual fidelity has diminishing returns. The bigger lever left on the table, for most productions, is what's happening on the audio track — and it's the layer most new AI productions under-invest in." },
      { h2: true, text: "The Sound Stack: Voice, Score, and SFX" },
      { p: true, text: "A believable AI production needs the same three sound layers a traditional production needs: voice performance, score, and sound effects, each doing a distinct job. Voice carries character and intention — on our productions this typically runs through Eleven Labs, tuned for pacing and emotional register rather than just clarity. Score sets emotional temperature scene to scene; we build most original scores in Suno, treating them as a directing tool rather than a background layer. Sound effects — footsteps, room tone, the small mechanical noises a space makes — are what convince an audience a generated environment is a real place with weight and texture, not a rendered backdrop." },
      { p: true, text: "Skip any one of these three and the gap is obvious, even to a viewer who couldn't articulate why. A gorgeous generated room with no room tone feels like a stage set. A character with a strong voice performance but no score under their big moment feels emotionally flat." },
      { h2: true, text: "Mixing for Emotion, Not Just Clarity" },
      { p: true, text: "A common mistake is mixing an AI production the way you'd mix a corporate explainer — optimizing purely for intelligibility, voice up front, everything else turned down to stay out of the way. That approach protects clarity and kills feeling. Score and ambient sound need room to breathe under dialogue, and silence needs to be used deliberately, the same way a director uses a held wide shot. The mix is a directing decision, not a technical afterthought handled at the end." },
      { h2: true, text: "A Practical Sound Checklist for AI Video" },
      { p: true, text: "Before any AI-generated sequence goes out the door, we run it against a short list: does every space have appropriate room tone, even if it's subtle? Does the score change with the emotional beat, not just play underneath the whole scene at one volume? Does the voice performance's pacing match the edit's pacing, rather than being generated in isolation and dropped in? And critically — does the mix let quiet moments stay quiet, instead of filling every second with sound out of habit?" },
      { p: true, text: "Picture gets a project's attention. Sound is what makes people believe it, and remember it. On every production, we treat the sound pass as a second directing pass — not a finishing touch." },
    ],
  },
];

// ---------- SERVICES (Video) ----------
export const CORE_OFFERINGS = [
  { title: "AI Video Services: Film Direction", body: "Concept-to-completion AI video production using industry-leading generative video models. Cinematic storytelling reimagined for the AI era." },
  { title: "AI Video Services: Creative Direction", body: "Visual strategy, brand narrative, and art direction for AI-generated campaigns, short films, and immersive content experiences." },
  { title: "Sound & Score", body: "Original score, sound design, voice, and mix — the half of cinema that sells the picture, treated as a directing pass rather than a finishing touch." },
];

export const VERTICALS = [
  { title: "Ads for Brands / E-Commerce", body: "15–60 second scroll-stopping ads for Meta, TikTok, Reels, and YouTube Shorts, with multiple hook variations and A/B-ready cuts.", href: "" },
  { title: "AI UGC Video Creator", body: "AI avatar-driven 'authentic-looking' testimonial and demo videos that mimic organic UGC — usable as paid social ads without real human creators.", href: "" },
  { title: "AI Video Localization & Multilingual Ad Scaling", body: "Translate, dub, and adapt existing English-language video assets for international distribution at scale.", href: "" },
  { title: "Faceless YouTube Channel Incubation", body: "Launch and grow a fully AI-produced faceless YouTube channel — concept, scripting, voiceover, editing, and upload strategy.", href: "" },
  { title: "Image & Video Enhancement, Restoration & Colorization", body: "Studio-grade upscaling, damage repair, and black-and-white colorization for photos and video — priced by tier, quoted before we start.", href: "/enhancement" },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Discovery", items: ["Client brief", "1:1 consultation", "Contract & roadmap"] },
  { num: "02", title: "Pre-Production", items: ["AI scriptwriting", "Character design", "Shotlist & storyboard"] },
  { num: "03", title: "Asset Generation", items: ["Background gen", "Video generation", "Upscaling"] },
  { num: "04", title: "Post-Production", items: ["Rough edit & review", "AI voiceover", "Post-mix & score"] },
  { num: "05", title: "Delivery", items: ["Color grading", "Export & ship"] },
];

// ---------- SMALL BUSINESS ----------
export const CONSULTING_SERVICES = [
  {
    tag: "AI Analysis", title: "AI Business Analysis", price: "Starting at $497 · One-time engagement",
    body: "We spend a week inside your operations and come back with a clear roadmap — which AI tools to adopt, which to skip, and exactly how to implement them. No jargon, no upsell, just the playbook.",
    items: ["Ops review", "Tool mapping", "ROI roadmap"],
  },
  {
    tag: "AI Consulting", title: "AI Implementation Consulting", price: "Monthly retainer · Custom scope",
    body: "Beyond the audit — ongoing strategic support as you roll out AI workflows. We set up automations, train your team, and stay on call while the tools take hold. Think of us as your fractional AI officer.",
    items: ["Workflow builds", "Team training", "Automation"],
  },
];

export const VISIBILITY_SERVICES = [
  {
    tag: "Web Visibility", title: "Web Visibility Audit", price: "$750 flat · 5 business days",
    body: "Search engines, ChatGPT, Perplexity, Gemini, and Google AI Overviews all decide whether customers find you. The Foundation Audit scores your business across SEO, GEO, and AEO — the factors that decide whether you rank and whether AI cites you — and hands you a prioritized fix roadmap.",
    items: ["10-query AI visibility battery", "SEO, GEO & AEO analysis", "100-point scored report"],
  },
];

// AI Fluency absorbs the former Training & Consulting offering (1:1 sessions,
// team workshops, custom curriculum) as one education service for small businesses.
export const FLUENCY_SERVICES = [
  {
    tag: "AI Fluency", title: "AI Fluency for Small Businesses", price: "Custom scope · Half-day workshops to multi-session programs",
    body: "Your team doesn't need to become engineers — they need to be fluent. Hands-on training that takes your people from AI-curious to AI-confident, built around the tools you already use and the work you actually do. From a half-day workshop to a full curriculum with 1:1 leadership sessions.",
    items: ["Team workshops (half- or full-day)", "1:1 leadership sessions", "Custom curriculum on your tools & workflows"],
  },
];

// The three service pillars, as featured on the home page.
export const SMB_PILLARS = [
  {
    tag: "Consulting", title: "AI Consulting", price: "Starting at $497", href: "/small-business#consulting",
    body: "A week inside your operations, then a clear roadmap — which AI tools to adopt, which to skip, and exactly how to implement them. Ongoing support available as your fractional AI officer.",
  },
  {
    tag: "AI Fluency", title: "AI Fluency Training", price: "Custom scope", href: "/small-business#fluency",
    body: "Hands-on workshops and 1:1 sessions that make your team confident with AI — built on your tools and your actual work, not generic demos.",
  },
  {
    tag: "Web Visibility", title: "Web Visibility Audit", price: "$750 flat · 5 business days", href: "/small-business#visibility",
    body: "Find out whether Google, ChatGPT, and AI Overviews recommend you. A 100-point scored report across SEO, GEO & AEO, with a prioritized fix roadmap.",
  },
];

// ---------- ENHANCEMENT ----------
export const IMAGE_TIERS = [
  { name: "Refresh", tag: "Photos that are basically intact — just soft, faded, or too small", price: "$15", unit: "/ image", highlight: false, borderColor: "var(--border)", features: ["Upscale to print resolution", "Sharpen", "Color correction", "Brightness & contrast recovery"] },
  { name: "Restore", tag: "Visible damage getting in the way of the image", price: "$45", unit: "/ image", highlight: true, borderColor: "var(--cyan-400)", features: ["Everything in Refresh", "Scratch / tear / water-spot repair", "Denoise", "Face recovery"] },
  { name: "Remaster", tag: "Heavily damaged, or black-and-white you want in full color", price: "$95", unit: "/ image", highlight: false, borderColor: "var(--border)", features: ["Everything in Restore", "Reconstruction of missing areas", "Max-detail upscale", "Full B&W → color colorization"] },
];

export const VIDEO_TIERS = [
  { name: "Refresh", tag: "Decent footage that needs a lift", price: "$60", unit: "package", sub: "Up to 2 min", highlight: false, borderColor: "var(--border)", features: ["1080p enhance + upscale", "Sharpen", "Color correction"], extra: "$15 / additional min" },
  { name: "Restore", tag: "Low-res or noisy footage worth saving", price: "$175", unit: "package", sub: "Up to 5 min", highlight: true, borderColor: "var(--cyan-400)", features: ["4K upscale", "Denoise", "Stabilization"], extra: "$25 / additional min" },
  { name: "Remaster", tag: "Archival, degraded, or black-and-white footage", price: "$425", unit: "package", sub: "Up to 10 min", highlight: false, borderColor: "var(--border)", features: ["4K restoration", "Colorization", "Motion smoothing (frame interpolation)"], extra: "$40 / additional min" },
];

export const ENHANCE_ADDONS = [
  { label: "Black-and-white colorization (photo)", price: "+$30 / image" },
  { label: "Black-and-white colorization (video)", price: "+$20 / min" },
  { label: "Slow-motion / frame interpolation", price: "+$15 / min" },
  { label: "Heavy-restoration surcharge (severely degraded source)", price: "+50–100% (quoted up front)" },
  { label: "Rush delivery (24–48 hr)", price: "+35%" },
];

export const ENHANCE_STEPS = [
  { num: "01", title: "Send it over.", body: "Upload your photo or video, or just tell us what you've got. Higher-resolution source means better results, but we work with what you have." },
  { num: "02", title: "Get a quote, fast.", body: "We look at the actual condition and confirm the tier and price before any work begins. No surprises." },
  { num: "03", title: "Get it back.", body: "Delivered in your format of choice, ready to print, post, or play — with a revision pass included." },
];

export const ENHANCE_WHY = [
  { title: "Studio-grade tools, human eyes.", body: "We run professional-tier enhancement and upscaling models — then actually review the output instead of shipping whatever the AI guessed." },
  { title: "Quoted before we start.", body: "You'll never get a mystery invoice. Condition-based quotes, up front." },
  { title: "Fast turnaround.", body: "Days, not weeks. Rush available when you need it yesterday." },
  { title: "Your files stay yours.", body: "We don't resell, repost, or train on your memories. Delivered and deleted on request." },
];

export const ENHANCE_FAQS = [
  { q: "Can you really colorize black-and-white photos and video?", a: "Yes — and it's one of the things we do best. We research period-accurate tones so the result looks natural and historically plausible, not like a filter slapped on top." },
  { q: "How much resolution can you add?", a: "We can upscale images up to 6× and video up to 4K (8K on request), rebuilding real detail rather than just stretching pixels." },
  { q: "What if my source file is really bad?", a: "Send it anyway. We'll tell you honestly whether it's worth doing and what tier it needs. Some things AI can't invent — but we'll be straight with you before you spend anything." },
  { q: "Do you offer bulk or ongoing rates?", a: "Yes. Whole-archive projects, event batches, and recurring content work all get custom pricing — just ask." },
  { q: "How fast can I get it back?", a: "Standard turnaround is a few business days depending on volume. Need it in 24–48 hours? Add rush delivery." },
];

// ---------- FAQ (dedicated /faq page) ----------
// Answers drive both the visible page and the FAQPage JSON-LD, so they must
// stay identical. The video-cost answer deliberately avoids specific dollar
// figures until the rate card is finalized (see the "cost" item).
export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What does Arperture do for small businesses?",
    a: "Three things. AI consulting — the AI Business Analysis (from $497) maps which AI tools fit your operations and how to implement them, with ongoing AI Implementation Consulting available as a monthly retainer. AI Fluency training — hands-on workshops and 1:1 sessions that make your team confident with AI, built on your actual tools and work. And the Web Visibility Audit ($750 flat, 5 business days) — a 100-point scored report across SEO, GEO & AEO showing whether Google, ChatGPT, and AI Overviews recommend your business, with a prioritized fix roadmap.",
  },
  {
    q: "What is AI Fluency training?",
    a: "Practical, hands-on education that takes your team from AI-curious to AI-confident. We build the sessions around the tools you already use and the work you actually do — no generic demos. Formats range from a half-day workshop to a multi-session curriculum with 1:1 leadership sessions, scoped to your team and budget.",
  },
  {
    q: "How much does an AI-produced video cost?",
    a: "Every project is scoped to the story, not a stock package. Cost depends on length, number of scenes, and how much custom character or voice work is involved — from a single branded short to a multi-cut brand film, music video, or ongoing monthly content. You'll get a fully itemized quote before anything's booked — no surprise line items, no “AI credits” you didn't agree to.",
  },
  {
    q: "How long does a project take?",
    a: "A single short-form spot typically takes 1–2 weeks from brief to final export. A full brand campaign or multi-scene project runs 3–6 weeks, depending on revision rounds and how much original score or voiceover work is involved. Episodic or ongoing content (like a recurring social series) runs on a monthly cadence instead of a one-off timeline.",
  },
  {
    q: "What's the difference between hiring Arperture and using an AI video tool myself?",
    a: "Tools like Runway, Veo, or Synthesia generate clips. Arperture directs a film — meaning someone is making the hundred small decisions a generation tool can't: which shots cut together, whether the score matches the mood, whether a character stays visually consistent scene to scene, and whether the final export actually looks like one coherent piece instead of a reel of disconnected clips. If you just need a quick clip, a DIY tool might be enough. If you need something that has to hold up in front of your audience or your board, that's the gap Arperture fills.",
  },
  {
    q: "Do I own the final video and all the assets?",
    a: "Yes. Once a project is paid in full, you own the final deliverable outright. Raw generation files and intermediate assets can be included on request — just flag it when we scope the project.",
  },
  {
    q: "What AI tools do you actually use?",
    a: "Depends on the shot. Current stack includes Google Veo, Kling AI, Runway, Midjourney, Eleven Labs, and Suno for generation, finished in a traditional edit and color pipeline — not just raw AI output. The full 14-step pipeline (discovery → pre-production → asset generation → post-production → delivery) is outlined on the Services page.",
  },
  {
    q: "Can you match an existing brand style or a previous video we made?",
    a: "Yes — send reference footage, brand guidelines, or past videos during the discovery call and we'll build character/style consistency into the pre-production stage before any generation starts.",
  },
  {
    q: "How many revisions are included?",
    a: "Most quotes include one full revision round. Additional rounds can be added — this gets scoped up front in your quote, not billed as a surprise afterward.",
  },
];

// ---------- FOOTER ----------
export const FOOTER_LINKS_A: { label: string; href: string }[] = [
  { label: "Small Business Services", href: "/small-business" },
  { label: "AI Fluency", href: "/small-business#fluency" },
  { label: "Video Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const FOOTER_LINKS_B: { label: string; href: string }[] = [
  { label: "AI Consulting", href: "/small-business#consulting" },
  { label: "Web Visibility", href: "/small-business#visibility" },
  { label: "Enhancement & Restoration", href: "/enhancement" },
  { label: "Blog", href: "/blog" },
  { label: "Judge Silverback's Court", href: "/portfolio/judge" },
  { label: "Yield Bookkeeping Services", href: "/portfolio/yield" },
  { label: "Privacy Policy", href: "/privacy" },
];
