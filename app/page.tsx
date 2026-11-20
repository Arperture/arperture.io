import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";
import HeroPhone from "@/components/motion/HeroPhone";
import { FoundingSwap } from "@/components/motion/Founding";
import FeatureVideo from "@/components/FeatureVideo";
import SpecAdShowcase from "@/components/SpecAdShowcase";
import WorkGrid from "@/components/WorkGrid";
import {
  FEATURED_SERIES, CALENDLY_30MIN, SPEC_ADS_CHANNEL_URL,
  MOTION_BUMPER, MOTION_PACKAGES, MOTION_FROM, MOTION_FOUNDING, motionCalendlyUrl,
} from "@/lib/data";
import { MOTION_STYLES_READY, styleNumber, styleForWhom, styleTypeLabel, stylePoster } from "@/lib/motion-styles";

// The homepage leads with Feed in Motion. Films and ads (the generative work)
// follow it.
const usd = (n: number) => "$" + n.toLocaleString("en-US");

// Every motion price on one list, cheapest first.
const PRICES = [
  { name: MOTION_BUMPER.name, what: MOTION_BUMPER.short, price: MOTION_BUMPER.price, unit: MOTION_BUMPER.unit },
  ...MOTION_PACKAGES.map((p) => ({ name: p.name, what: p.features[0], price: p.price, unit: p.unit || "one-off" })),
];

// Six looks for six kinds of local business; the gallery on /motion has the rest.
const STYLE_PICKS = [9, 53, 51, 65, 33, 1]
  .map((n) => MOTION_STYLES_READY.find((s) => s.n === n))
  .filter((s): s is NonNullable<typeof s> => !!s);

// Films and ads lead with cleared client work, then the strongest spec and
// original pieces.
const FEATURED = ["yield", "bmx", "terrac", "catoctin", "dulles", "gerald"];

