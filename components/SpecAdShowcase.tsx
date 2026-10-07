"use client";

/* eslint-disable @next/next/no-img-element -- remote YouTube posters; images are unoptimized in this static export anyway */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SPEC_ADS, SPEC_AD_INDUSTRIES, type SpecAd, type SpecAdIndustry } from "@/lib/data";
import { PlayIcon } from "./icons";

// Industry Spotlight stage + drifting filmstrip rail for the spec ads.
// One stage and one lazily mounted YouTube player; everything else is
// posters, so the section stays light however many ads are in the set.

const AUTO_ADVANCE_MS = 8000;
const CROSSFADE_MS = 700;
const DRIFT_PX_PER_MS = 0.028;
const RING_CIRCUMFERENCE = 94.25; // 2π · r15, matches the specRing keyframe
const TOUCH_RESUME_MS = 5000;

type Filter = "all" | SpecAdIndustry;
type Layer = { id: string; key: number };

const poster = (id: string, size: "maxresdefault" | "hqdefault") => `https://i.ytimg.com/vi/${id}/${size}.jpg`;
// User-initiated, so autoplay with sound is allowed; no mute like the modal embeds.
const embed = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
// YouTube serves a 120×90 grey placeholder (not an error) when a video has no
// maxres thumbnail, so fall back on size as well as on load failure. hqdefault
// always exists.
const fallbackIfPlaceholder = (img: HTMLImageElement, id: string) => {
  if (img.src.endsWith("hqdefault.jpg")) return;
  if (!img.complete || img.naturalWidth === 0 || img.naturalWidth <= 120) img.src = poster(id, "hqdefault");
};
const adsFor = (filter: Filter): SpecAd[] => (filter === "all" ? SPEC_ADS : SPEC_ADS.filter((a) => a.industry === filter));
const byId = (id: string) => SPEC_ADS.find((a) => a.youtubeId === id) ?? SPEC_ADS[0];

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" };

