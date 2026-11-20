"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import CalendlyButton from "@/components/CalendlyButton";
import { MOTION_FOUNDING as F, motionCalendlyUrl } from "@/lib/data";
import { countUp } from "./PackageCard";

// The founding offer closes by date, not by a deploy: once `endsAt` passes (or
// every spot is taken) the visitor's browser hides it. The static HTML is
// built with the offer open, so the server snapshot is always "open".
const subscribe = () => () => {};
const isOpenNow = () => Date.now() < Date.parse(F.endsAt) && F.taken < F.total;
export function useFoundingOpen() {
  return useSyncExternalStore(subscribe, isOpenNow, () => true);
}

/** Renders `open` while the founding offer runs and `closed` after it ends. */
export function FoundingSwap({ open, closed }: { open: React.ReactNode; closed: React.ReactNode }) {
  return <>{useFoundingOpen() ? open : closed}</>;
}

export default function FoundingOffer() {
  const open = useFoundingOpen();
  const boxRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { countUp(priceRef.current, F.price); io.disconnect(); }
    }), { threshold: 0.4 });
    io.observe(box);
    return () => io.disconnect();
  }, [open]);

  if (!open) return null;
  const left = F.total - F.taken;
  return (
    <section id="founding" className="section" style={{ scrollMarginTop: 90 }}>
      <div className="fim-found" ref={boxRef}>
        <p className="fim-label">Small Business Saturday · through {F.endsLabel}</p>
        <div className="fim-found-grid">
          <div>
            <h2 className="h-section">Ten Founding Spots for Loudoun Businesses</h2>
            <p>
              Start with one Post Makeover at the founding price. If you like it, lock in Feed in
              Motion at ${F.monthlyLock} a month for as long as you stay.
            </p>
          </div>
          <p className="fim-big">
            <span ref={priceRef}>${F.price}</span>
            <s>${F.was}</s>
          </p>
        </div>
        <div className="fim-spots-row">
          <span className="fim-spots" role="img" aria-label={`${left} of ${F.total} founding spots open`}>
            {Array.from({ length: F.total }, (_, i) => <span key={i} className={i < F.taken ? "is-taken" : ""} />)}
          </span>
          <span className="fim-label">{left} of {F.total} founding spots open</span>
        </div>
        <div>
          <CalendlyButton url={motionCalendlyUrl("founding-spot")} className="btn btn-primary btn-lg">
            Claim a founding spot
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
