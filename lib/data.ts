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
  { key: "youtube", label: "YouTube", url: "https://www.youtube.com/@ArpertureAI" },
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
        "Arperture Media is a cinematic AI creative studio producing film-grade AI video, sound design, and branded stories for brands, artists & storytellers, plus AI consulting and Web Visibility (SEO/GEO/AEO) services for small businesses.",
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
  { label: "Video", href: "/services" },
  { label: "Consulting", href: "/small-business#consulting" },
  { label: "Search Visibility", href: "/small-business#visibility" },
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
export type BlogBlock = { h2?: boolean; p?: boolean; text: string };
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
export const SERVICES_HOME = [
  { tag: "Generate", title: "AI Film & Video", body: "Script-to-screen narrative video, directed shot by shot and graded for a single cinematic mood.", badgeBg: "rgba(46,204,250,.12)", badgeColor: "var(--cyan-300)" },
  { tag: "Compose", title: "Sound & Score", body: "Original score, sound design, and mix — the half of cinema that sells the picture.", badgeBg: "rgba(255,111,97,.12)", badgeColor: "var(--coral-300)" },
  { tag: "Direct", title: "Creative Direction", body: "Concept, prompt grammar, and look development so a project reads as one coherent film.", badgeBg: "rgba(142,68,173,.15)", badgeColor: "var(--purple-300)" },
];

export const CORE_OFFERINGS = [
  { title: "AI Video Services: Film Direction", body: "Concept-to-completion AI video production using industry-leading generative video models. Cinematic storytelling reimagined for the AI era." },
  { title: "AI Video Services: Creative Direction", body: "Visual strategy, brand narrative, and art direction for AI-generated campaigns, short films, and immersive content experiences." },
  { title: "Training & Consulting Services", body: "Hands-on workshops and consulting for creators, brands, and teams wanting to integrate AI into their creative workflow. Custom curriculum available." },
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

export const SMB_HOME = [...CONSULTING_SERVICES, ...VISIBILITY_SERVICES].map((s) => ({
  tag: s.tag, title: s.title, price: s.price,
}));

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

// ---------- TRAINING ----------
export const TRAINING_TRACKS = [
  { title: "1:1 Consulting", body: "A working session on your pipeline — tools, prompt grammar, and where AI video actually saves you time." },
  { title: "Team Workshops", body: "Half- or full-day hands-on workshops for creative teams adopting AI video into an existing production process." },
  { title: "Custom Curriculum", body: "A structured, multi-session curriculum built around your brand, tools, and deliverables." },
];

// ---------- FAQ (dedicated /faq page) ----------
// Answers drive both the visible page and the FAQPage JSON-LD, so they must
// stay identical. The video-cost answer deliberately avoids specific dollar
// figures until the rate card is finalized (see the "cost" item).
export const FAQ_ITEMS: { q: string; a: string }[] = [
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
  {
    q: "Do you work with businesses outside of video — like the AI consulting or Web Visibility audits?",
    a: "Yes. Alongside video production, Arperture runs a small-business AI consulting practice (AI Business Analysis from $497, ongoing AI Implementation Consulting) and the Web Visibility Audit ($750 flat, 5 business days) — scoring how well a business shows up across SEO, GEO, and AEO in Google, ChatGPT, and AI Overviews.",
  },
];

// ---------- FOOTER ----------
export const FOOTER_LINKS_A: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const FOOTER_LINKS_B: { label: string; href: string }[] = [
  { label: "Small Business Consulting", href: "/small-business#consulting" },
  { label: "Web Visibility", href: "/small-business#visibility" },
  { label: "Enhancement & Restoration", href: "/enhancement" },
  { label: "Judge Silverback's Court", href: "/portfolio/judge" },
  { label: "Yield Bookkeeping Services", href: "/portfolio/yield" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy" },
];