export default function SpecAdShowcase() {
  const [filter, setFilter] = useState<Filter>("all");
  const ads = useMemo(() => adsFor(filter), [filter]);
  const [activeId, setActiveId] = useState(SPEC_ADS[0].youtubeId);
  const active = ads.find((a) => a.youtubeId === activeId) ?? ads[0];
  const [playing, setPlaying] = useState(false);
  const [stageHover, setStageHover] = useState(false);
  const [railPaused, setRailPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [layers, setLayers] = useState<Layer[]>([{ id: SPEC_ADS[0].youtubeId, key: 0 }]);

  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, moved: false, startX: 0, startScroll: 0 });
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const select = useCallback((id: string) => {
    setActiveId(id);
    setPlaying(false);
    setCycle((c) => c + 1);
  }, []);

  const chooseFilter = (f: Filter) => {
    setFilter(f);
    const first = adsFor(f)[0];
    if (first) select(first.youtubeId);
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Crossfade: keep the outgoing poster underneath until the new one has faded in.
  useEffect(() => {
    setLayers((ls) => (ls[ls.length - 1]?.id === active.youtubeId ? ls : [...ls.slice(-1), { id: active.youtubeId, key: Date.now() }]));
    const t = setTimeout(() => setLayers((ls) => ls.slice(-1)), CROSSFADE_MS);
    return () => clearTimeout(t);
  }, [active.youtubeId]);

  const ringVisible = inView && !playing && !reducedMotion && ads.length > 1;
  const autoOn = ringVisible && !stageHover;

  // Restart the ring and the timer together whenever auto-advance (re)starts.
  useEffect(() => {
    if (autoOn) setCycle((c) => c + 1);
  }, [autoOn]);

  useEffect(() => {
    if (!autoOn) return;
    const i = ads.findIndex((a) => a.youtubeId === active.youtubeId);
    const next = ads[(i + 1) % ads.length];
    const warm = new Image();
    warm.src = poster(next.youtubeId, "maxresdefault");
    const t = setTimeout(() => select(next.youtubeId), AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [autoOn, ads, active.youtubeId, select, cycle]);

  // Filmstrip drift: the rail scrolls itself slowly; the list is doubled so
  // wrapping back by half the width is seamless.
  const loop = ads.length >= 4;
  const driftOn = inView && !reducedMotion && !railPaused && !dragging && !playing && loop;
  useEffect(() => {
    if (!driftOn) return;
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft;
    const step = (now: number) => {
      pos += (now - last) * DRIFT_PX_PER_MS;
      const half = el.scrollWidth / 2;
      if (half > 0 && pos >= half) pos -= half;
      el.scrollLeft = pos;
      last = now;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [driftOn]);

  // Mouse drag-to-scrub. Window listeners (not pointer capture) so tile
  // clicks still land on the tiles.
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      const d = drag.current;
      const el = trackRef.current;
      if (!d.down || !el) return;
      const dx = e.clientX - d.startX;
      if (Math.abs(dx) > 4) d.moved = true;
      el.scrollLeft = d.startScroll - dx;
    };
    const onUp = () => {
      drag.current.down = false;
      setDragging(false);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging]);

  const onTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0 || !trackRef.current) return;
    drag.current = { down: true, moved: false, startX: e.clientX, startScroll: trackRef.current.scrollLeft };
    setDragging(true);
  };

  const onTrackTouchStart = () => {
    setRailPaused(true);
    if (touchTimer.current) clearTimeout(touchTimer.current);
    touchTimer.current = setTimeout(() => setRailPaused(false), TOUCH_RESUME_MS);
  };

  const onTileClick = (id: string) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    select(id);
  };

  const railItems = loop ? [...ads, ...ads] : ads;
  const count = (f: Filter) => adsFor(f).length;

  return (
    <div ref={rootRef}>
      {/* Industry chips */}
      <div role="group" aria-label="Filter spec ads by industry" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {(["all", ...SPEC_AD_INDUSTRIES] as Filter[]).map((f) => (
          <button key={f} type="button" className="spec-chip" aria-pressed={filter === f} onClick={() => chooseFilter(f)}>
            {f === "all" ? "All" : f}
            <span className="spec-chip-count">{count(f)}</span>
          </button>
        ))}
      </div>

      {/* Stage */}
      <div className="card" style={{ overflow: "hidden", boxShadow: "var(--glow-cyan)" }}>
        <div
          onPointerEnter={() => setStageHover(true)}
          onPointerLeave={() => setStageHover(false)}
          style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#000" }}
        >
          {playing ? (
            <iframe
              src={embed(active.youtubeId)}
              title={`${active.business} — ${active.title}`}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block" }}
            />
          ) : (
            <>
              {layers.map((l) => {
                const ad = byId(l.id);
                const portrait = ad.orientation === "portrait";
                return (
                  <div key={l.key} className="spec-layer" style={{ position: "absolute", inset: 0 }}>
                    {portrait && (
                      <img
                        src={poster(l.id, "hqdefault")}
                        alt=""
                        aria-hidden
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(28px) brightness(.55)", transform: "scale(1.15)" }}
                      />
                    )}
                    <img
                      src={poster(l.id, "maxresdefault")}
                      alt=""
                      onLoad={(e) => fallbackIfPlaceholder(e.currentTarget, l.id)}
                      onError={(e) => fallbackIfPlaceholder(e.currentTarget, l.id)}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: portrait ? "contain" : "cover", display: "block" }}
                    />
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="play-thumb"
                aria-label={`Play ${active.business} — ${active.title}`}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: "none", cursor: "pointer", background: "linear-gradient(180deg, rgba(10,10,11,0) 45%, rgba(10,10,11,.6) 100%)" }}
              >
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
                <span style={{ ...mono, position: "absolute", left: 22, bottom: 20, fontSize: "0.72rem", letterSpacing: "0.12em", color: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cyan-400)", boxShadow: "0 0 10px var(--cyan-400)" }} />
                  Spec ad · {active.business}
                </span>
              </button>
            </>
          )}
        </div>

        {/* Stage meta */}
        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", justifyContent: "space-between", padding: "18px 22px 20px" }}>
          <div style={{ minWidth: 0 }}>
            <span style={{ ...mono, fontSize: "0.68rem", color: "var(--cyan-300)" }}>
              {active.industry} · {active.location} · {active.duration}
            </span>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", margin: "6px 0 4px", color: "var(--text)" }}>
              {active.business}
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5, margin: 0 }}>
              <span style={{ color: "var(--text)", fontWeight: 600 }}>{active.title}.</span> {active.blurb}
            </p>
          </div>
          <div aria-hidden style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 10, opacity: ringVisible ? 1 : 0, transition: "opacity .3s" }}>
            <span style={{ ...mono, fontSize: "0.62rem", color: "var(--text-faint)" }}>{stageHover ? "Paused" : "Up next"}</span>
            <svg width="36" height="36" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border-strong)" strokeWidth="2" />
              <circle
                key={cycle}
                className={`spec-ring${stageHover ? " is-paused" : ""}`}
                cx="18" cy="18" r="15" fill="none" stroke="var(--cyan-400)" strokeWidth="2" strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE} strokeDashoffset={RING_CIRCUMFERENCE} transform="rotate(-90 18 18)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Filmstrip rail */}
      <div
        className="spec-rail"
        onPointerEnter={(e) => { if (e.pointerType === "mouse") setRailPaused(true); }}
        onPointerLeave={(e) => { if (e.pointerType === "mouse") setRailPaused(false); }}
        onFocusCapture={() => setRailPaused(true)}
        onBlurCapture={() => setRailPaused(false)}
        onTouchStart={onTrackTouchStart}
        style={{ marginTop: 18 }}
      >
        <div
          ref={trackRef}
          className={`spec-track${dragging ? " is-dragging" : ""}`}
          onPointerDown={onTrackPointerDown}
          style={{ justifyContent: loop ? undefined : "center" }}
        >
          {railItems.map((a, i) => {
            const current = a.youtubeId === active.youtubeId;
            return (
              <button
                key={`${a.youtubeId}-${i}`}
                type="button"
                className="spec-tile"
                aria-current={current ? "true" : undefined}
                aria-label={`${a.business} — ${a.title}`}
                tabIndex={loop && i >= ads.length ? -1 : 0}
                onClick={() => onTileClick(a.youtubeId)}
              >
                <span style={{ position: "relative", display: "block", aspectRatio: "16 / 9", background: "#000" }}>
                  <img
                    src={poster(a.youtubeId, "hqdefault")}
                    alt=""
                    draggable={false}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: a.orientation === "portrait" ? "contain" : "cover", display: "block" }}
                  />
                  <span style={{ ...mono, position: "absolute", right: 8, bottom: 8, fontSize: "0.62rem", letterSpacing: "0.06em", padding: "3px 7px", borderRadius: 6, background: "rgba(10,10,11,.7)", color: "#fff" }}>
                    {a.duration}
                  </span>
                </span>
                <span style={{ display: "block", padding: "8px 10px 10px", textAlign: "left", background: "var(--surface)" }}>
                  <span style={{ ...mono, display: "block", fontSize: "0.6rem", color: current ? "var(--cyan-300)" : "var(--text-faint)" }}>{a.industry}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.25, marginTop: 3, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {a.business}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
