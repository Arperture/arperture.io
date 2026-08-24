"use client";

import { useEffect, useState } from "react";
import { BRAND_QUICKIES, ytThumb, ytEmbed, type BrandQuickie } from "@/lib/data";
import { PlayIcon } from "./icons";

// Compact click-to-play reel of Brand Quickie spots. Used on the homepage
// featured segment and on client case-study pages that have a set.
export default function BrandQuickies({ videos = BRAND_QUICKIES }: { videos?: BrandQuickie[] }) {
  const [active, setActive] = useState<BrandQuickie | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
        {videos.map((v) => (
          <div key={v.youtubeId} className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => setActive(v)}
              className="play-thumb"
              aria-label={`Play ${v.title}`}
              style={{
                display: "block", position: "relative", width: "100%", aspectRatio: "16/9",
                backgroundColor: "var(--surface-2)", backgroundImage: `url(${ytThumb(v.youtubeId)})`,
                backgroundSize: "cover", backgroundPosition: "center", border: "none", padding: 0, cursor: "pointer",
              }}
            >
              <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(14,14,15,.55)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)" }}>
                  <PlayIcon />
                </span>
              </span>
            </button>
            <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>{v.tag}</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.98rem", lineHeight: 1.3, margin: 0, color: "var(--text)" }}>{v.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(10,10,11,.78)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 900, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.25)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", lineHeight: 1 }}
              >
                ✕
              </button>
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
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "18px 22px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>Brand Quickie · {active.tag}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.25rem", margin: "8px 0 0", color: "var(--text)" }}>{active.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
