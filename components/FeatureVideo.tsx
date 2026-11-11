"use client";

import { useState } from "react";
import { PlayIcon } from "./icons";

// Click-to-play featured video for homepage sections. Swaps the poster for
// the embed in place rather than opening the portfolio modal, so the video
// stays anchored where the visitor clicked it.
export default function FeatureVideo({
  youtubeId, title, label = "Watch the reel", poster: localPoster,
}: { youtubeId: string; title: string; label?: string; poster?: string }) {
  const [playing, setPlaying] = useState(false);
  // A local frame grab beats YouTube's thumbnail, which is often a text-heavy click magnet.
  const [poster, setPoster] = useState(localPoster || `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`);

  // User-initiated, so autoplay with sound is allowed; no mute like the modal embeds.
  const embed = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div style={{ overflow: "hidden", borderRadius: 6, background: "#000" }}>
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
              onError={() => !localPoster && setPoster(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`)}
              // YouTube serves a 120×90 placeholder (not an error) when maxres is missing.
              onLoad={(e) => { if (!localPoster && e.currentTarget.naturalWidth <= 120) setPoster(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`); }}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <span style={{ position: "absolute", inset: 0, background: "rgba(18,16,14,.18)" }} />
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span
                style={{
                  width: 76, height: 76, borderRadius: 3,
                  background: "var(--accent)", color: "var(--on-accent)",
                  display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 5,
                }}
              >
                <PlayIcon size={34} />
              </span>
            </span>
            <span
              style={{
                position: "absolute", left: 0, bottom: 0, padding: "10px 16px", fontFamily: "var(--font-body)", fontSize: "0.95rem",
                fontWeight: 600, color: "var(--paper)", background: "rgba(18,16,14,.86)",
              }}
            >
              {label} · {title}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
