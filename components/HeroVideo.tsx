"use client";

import { useState } from "react";
import { Panel } from "@/components/Workbench";
import { PlayIcon } from "./icons";

export default function HeroVideo({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`);

  // User-initiated, so autoplay with sound is allowed; no mute like the portfolio modal.
  const embed = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <Panel title={title} amberDot style={{ borderRadius: "var(--r-lg)" }} bodyStyle={{ padding: 0 }}>
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
            {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube poster, images are unoptimized in this static export anyway */}
            <img
              src={poster}
              alt=""
              onError={() => setPoster(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`)}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(18,20,23,0) 45%, rgba(18,20,23,.55) 100%)" }} />
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span
                style={{
                  width: 76, height: 76, borderRadius: "50%", background: "var(--safety-amber)",
                  border: "1px solid var(--safety-amber)", boxShadow: "0 0 0 8px rgba(255,166,26,.28), 0 0 32px rgba(255,166,26,.55)",
                  display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 5,
                }}
              >
                <PlayIcon size={32} />
              </span>
            </span>
            <span
              style={{
                position: "absolute", left: 20, bottom: 18, fontFamily: "var(--font-mono)", fontSize: 12,
                fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff",
                display: "flex", alignItems: "center", gap: 8,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--safety-amber)", boxShadow: "0 0 8px rgba(255,166,26,.7)" }} />
              Watch the reel
            </span>
          </button>
        )}
      </div>
    </Panel>
  );
}
