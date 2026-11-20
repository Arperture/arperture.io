"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  MOTION_STYLES_READY as STYLES, styleNumber as nn, styleForWhom as forWhom, styleTypeLabel as typeLabel,
  styleClip as src, stylePoster as poster, type MotionStyle as Style,
} from "@/lib/motion-styles";
import { motionCalendlyUrl } from "@/lib/data";
import { openCalendly } from "@/lib/calendly";
import { prefersReducedMotion } from "./loop";

const slug = (s: Style) => `${nn(s)}-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
const PAGE = 12;

function Tile({ st, playing, onOpen, onHover }: {
  st: Style; playing: boolean; onOpen: () => void; onHover: (on: boolean) => void;
}) {
  const vref = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false); // the <video> is created on first play, never before

  useEffect(() => { if (playing) setMounted(true); }, [playing]);
  useEffect(() => {
    const v = vref.current;
    if (!v) return;
    if (playing) v.play().catch(() => {}); else v.pause();
  }, [playing, mounted]);

  return (
    <li className="work-item">
      <button
        type="button" className="work-card" data-style={st.n} onClick={onOpen}
        onPointerEnter={(e) => e.pointerType === "mouse" && onHover(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && onHover(false)}
        onFocus={() => onHover(true)} onBlur={() => onHover(false)}
      >
        <span className="work-media" style={{ aspectRatio: "16 / 9" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster(st)} alt="" loading="lazy" decoding="async" width={640} height={360} />
          {mounted && <video ref={vref} src={src(st)} poster={poster(st)} muted loop playsInline preload="auto" aria-hidden="true" />}
        </span>
        <span className="work-text">
          <span className="work-title">{st.name}</span>
          <span className="work-label">For {forWhom(st)}</span>
          <span className="work-year">{nn(st)} · {typeLabel(st.type)}</span>
        </span>
      </button>
    </li>
  );
}

function Viewer({ list, index, onIndex, onClose }: {
  list: Style[]; index: number; onIndex: (i: number) => void; onClose: () => void;
}) {
  const st = list[index];
  const boxRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const swipe = useRef<number | null>(null);
  const step = useCallback((d: number) => onIndex((index + d + list.length) % list.length), [index, list.length, onIndex]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; prev?.focus?.(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "Tab" && boxRef.current) {
        // keep focus inside the dialog
        const els = Array.from(boxRef.current.querySelectorAll<HTMLElement>("button:not([tabindex='-1']), a[href], video[controls]"));
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1], cur = document.activeElement;
        if (e.shiftKey && (cur === first || !boxRef.current.contains(cur))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (cur === last || !boxRef.current.contains(cur))) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, step]);

  const book = () => { onClose(); openCalendly(motionCalendlyUrl(`style-${slug(st)}`)); };

  // Portaled to <body>: the page's .wrap is its own stacking context, which
  // would otherwise leave the sticky nav painted over the viewer.
  return createPortal(
    <div className="lb" role="dialog" aria-modal="true" aria-label={`Motion style ${nn(st)}, ${st.name}`} ref={boxRef}>
      <button type="button" className="lb-scrim" aria-label="Close" tabIndex={-1} onClick={onClose} />
      <div className="lb-body">
        <div
          className="lb-media lbm-h"
          onPointerDown={(e) => { swipe.current = e.clientX; }}
          onPointerUp={(e) => {
            if (swipe.current == null) return;
            const dx = e.clientX - swipe.current; swipe.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <video key={st.file} src={src(st)} poster={poster(st)} controls muted loop playsInline autoPlay={!prefersReducedMotion()} />
        </div>
        <div className="lb-meta">
          <div className="lb-text">
            <p className="lb-title">{st.name}</p>
            <p className="lb-label">Motion style {nn(st)} · {typeLabel(st.type)} · good for {forWhom(st)}</p>
            <p className="lb-blurb">A 15-second sample. Yours gets your name, your offer and your colors. Use the player controls for sound.</p>
          </div>
          <div className="lb-actions">
            <button type="button" className="btn btn-line btn-sm" onClick={() => step(-1)} aria-label="Previous style">Previous</button>
            <button type="button" className="btn btn-line btn-sm" onClick={() => step(1)} aria-label="Next style">Next</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={book}>Book this style</button>
            <Link href={`/contact/?style=${slug(st)}`} className="btn btn-line btn-sm">Ask about it</Link>
            <button ref={closeRef} type="button" className="btn btn-line btn-sm" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function StyleGallery() {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(PAGE);
  const [hoverN, setHoverN] = useState<number | null>(null); // pointer / keyboard
  const [autoN, setAutoN] = useState<number | null>(null);   // touch: nearest mid-screen
  const [open, setOpen] = useState<number | null>(null);     // style number in the viewer
  const [hidden, setHidden] = useState(false);
  const gridRef = useRef<HTMLUListElement>(null);

  const cats = useMemo(() => {
    const counts = new Map<string, number>();
    STYLES.forEach((s) => counts.set(s.type, (counts.get(s.type) || 0) + 1));
    return [{ key: "all", label: "All", n: STYLES.length },
      ...Array.from(counts, ([key, n]) => ({ key, label: typeLabel(key), n })).sort((a, b) => b.n - a.n || a.label.localeCompare(b.label))];
  }, []);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return STYLES.filter((s) => (cat === "all" || s.type === cat)
      && `${s.name} ${s.goodFor} ${s.type} ${s.aliases || ""}`.toLowerCase().includes(needle));
  }, [cat, q]);
  const visible = list.slice(0, shown);
  const left = list.length - visible.length;

  // Deep link: /motion/#style-09 opens that sample; the hash follows the viewer.
  useEffect(() => {
    const fromHash = () => {
      const m = /^#style-(\d+)/.exec(window.location.hash);
      const n = m ? Number(m[1]) : null;
      if (n != null && STYLES.some((s) => s.n === n)) {
        setCat("all"); setQ(""); setOpen(n);
        document.getElementById("styles")?.scrollIntoView();
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => { window.removeEventListener("hashchange", fromHash); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  const setViewer = useCallback((n: number | null) => {
    setOpen(n);
    const st = n == null ? null : STYLES.find((s) => s.n === n);
    window.history.replaceState(null, "", st ? `#style-${nn(st)}` : window.location.pathname + window.location.search);
  }, []);

  // Touch screens have no hover, so the tile nearest mid-screen plays by itself.
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches || prefersReducedMotion()) return;
    let raf = 0;
    const pick = () => {
      raf = 0;
      let best: number | null = null, bd = Infinity;
      gridRef.current?.querySelectorAll<HTMLElement>("[data-style]").forEach((el) => {
        const r = el.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - window.innerHeight / 2);
        if (d < bd) { bd = d; best = Number(el.dataset.style); }
      });
      setAutoN(bd < window.innerHeight * 0.3 ? best : null);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(pick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const reduced = typeof window !== "undefined" && prefersReducedMotion();
  const viewerList = open != null && !list.some((s) => s.n === open) ? STYLES : list;
  const viewerIndex = open == null ? -1 : viewerList.findIndex((s) => s.n === open);

  if (!STYLES.length) return null;
  return (
    <>
      <div className="chips" role="group" aria-label="Filter styles by type" style={{ marginBottom: 14 }}>
        {cats.map((c) => (
          <button
            key={c.key} type="button" className="chip" aria-pressed={cat === c.key}
            onClick={() => { setCat(c.key); setShown(PAGE); }}
          >
            {c.label} <span className="chip-n">{c.n}</span>
          </button>
        ))}
      </div>
      <input
        className="fim-search" type="search" value={q}
        onChange={(e) => { setQ(e.target.value); setShown(PAGE); }}
        placeholder="Find a style or a business type, like pets or tech"
        aria-label="Find a style or business type"
      />
      <p className="fim-count" aria-live="polite">
        {list.length
          ? `${list.length} ${list.length === 1 ? "style" : "styles"}${left > 0 ? `, showing ${visible.length}` : ""}`
          : "No styles match. Try another word."}
      </p>
      <ul className="work-grid work-grid-uniform" ref={gridRef}>
        {visible.map((st) => (
          <Tile
            key={st.n} st={st}
            playing={!reduced && !hidden && open == null && (hoverN === st.n || (hoverN == null && autoN === st.n))}
            onOpen={() => setViewer(st.n)}
            onHover={(on) => setHoverN((cur) => (on ? st.n : cur === st.n ? null : cur))}
          />
        ))}
      </ul>
      {left > 0 && (
        <button type="button" className="btn btn-line btn-sm" style={{ marginTop: 28 }} onClick={() => setShown((s) => s + PAGE)}>
          Show {Math.min(PAGE, left)} more {Math.min(PAGE, left) === 1 ? "style" : "styles"}
        </button>
      )}
      {viewerIndex >= 0 && (
        <Viewer
          list={viewerList} index={viewerIndex}
          onIndex={(i) => setViewer(viewerList[i].n)} onClose={() => setViewer(null)}
        />
      )}
    </>
  );
}
