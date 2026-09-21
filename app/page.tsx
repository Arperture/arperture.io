import Link from "next/link";
import { Badge, Panel, StatNumber, WLinkButton } from "@/components/Workbench";
import CalendlyWButton from "@/components/CalendlyWButton";
import HeroVideo from "@/components/HeroVideo";
import { WORK_DATA, SMB_PILLARS, HERO_VIDEO, ytThumb, CALENDLY_30MIN } from "@/lib/data";

const sectionPad: React.CSSProperties = { padding: "56px 0" };
const kicker: React.CSSProperties = {
  display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 600,
  letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ember)", marginBottom: 10,
};
const studioGrid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 };
const priceLine: React.CSSProperties = { fontFamily: "var(--font-mono)", fontSize: 13.5, fontWeight: 600, color: "var(--ember)", whiteSpace: "nowrap" };

export default function HomePage() {
  const studioWork = WORK_DATA.slice(0, 3);
  const wideService = SMB_PILLARS.find((s) => s.title === "Web Visibility Audit") ?? SMB_PILLARS[0];
  const restServices = SMB_PILLARS.filter((s) => s !== wideService);

  return (
    <div className="wrap">
      {/* BENTO HERO */}
      <header style={{ padding: "40px 0" }}>
        <div className="bento-hero-grid">
          <div className="bento-hero-headline" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: 34, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "var(--shadow-sm)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
                <Badge tone="live">Discovery calls open</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em", color: "var(--text-muted)" }}>LEESBURG, VA</span>
              </div>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.025em", fontSize: "clamp(2rem,4.2vw,2.9rem)", lineHeight: 1.03, color: "var(--text)", margin: "0 0 16px", textWrap: "balance" }}>
                AI consulting, training &amp; <span style={{ color: "var(--ember)" }}>visibility</span> for small business.
              </h1>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.55, color: "var(--text-muted)", margin: 0, maxWidth: 480 }}>
                Put AI to work — a roadmap for your operations, a team that knows the tools, and proof customers can find you.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
              <CalendlyWButton url={CALENDLY_30MIN} variant="primary" size="lg">Book a free discovery call</CalendlyWButton>
              <WLinkButton href="/small-business" variant="secondary" size="lg">Explore services →</WLinkButton>
            </div>
          </div>

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "var(--shadow-sm)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--text-muted)", textTransform: "uppercase" }}>Sample audit score</span>
            <StatNumber value="72/100" label="SEO · GEO · AEO" tone="amber" size="xl" />
          </div>

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--text-muted)", textTransform: "uppercase" }}>A tuned stack buys back</span>
            <StatNumber value="11 hrs/wk" label="Typical, post-roadmap" tone="amber" size="lg" />
          </div>
        </div>

        {/* HERO ANCHOR VIDEO */}
        <div style={{ marginTop: 16 }}>
          <HeroVideo youtubeId={HERO_VIDEO.youtubeId} title={HERO_VIDEO.title} />
        </div>
      </header>

      {/* SERVICES BENTO */}
      <section style={sectionPad}>
        <span style={kicker}>What we do</span>
        <div className="bento-services-grid">
          <div className="bento-services-wide" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: 28, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center", boxShadow: "var(--shadow-sm)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, letterSpacing: "-0.02em", color: "var(--text)", margin: 0 }}>{wideService.title}</h3>
                <Badge tone="amber" variant="outline">SEO · GEO · AEO</Badge>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)", margin: 0, maxWidth: 560 }}>{wideService.body}</p>
              <Link href={wideService.href} className="svc-link" style={{ display: "inline-block", marginTop: 12, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5, color: "var(--ember)" }}>Learn more →</Link>
            </div>
            <span style={priceLine}>{wideService.price}</span>
          </div>

          {restServices.map((s) => (
            <div key={s.title} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: 26, display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 19, letterSpacing: "-0.01em", color: "var(--text)", margin: 0 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)", margin: 0, flex: 1 }}>{s.body}</p>
              <span style={priceLine}>{s.price}</span>
              <Link href={s.href} className="svc-link" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5, color: "var(--ember)" }}>Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO */}
      <section style={{ ...sectionPad, borderTop: "1px solid var(--border)", background: "var(--surface)", marginLeft: -24, marginRight: -24, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 26 }}>
            <div>
              <span style={kicker}>The studio</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.9rem", letterSpacing: "-0.02em", color: "var(--text)", margin: 0 }}>We also run a film studio.</h2>
            </div>
            <Link href="/portfolio" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5, color: "var(--ember)" }}>View full portfolio →</Link>
          </div>
          <div style={studioGrid}>
            {studioWork.map((w) => (
              <Link
                key={w.id}
                href={w.hasCase ? `/portfolio/${w.slug}` : "/portfolio"}
                style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-md)", overflow: "hidden", textDecoration: "none", display: "block" }}
                className="card-lift"
              >
                <div style={{ height: 170, backgroundColor: "var(--surface-3)", backgroundImage: `url(${ytThumb(w.youtubeId)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div style={{ padding: 15 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ember)" }}>{w.category.toUpperCase()} · {w.date.toUpperCase()}</span>
                  <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15.5, color: "var(--text)", margin: "7px 0 3px" }}>{w.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5, color: "var(--text-muted)", margin: 0 }}>{w.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionPad}>
        <Panel style={{ padding: 0 }} bodyStyle={{ padding: 0 }}>
          <div style={{ padding: 40, display: "grid", gridTemplateColumns: "1fr auto", gap: 28, alignItems: "center" }} className="cta-grid">
            <div>
              <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: "var(--safety-amber)", boxShadow: "0 0 12px rgba(255,166,26,.7)", marginBottom: 14 }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.8rem", letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 6px" }}>Let&apos;s build something extraordinary.</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--text-muted)", margin: 0 }}>Book a free discovery call — or send us the project you have in mind.</p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <WLinkButton href="/contact" variant="primary" size="lg">Get in touch</WLinkButton>
              <WLinkButton href="/small-business" variant="secondary" size="lg">Explore services</WLinkButton>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}
