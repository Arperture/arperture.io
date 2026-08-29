import Link from "next/link";
import Image from "next/image";
import { Kicker } from "@/components/ui";
import CalendlyButton from "@/components/CalendlyButton";
import BrandQuickies from "@/components/BrandQuickies";
import { WORK_DATA, VIDEO_PILLARS, SMB_PILLARS, ytThumb, CALENDLY_30MIN, BRAND_QUICKIE_PRICE } from "@/lib/data";

const sectionBorder: React.CSSProperties = { padding: "64px 0", borderTop: "1px solid var(--border)" };
const cardGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 };

// The homepage work strip leads with business proof: a real local client
// campaign, a product spot, and a professional-services pitch.
const FEATURED_WORK_IDS = ["yield", "terra-c-serum", "law-office-pitch"];

export default function HomePage() {
  const workHome = WORK_DATA.filter((w) => FEATURED_WORK_IDS.includes(w.id));

  return (
    <div className="wrap">
      {/* HERO */}
      <header style={{ position: "relative", padding: "96px 0 64px", overflow: "hidden" }}>
        <Image
          src="/assets/arperture-mark.webp"
          alt=""
          width={720}
          height={720}
          aria-hidden
          className="hero-mark"
          style={{ position: "absolute", right: -140, top: "28%", width: 720, height: 720, opacity: 0.28, animation: "arpSpin 80s linear infinite", pointerEvents: "none" }}
        />
        <div style={{ position: "relative", maxWidth: 760 }}>
          <Kicker>Leesburg, VA · AI video production for small business</Kicker>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.4rem,6vw,4.6rem)", lineHeight: 0.98, letterSpacing: "-.03em", margin: "20px 0", textTransform: "uppercase" }}>
            Big-brand video,{" "}
            <span style={{ background: "linear-gradient(120deg,var(--cyan-400),var(--coral-400))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              small-business budget.
            </span>
          </h1>
          <p style={{ fontSize: "1.35rem", color: "var(--text-muted)", maxWidth: "54ch", lineHeight: 1.5 }}>
            Arperture is an AI video studio making brand films, ads, and social content for local businesses — scripted, directed, and scored like a full production crew, without the five-figure invoice.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <CalendlyButton url={CALENDLY_30MIN} className="btn btn-primary btn-lg">Book a free discovery call</CalendlyButton>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">Watch the work →</Link>
          </div>
        </div>
      </header>

      {/* 01 — SELECTED WORK */}
      <section style={sectionBorder}>
        <Kicker>01 — Selected work</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          Real Work for Real Businesses
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          Brand films, product spots, and ongoing campaigns — generated, directed, scored, and delivered as masters.
        </p>
        <div style={cardGrid}>
          {workHome.map((w) => (
            <Link
              key={w.id}
              href={w.hasCase ? `/portfolio/${w.slug}` : "/portfolio"}
              className="card card-lift"
              style={{ textAlign: "left", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none" }}
            >
              <div style={{ height: 160, backgroundColor: "var(--surface-2)", backgroundImage: `url(${ytThumb(w.youtubeId)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>{w.category}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.05em", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{w.date}</span>
                </div>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", color: "var(--text)", margin: 0 }}>{w.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{w.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/portfolio" className="btn btn-ghost btn-sm">View full portfolio →</Link>
        </div>
      </section>

      {/* 02 — WHAT WE MAKE */}
      <section style={sectionBorder}>
        <Kicker color="var(--purple-300)">02 — What we make</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          One Studio, Every Format
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          From a 30-second social ad to a flagship brand film — one team takes it from brief to final master, script to screen.
        </p>
        <div style={cardGrid}>
          {VIDEO_PILLARS.map((v) => (
            <Link
              key={v.title}
              href={v.href}
              className="card card-lift"
              style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10, textDecoration: "none" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>{v.tag}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", margin: "4px 0 0", color: "var(--text)" }}>{v.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, flex: 1 }}>{v.body}</p>
              <span className="link-cyan" style={{ fontWeight: 600, fontSize: "0.85rem" }}>Learn more →</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/services" className="btn btn-ghost btn-sm">All video services →</Link>
        </div>
      </section>

      {/* 03 — BRAND QUICKIES (FEATURED) */}
      <section id="brand-quickies" style={{ ...sectionBorder, scrollMarginTop: 90 }}>
        <div
          style={{
            border: "1px solid var(--cyan-400)",
            borderRadius: 20,
            padding: "clamp(24px,4vw,44px)",
            background: "var(--surface)",
            boxShadow: "var(--glow-cyan)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 999, background: "var(--cyan-400)", color: "var(--on-accent)", fontWeight: 700 }}>
              Featured service
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.06em", color: "var(--coral-300)", fontWeight: 700 }}>
              {BRAND_QUICKIE_PRICE}
            </span>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4vw,2.6rem)", letterSpacing: "-.02em", margin: "0 0 12px" }}>
            Brand Quickies
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "62ch", fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 8px" }}>
            Short, cinematic brand moments — a logo reveal, a seasonal spot, a scroll-stopping product beat. Built on proven concepts and customized to you: drop in your logo, your product, or your team, and it&apos;s yours.
          </p>
          <p style={{ color: "var(--text-muted)", maxWidth: "62ch", fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 28px" }}>
            The fastest, cheapest way to put real production value in front of your customers. Here&apos;s a set we made for Yield Bookkeeping, alongside a couple of our own:
          </p>

          <BrandQuickies />

          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-cyan btn-sm">Get a Brand Quickie</Link>
            <Link href="/portfolio/yield" className="btn btn-ghost btn-sm">See the full Yield campaign →</Link>
          </div>
        </div>
      </section>

      {/* 04 — BEYOND THE CAMERA */}
      <section style={sectionBorder}>
        <Kicker color="var(--coral-300)">04 — Beyond the camera</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          More Ways to Put AI to Work
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          The same team that makes your videos can tune the rest of your operation — a real AI roadmap, hands-on team training, and proof that Google and ChatGPT recommend you.
        </p>
        <div style={cardGrid}>
          {SMB_PILLARS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="card card-lift"
              style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10, textDecoration: "none" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--coral-300)" }}>{p.tag}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", margin: "4px 0 0", color: "var(--text)" }}>{p.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, flex: 1 }}>{p.body}</p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-faint)" }}>{p.price}</span>
              <span className="link-cyan" style={{ fontWeight: 600, fontSize: "0.85rem" }}>Learn more →</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/small-business" className="btn btn-ghost btn-sm">All small business services →</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <Kicker color="var(--coral-400)">Ready when you are</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.6rem", letterSpacing: "-.02em", margin: "16px 0 28px" }}>Let&apos;s Build Something Extraordinary.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          <Link href="/services" className="btn btn-ghost btn-lg">Explore video services</Link>
        </div>
      </section>
    </div>
  );
}
