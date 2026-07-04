"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WORK_DATA, ytThumb, ytEmbed, type Work } from "@/lib/data";
import { PlayIcon } from "./icons";

export default function PortfolioGrid() {
  const [active, setActive] = useState<Work | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      <section style={{ padding: "16px 0 64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
        {WORK_DATA.map((w) => (
          <div key={w.id} className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => setActive(w)}
              className="play-thumb"
              aria-label={`Play ${w.title}`}
              style={{ display: "block", position: "relative", width: "100%", height: 170, backgroundColor: "var(--surface-2)", backgroundImage: `url(${ytThumb(w.youtubeId)})`, backgroundSize: "cover", backgroundPosition: "center", border: "none", padding: 0, cursor: "pointer" }}
            >
              <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(14,14,15,.55)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)" }}>
                  <PlayIcon />
                </span>
              </span>
            </button>
            <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>{w.category}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.05em", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{w.date}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.25rem", margin: 0 }}>{w.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, flex: 1 }}>{w.blurb}</p>
              {w.hasCase && (
                <Link href={`/portfolio/${w.slug}`} className="link-cyan" style={{ alignSelf: "flex-start", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                  View full project →
                </Link>
              )}
            </div>
          </div>
        ))}
      </section>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(10,10,11,.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 900, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => setActive(null)} aria-label="Close" style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "1px solid var(--border-strong)", color: "var(--text)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", lineHeight: 1 }}>✕</button>
            </div>
            <div style={{ width: "100%", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9", background: "#000", boxShadow: "0 24px 64px rgba(0,0,0,.6)" }}>
              <iframe
                src={ytEmbed(active.youtubeId, true)}
                title={active.title}
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div style={{ background: "rgba(28,28,28,.7)", border: "1px solid var(--border)", borderRadius: 14, padding: "20px 24px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>{active.category}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", margin: "8px 0 6px", color: "var(--text)" }}>{active.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>{active.blurb}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
