"use client";

import { useCallback, useMemo, useState } from "react";
import { PROJECTS, PROJECT_BY_KEY, PROJECT_KINDS, type Project, type ProjectKind } from "@/lib/data";
import Lightbox, { clipSrc, clipPoster } from "./Lightbox";

type Filter = ProjectKind | "all";

function play(el: HTMLElement) {
  const v = el.querySelector("video");
  if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!v.src) v.src = v.dataset.src || "";
  v.play().catch(() => {});
}
function stop(el: HTMLElement) {
  const v = el.querySelector("video");
  if (v && !v.paused) v.pause();
}

// "masonry" keeps each loop's own shape (portfolio); "uniform" crops every
// card to 16:9 in a straight grid (homepage selection).
export default function WorkGrid({
  keys, filters = false, layout = "masonry",
}: { keys?: string[]; filters?: boolean; layout?: "masonry" | "uniform" }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [sel, setSel] = useState<Project | null>(null);
  const close = useCallback(() => setSel(null), []);

  const base = useMemo(
    () => (keys ? keys.map((k) => PROJECT_BY_KEY[k]).filter(Boolean) : PROJECTS),
    [keys],
  );
  const shown = filter === "all" ? base : base.filter((p) => p.kind === filter);
  const counts = useMemo(() => {
    const m: Record<string, number> = { all: base.length };
    base.forEach((p) => (m[p.kind] = (m[p.kind] || 0) + 1));
    return m;
  }, [base]);

  return (
    <>
      {filters && (
        <div className="chips" role="group" aria-label="Filter work">
          {[{ kind: "all" as Filter, label: "All work" }, ...PROJECT_KINDS].map((f) => (
            <button
              key={f.kind}
              type="button"
              className="chip"
              aria-pressed={filter === f.kind}
              onClick={() => setFilter(f.kind)}
            >
              {f.label} <span className="chip-n">{counts[f.kind] || 0}</span>
            </button>
          ))}
        </div>
      )}

      <ul className={layout === "uniform" ? "work-grid work-grid-uniform" : "work-grid"}>
        {shown.map((p) => {
          const clip = p.clips[0];
          return (
            <li key={p.key} className="work-item">
              <button
                type="button"
                className="work-card"
                onClick={() => setSel(p)}
                onPointerEnter={(e) => play(e.currentTarget)}
                onPointerLeave={(e) => stop(e.currentTarget)}
                onFocus={(e) => play(e.currentTarget)}
                onBlur={(e) => stop(e.currentTarget)}
                aria-label={`Play ${p.title}, ${p.label}, ${p.year}`}
              >
                <span className={`work-media shape-${clip && layout === "masonry" ? clip.shape : "h"}`}>
                  {clip ? (
                    <video
                      data-src={clipSrc(clip.id)}
                      poster={clipPoster(clip.id)}
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-hidden="true"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.still} alt="" loading="lazy" decoding="async" />
                  )}
                </span>
                <span className="work-text">
                  <span className="work-title">{p.title}</span>
                  <span className="work-label">{p.label}</span>
                  <span className="work-year">{p.year}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {sel && <Lightbox project={sel} onClose={close} />}
    </>
  );
}