export default function HomePage() {
  return (
    <>
      <div className="wrap">
        {/* HERO */}
        <section className="fim-hero" aria-labelledby="hero-title">
          <div className="fim-hero-copy">
            <p className="fim-label">
              <FoundingSwap
                open={<>Now booking · {MOTION_FOUNDING.total} founding spots · Leesburg, VA</>}
                closed={<>Now booking · Leesburg, VA</>}
              />
            </p>
            <h1 id="hero-title" className="display fim-h1">Motion video for Main Street.</h1>
            <p className="fim-lede">
              We turn the posts you already make into short motion pieces people stop scrolling for.
              Made in Leesburg, Virginia, for small businesses.
            </p>
            <div className="fim-actions">
              <Link href="/motion/#packages" className="btn btn-primary btn-lg">See the packages</Link>
              <CalendlyButton url={motionCalendlyUrl("home-hero")} className="btn btn-line btn-lg">Book a discovery call</CalendlyButton>
            </div>
            <ul className="fim-meta">
              <li>From {usd(MOTION_FROM)}</li>
              <li>5 business days</li>
              <li>{MOTION_STYLES_READY.length} styles</li>
            </ul>
          </div>
          <HeroPhone />
        </section>

        {/* MOTION PRICES */}
        <section id="feed-in-motion" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <h2 className="h-section">What It Costs</h2>
            <p>
              Flat prices, five business days, one round of changes included. Start with a{" "}
              {usd(MOTION_BUMPER.price)} logo bumper or go straight to a monthly plan.
            </p>
          </div>
          <ul className="fim-ladder">
            {PRICES.map((r) => (
              <li key={r.name}>
                <span className="fim-ladder-name">{r.name}</span>
                <span className="fim-ladder-what">{r.what}</span>
                <span className="fim-ladder-price">{usd(r.price)}<small> {r.unit}</small></span>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link href="/motion/#packages" className="btn btn-primary btn-sm">See what each one includes</Link>
            <FoundingSwap
              open={<Link href="/motion/#founding" className="btn btn-line btn-sm">Founding offer through {MOTION_FOUNDING.endsLabel}</Link>}
              closed={null}
            />
          </div>
        </section>

        {/* MOTION STYLES */}
        {STYLE_PICKS.length > 0 && (
          <section id="motion-styles" className="section" style={{ scrollMarginTop: 90 }}>
            <div className="section-head">
              <h2 className="h-section">Find Your Look</h2>
              <p>
                Every style is a 15-second sample made for a kind of business. Here are{" "}
                {STYLE_PICKS.length} of {MOTION_STYLES_READY.length}. Open one to watch it.
              </p>
            </div>
            <ul className="work-grid work-grid-uniform">
              {STYLE_PICKS.map((st) => (
                <li key={st.n} className="work-item">
                  <Link href={`/motion/#style-${styleNumber(st)}`} className="work-card">
                    <span className="work-media" style={{ aspectRatio: "16 / 9" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={stylePoster(st)} alt="" loading="lazy" decoding="async" width={640} height={360} />
                    </span>
                    <span className="work-text">
                      <span className="work-title">{st.name}</span>
                      <span className="work-label">For {styleForWhom(st)}</span>
                      <span className="work-year">{styleNumber(st)} · {styleTypeLabel(st.type)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Link href="/motion/#styles" className="btn btn-line btn-sm">Browse all {MOTION_STYLES_READY.length} styles</Link>
            </div>
          </section>
        )}

        {/* FILMS AND ADS */}
        <section id="films" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <h2 className="h-section">Films and Ads</h2>
            <p>
              Need more than a post? We also script, direct and finish brand films, commercials and
              ad creative. Hover to play, click for the full film.{" "}
              <Link href="/portfolio/" className="text-link">All work</Link>
            </p>
          </div>
          <WorkGrid keys={FEATURED} layout="uniform" />
          <div className="door-grid" style={{ marginTop: "clamp(40px,6vw,72px)" }}>
            <Link href="/services/" className="door-panel">
              <h3>Local businesses</h3>
              <p>
                Restaurants, home services, real estate and Main Street shops. A spot with your name,
                your product and your town, priced for a small-business budget.
              </p>
              <span className="door-go">Video production services</span>
            </Link>
            <Link href="/brands/" className="door-panel">
              <h3>DTC &amp; SaaS brands</h3>
              <p>
                Always-on ad creative for Meta and TikTok, and product demo videos for SaaS teams.
                Flat monthly or per-video pricing.
              </p>
              <span className="door-go">Ad creative and demos</span>
            </Link>
          </div>
        </section>

        {/* SPEC ADS */}
        <section id="spec-ads" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <h2 className="h-section">Pick Your Industry. See Your Ad.</h2>
            <p>
              Spec spots we wrote, directed and finished for the kind of local business you run.
              Choose an industry and watch the ad we would make for you.
            </p>
          </div>
          <SpecAdShowcase />
          <p style={{ color: "var(--text-faint)", fontSize: "0.88rem", lineHeight: 1.5, marginTop: 16, maxWidth: "70ch" }}>
            Spec ads feature fictional brands made for demonstration. Your version gets your name, your
            product and your town.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <Link href="/contact/" className="btn btn-primary btn-sm">Get a spot like this</Link>
            <a href={SPEC_ADS_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm">
              All spec ads on YouTube
            </a>
          </div>
        </section>

        {/* ORIGINAL SERIES */}
        <section id="original-series" className="section" style={{ scrollMarginTop: 90 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
            <FeatureVideo youtubeId={FEATURED_SERIES.youtubeId} title={FEATURED_SERIES.title} label="Watch the teaser" poster="/media/work/gremmie-teaser.jpg" />
            <div>
              <p style={{ color: "var(--text-muted)", fontWeight: 600, margin: 0 }}>
                Original series · {FEATURED_SERIES.premiere}
              </p>
              <h2 className="display" style={{ fontSize: "clamp(2.8rem,6vw,4.75rem)", margin: "12px 0 18px" }}>
                {FEATURED_SERIES.title}
              </h2>
              <p style={{ color: "var(--text)", fontSize: "1.2rem", lineHeight: 1.45, margin: "0 0 12px" }}>
                {FEATURED_SERIES.tagline}
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 28px" }}>
                {FEATURED_SERIES.body}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={FEATURED_SERIES.channelUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  Subscribe for episode 1
                </a>
                <Link href="/portfolio/" className="btn btn-line btn-sm">More original work</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ paddingBottom: "clamp(72px,10vw,128px)" }}>
          <h2 className="display" style={{ fontSize: "clamp(3rem,8vw,6rem)", maxWidth: "14ch" }}>
            Let&apos;s Make Something People Watch.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "48ch", margin: "20px 0 32px" }}>
            Book a 30-minute call. Tell us what you sell and who buys it, and we&apos;ll talk through
            ideas, timing and cost.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <CalendlyButton url={CALENDLY_30MIN} className="btn btn-primary btn-lg">Book a discovery call</CalendlyButton>
            <Link href="/contact/" className="btn btn-line btn-lg">Send a message</Link>
          </div>
        </section>
      </div>
    </>
  );
}
