import Link from "next/link";
import Image from "next/image";
import { Kicker } from "@/components/ui";
import CalendlyButton from "@/components/CalendlyButton";
import { WORK_DATA, SERVICES_HOME, SMB_HOME, ytThumb, CALENDLY_30MIN } from "@/lib/data";

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
        <div style={{ position: "relative", maxWidth: 720 }}>
          <Kicker>Now booking · Q3 · Leesburg, VA</Kicker>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.8rem,7vw,5.5rem)", lineHeight: 0.96, letterSpacing: "-.03em", margin: "20px 0", textTransform: "uppercase" }}>
            Cinematic AI,<br />shot through{" "}
            <span style={{ background: "linear-gradient(120deg,var(--cyan-400),var(--coral-400))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              the aperture.
            </span>
          </h1>
          <p style={{ fontSize: "1.35rem", color: "var(--text-muted)", maxWidth: "52ch", lineHeight: 1.5 }}>
            From script to screen — cinematic AI video, sound design, and branded stories for brands, artists &amp; storytellers.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <CalendlyButton url={CALENDLY_30MIN} className="btn btn-primary btn-lg">Book a discovery call</CalendlyButton>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">Watch the reel →</Link>
          </div>
        </div>
      </header>

      {/* 01 — SELECTED WORK */}
      <section style={sectionBorder}>
        <Kicker>01 — Selected work</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          Frames We&apos;ve Shot Through The Aperture
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          Music videos, branded spots, and original series — generated, directed, scored, and delivered as masters.
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

      {/* 02 — SERVICES */}
      <section style={sectionBorder}>
        <Kicker>02 — Services</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>A Studio, Not A Prompt Box</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          Generation is one tool on the bench. The work is direction, sound, and taste — applied frame by frame.
        </p>
        <div style={cardGrid}>
          {SERVICES_HOME.map((s) => (
            <div key={s.title} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999, background: s.badgeBg, color: s.badgeColor, alignSelf: "flex-start" }}>{s.tag}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", margin: "4px 0 0" }}>{s.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/services" className="btn btn-ghost btn-sm">All services →</Link>
        </div>
      </section>

      {/* 03 — FOR SMALL BUSINESSES */}
      <section style={sectionBorder}>
        <Kicker color="var(--coral-300)">03 — For small businesses</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>AI consulting &amp; AI Search Visibility</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 40 }}>
          Cut through the AI hype with a real roadmap, or find out whether ChatGPT and Google AI Overviews recommend you at all.
        </p>
        <div style={cardGrid}>
          {SMB_HOME.map((sm) => (
            <div key={sm.title} className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--coral-300)" }}>{sm.tag}</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: "2px 0 0" }}>{sm.title}</h4>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-faint)" }}>{sm.price}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/small-business" className="btn btn-ghost btn-sm">Explore small business services →</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <Kicker color="var(--coral-400)">Ready to collaborate?</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.6rem", letterSpacing: "-.02em", margin: "16px 0 28px" }}>Let&apos;s Build Something Extraordinary.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          <Link href="/portfolio" className="btn btn-ghost btn-lg">View my work</Link>
        </div>
      </section>
    </div>
  );
}
