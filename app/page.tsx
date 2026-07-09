import Link from "next/link";
import Image from "next/image";
import { Kicker } from "@/components/ui";
import CalendlyButton from "@/components/CalendlyButton";
import { WORK_DATA, SMB_PILLARS, ytThumb, CALENDLY_30MIN, CALENDLY_GEO } from "@/lib/data";

const sectionBorder: React.CSSProperties = { padding: "64px 0", borderTop: "1px solid var(--border)" };
const cardGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 };

export default function HomePage() {
  const workHome = WORK_DATA.slice(0, 3);

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
          <Kicker>Leesburg, VA · Serving local small businesses</Kicker>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.4rem,6vw,4.6rem)", lineHeight: 0.98, letterSpacing: "-.03em", margin: "20px 0", textTransform: "uppercase" }}>
            AI consulting, training &amp; visibility for{" "}
            <span style={{ background: "linear-gradient(120deg,var(--cyan-400),var(--coral-400))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              small business.
            </span>
          </h1>
          <p style={{ fontSize: "1.35rem", color: "var(--text-muted)", maxWidth: "54ch", lineHeight: 1.5 }}>
            Arperture helps local businesses put AI to work — hands-on consulting, team fluency training, and audits that show whether Google and ChatGPT recommend you.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <CalendlyButton url={CALENDLY_30MIN} className="btn btn-primary btn-lg">Book a free discovery call</CalendlyButton>
            <Link href="/small-business" className="btn btn-ghost btn-lg">Explore services →</Link>
          </div>
        </div>
      </header>

      {/* 01 — FOR SMALL BUSINESSES */}
      <section style={sectionBorder}>
        <Kicker>01 — For small businesses</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          AI That Actually Pays Off
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          No hype, no jargon — a roadmap for your operations, a team that knows how to use the tools, and proof that customers can find you.
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

      {/* 02 — VISIBILITY HOOK */}
      <section style={{ padding: "72px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <Kicker color="var(--purple-300)">02 — Web visibility</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          Does Google — or ChatGPT — Recommend Your Business?
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "58ch", margin: "0 auto 28px" }}>
          Most owners have never checked. The Foundation Audit scores your business across SEO, GEO &amp; AEO — a 100-point report and a prioritized fix roadmap, in 5 business days for a flat $750.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <CalendlyButton url={CALENDLY_GEO} className="btn btn-cyan btn-lg">Book a visibility audit</CalendlyButton>
          <Link href="/small-business#visibility" className="btn btn-ghost btn-lg">How the audit works →</Link>
        </div>
      </section>

      {/* 03 — THE STUDIO (VIDEO) */}
      <section style={sectionBorder}>
        <Kicker>03 — The studio</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          We Also Run a Film Studio.
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          Cinematic AI video — brand films, music videos, and original series — directed, scored, and delivered as masters. The same craft we bring to your business, pointed at a camera.
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
        <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
          <Link href="/portfolio" className="btn btn-ghost btn-sm">View full portfolio →</Link>
          <Link href="/services" className="btn btn-ghost btn-sm">Video services →</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <Kicker color="var(--coral-400)">Ready to put AI to work?</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.6rem", letterSpacing: "-.02em", margin: "16px 0 28px" }}>Let&apos;s Build Something Extraordinary.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          <Link href="/small-business" className="btn btn-ghost btn-lg">Explore services</Link>
        </div>
      </section>
    </div>
  );
}
