"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { WALL_COLUMNS, PROJECT_BY_KEY, REEL_CLIP, CALENDLY_30MIN, type Clip, type Project } from "@/lib/data";
import { openCalendly } from "@/lib/calendly";
import Lightbox, { clipSrc, clipPoster } from "./Lightbox";

type Tile = { project: Project; clip: Clip };

const tileFor = (id: string): Tile | null => {
  const project = PROJECT_BY_KEY[id.split("-")[0]];
  const clip = project?.clips.find((c) => c.id === id);
  return project && clip ? { project, clip } : null;
};

const COLUMNS: Tile[][] = WALL_COLUMNS.map((col) => col.map(tileFor).filter((t): t is Tile => !!t));

export default function HomeHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [sel, setSel] = useState<Tile | null>(null);
  const close = useCallback(() => setSel(null), []);

  // Play only the loops that are on screen; pause the rest. With reduced
  // motion the wall stands still and shows posters.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            if (!v.src) v.src = v.dataset.src || "";
            v.play().catch(() => {});
          } else if (!v.paused) v.pause();
        }
      },
      { root: null, rootMargin: "120px 0px", threshold: 0.01 },
    );
    root.querySelectorAll("video").forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  const reel = tileFor(REEL_CLIP);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div ref={rootRef} className="wall-frame" aria-label="Recent work">
        <div className="wall">
          {COLUMNS.map((col, i) => (
            <div key={i} className={`wall-col c${i + 1} ${i % 2 ? "down" : "up"}`}>
              {[0, 1].map((copy) =>
                col.map((t) => (
                  <button
                    key={`${copy}-${t.clip.id}`}
                    type="button"
                    className={`tile shape-${t.clip.shape}`}
                    onClick={() => setSel(t)}
                    aria-label={copy ? undefined : `Play ${t.project.title}, ${t.project.label}`}
                    aria-hidden={copy ? true : undefined}
                    tabIndex={copy ? -1 : 0}
                  >
                    <video
                      className="tile-media"
                      data-src={clipSrc(t.clip.id)}
                      poster={clipPoster(t.clip.id)}
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-hidden="true"
                    />
                    <span className="tile-cap">
                      <span className="tile-title">{t.project.title}</span>
                      <span className="tile-label">{t.project.label}</span>
                    </span>
                  </button>
                )),
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-copy">
        <h1 id="hero-title" className="hero-title">Big-brand video, small-business budget.</h1>
        <p className="hero-lede">
          Brand films, ads and social content from a studio in Leesburg, Virginia. Scripted, directed
          and scored like a full production crew, without the five-figure invoice.
        </p>
        <div className="hero-actions">
          <a href={CALENDLY_30MIN} onClick={(e) => openCalendly(CALENDLY_30MIN, e)} className="btn btn-primary btn-lg">
            Book a discovery call
          </a>
          {reel && (
            <button type="button" className="btn btn-line btn-lg" onClick={() => setSel(reel)}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 1.8 L12 7 L3 12.2 Z" fill="currentColor" />
              </svg>
              Watch the reel
            </button>
          )}
        </div>
        <div className="doors">
          <Link href="/services/" className="door">For local businesses</Link>
          <Link href="/brands/" className="door">For DTC &amp; SaaS brands</Link>
        </div>
      </div>

      {sel && <Lightbox project={sel.project} clip={sel.clip} onClose={close} />}
    </section>
  );
}
