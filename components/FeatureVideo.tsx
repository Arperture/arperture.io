"use client";

import { useState } from "react";
import { PlayIcon } from "./icons";

// Click-to-play featured video for homepage sections. Swaps the poster for
// the embed in place rather than opening the portfolio modal, so the video
// stays anchored where the visitor clicked it.
export default function FeatureVideo({
  youtubeId, title, label = "Watch the reel",
}: { youtubeId: string; title: string; label?: string }) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`);

  // User-initiated, so autoplay with sound is allowed; no mute like the modal embeds.
  const embed = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="card" style={{ overflow: "hidden", boxShadow: "var(--glow-cyan)" }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#000" }}>
        {playing ? (
          <iframe
            src={embed}
            title={title}
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block" }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="play-thumb"
            aria-label={`Play ${title}`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: "none", background: "#000", cursor: "pointer", overflow: "hidden" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube poster; images are unoptimized in this static export anyway */}
            <img
              src={poster}
              alt=""
              onError={() => setPoster(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`)}
              // YouTube serves a 120×90 placeholder (not an error) when maxres is missing.
              onLoad={(e) => { if (e.currentTarget.naturalWidth <= 120) setPoster(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`); }}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,11,0) 45%, rgba(10,10,11,.6) 100%)" }} />
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span
                style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: "linear-gradient(120deg,var(--cyan-400),var(--coral-400))",
                  boxShadow: "0 0 0 10px rgba(46,204,250,.22), 0 12px 40px rgba(0,0,0,.45)",
                  display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 6,
                }}
              >
                <PlayIcon size={34} />
              </span>
            </span>
            <span
              style={{
                position: "absolute", left: 22, bottom: 20, fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cyan-400)", boxShadow: "0 0 10px var(--cyan-400)" }} />
              {label} · {title}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
