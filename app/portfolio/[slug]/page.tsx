import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandQuickies from "@/components/BrandQuickies";
import { CASES, ytEmbed, ytThumb, BRAND_QUICKIE_PRICE } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return {};
  const description = c.metaDescription ?? c.detail;
  return {
    title: c.title,
    description,
    alternates: { canonical: `/portfolio/${c.slug}/` },
    openGraph: {
      type: "article",
      title: c.title,
      description,
      url: `/portfolio/${c.slug}/`,
      images: [ytThumb(c.youtubeId)],
    },
    twitter: { card: "summary_large_image", title: c.title, description, images: [ytThumb(c.youtubeId)] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();

  return (
    <div className="wrap">
      <section style={{ padding: "64px 0 32px" }}>
        <Link href="/portfolio" style={{ display: "inline-block", color: "var(--text-faint)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", marginBottom: 20 }}>
          ← Back to portfolio
        </Link>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999, background: c.badgeBg, color: c.badgeColor }}>{c.category}</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.2rem)", letterSpacing: "-.02em", margin: "16px 0 8px", textTransform: "uppercase" }}>{c.title}</h1>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)" }}>{c.client} · {c.year}</p>
      </section>

      <div style={{ width: "100%", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
        <iframe
          src={ytEmbed(c.youtubeId)}
          title={c.title}
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <section style={{ padding: "32px 0 8px", maxWidth: "72ch" }}>
        <p style={{ color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.6 }}>{c.detail}</p>
        <a href={c.linkUrl} target="_blank" rel="noopener noreferrer" className="link-cyan" style={{ display: "inline-block", marginTop: 16, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
          {c.linkLabel} →
        </a>
      </section>

      <section style={{ padding: "24px 0 64px", display: "flex", gap: 40, flexWrap: "wrap" }}>
        {c.stats.map((st) => (
          <div key={st.l}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", color: "var(--cyan-300)" }}>{st.n}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)" }}>{st.l}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "48px 0 56px", borderTop: "1px solid var(--border)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", margin: "0 0 24px" }}>{c.projectsLabel}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          {c.projects.map((pr) => {
            const inner = (
              <>
                {pr.youtubeId && (
                  <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 8, overflow: "hidden", background: "var(--surface-2)", margin: "-4px -4px 4px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ytThumb(pr.youtubeId)} alt={`${pr.title} thumbnail`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <span aria-hidden="true" style={{ position: "absolute", left: 10, bottom: 10, width: 34, height: 34, borderRadius: 999, background: "rgba(18,16,14,.75)", color: "var(--accent)", display: "grid", placeItems: "center", fontSize: "0.8rem" }}>▶</span>
                  </div>
                )}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)" }}>{pr.tag}</span>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", margin: 0, color: "var(--text)" }}>{pr.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>{pr.body}</p>
              </>
            );
            const style = { borderRadius: 14, padding: 20, display: "flex", flexDirection: "column" as const, gap: 8, textDecoration: "none" };
            return pr.youtubeId ? (
              <a key={pr.title} href={`https://www.youtube.com/watch?v=${pr.youtubeId}`} target="_blank" rel="noopener noreferrer" className="card card-lift" style={style} aria-label={`Watch ${pr.title} on YouTube`}>
                {inner}
              </a>
            ) : (
              <div key={pr.title} className="card" style={style}>{inner}</div>
            );
          })}
        </div>
      </section>

      {c.brandQuickies && c.brandQuickies.length > 0 && (
        <section style={{ padding: "0 0 56px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", margin: "0 0 8px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", margin: 0 }}>Brand Quickies</h3>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.06em", color: "var(--coral-300)", fontWeight: 700 }}>{BRAND_QUICKIE_PRICE}</span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: "62ch", margin: "0 0 24px" }}>
            Short, cinematic brand moments produced across the campaign — logo reveals, seasonal spots, and scroll-stopping beats, each customized to the brand.
          </p>
          <BrandQuickies videos={c.brandQuickies} />
        </section>
      )}

      {c.shortForm.length > 0 && (
        <section style={{ padding: "0 0 56px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: "0 0 20px", color: "var(--text-muted)" }}>{c.shortFormLabel}</h3>
          {c.shortForm.some((sf) => sf.youtubeId) ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 16 }}>
              {c.shortForm.map((sf) =>
                sf.youtubeId ? (
                  <a key={sf.youtubeId} href={`https://www.youtube.com/shorts/${sf.youtubeId}`} target="_blank" rel="noopener noreferrer" className="card card-lift" aria-label={`Watch ${sf.title} on YouTube`} style={{ borderRadius: 10, overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none" }}>
                    <div style={{ aspectRatio: "9/16", background: "var(--surface-2)", overflow: "hidden" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ytThumb(sf.youtubeId)} alt={`${sf.title} thumbnail`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div style={{ padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)" }}>{sf.tag}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.25 }}>{sf.title}</span>
                    </div>
                  </a>
                ) : (
                  <div key={sf.title} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)" }}>{sf.tag}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text)" }}>{sf.title}</span>
                  </div>
                )
              )}
            </div>
          ) : (
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {c.shortForm.map((sf) => (
              <div key={sf.title} style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 160 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)" }}>{sf.tag}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text)" }}>{sf.title}</span>
              </div>
            ))}
          </div>
          )}
        </section>
      )}

      <section style={{ padding: "0 0 80px" }}>
        <Link href="/contact" className="btn btn-coral btn-lg">Start a project like this</Link>
      </section>
    </div>
  );
}
