import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";
import BrandQuickies from "@/components/BrandQuickies";
import FeatureVideo from "@/components/FeatureVideo";
import SpecAdShowcase from "@/components/SpecAdShowcase";
import HomeHero from "@/components/HomeHero";
import WorkGrid from "@/components/WorkGrid";
import { FEATURED_SERIES, CALENDLY_30MIN, BRAND_QUICKIE_PRICE, SPEC_ADS_CHANNEL_URL } from "@/lib/data";

// Selected work leads with cleared client work, then the strongest spec and
// original pieces.
const FEATURED = ["yield", "bmx", "terrac", "catoctin", "dulles", "gerald"];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div className="wrap">
        {/* TWO DOORS */}
        <section aria-label="Who we work with" style={{ padding: "clamp(48px,7vw,88px) 0 0" }}>
          <div className="door-grid">
            <Link href="/services/" className="door-panel">
              <h2>Local businesses</h2>
              <p>
                Restaurants, home services, real estate and Main Street shops. A spot with your name,
                your product and your town, priced for a small-business budget.
              </p>
              <span className="door-go">Video production services</span>
            </Link>
            <Link href="/brands/" className="door-panel">
              <h2>DTC &amp; SaaS brands</h2>
              <p>
                Always-on ad creative for Meta and TikTok, and product demo videos for SaaS teams.
                Flat monthly or per-video pricing.
              </p>
              <span className="door-go">Ad creative and demos</span>
            </Link>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="section" style={{ borderTop: 0 }}>
          <div className="section-head">
            <h2 className="h-section">Selected Work</h2>
            <p>
              Client campaigns, spec spots and originals. Hover to play, click for the full film.{" "}
              <Link href="/portfolio/" className="text-link">All work</Link>
            </p>
          </div>
          <WorkGrid keys={FEATURED} layout="uniform" />
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

        {/* BRAND QUICKIES */}
        <section id="brand-quickies" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <div>
              <h2 className="h-section">Brand Quickies</h2>
              <p style={{ color: "var(--accent)", fontWeight: 700, margin: "10px 0 0" }}>{BRAND_QUICKIE_PRICE}</p>
            </div>
            <p>
              Short cinematic brand moments: a logo reveal, a seasonal spot, a product beat. Proven
              concepts customized with your logo, product or team. Below is a set for Yield
              Bookkeeping, plus two of our own.
            </p>
          </div>
          <BrandQuickies />
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/contact/" className="btn btn-primary btn-sm">Get a Brand Quickie</Link>
            <Link href="/portfolio/yield/" className="btn btn-line btn-sm">See the full Yield campaign</Link>
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
