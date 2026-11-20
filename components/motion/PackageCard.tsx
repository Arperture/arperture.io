"use client";

import { useCallback, useRef, useState } from "react";
import type { MotionPackage } from "@/lib/data";
import { eOut } from "@/lib/motion-posts";
import { prefersReducedMotion } from "./loop";
import SamplePost from "./SamplePost";

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

// Counts a price up from zero once. The real price is in the markup from the
// start, so it reads correctly before (and without) the animation.
export function countUp(el: HTMLElement | null, to: number) {
  if (!el || el.dataset.done || prefersReducedMotion()) return;
  el.dataset.done = "1";
  const t0 = performance.now();
  const step = () => {
    const k = eOut(Math.min(1, (performance.now() - t0) / 900));
    el.textContent = usd(to * k);
    if (k < 1) requestAnimationFrame(step);
  };
  step();
}

export default function PackageCard({ pkg }: { pkg: MotionPackage }) {
  const [live, setLive] = useState(false);
  const priceRef = useRef<HTMLSpanElement>(null);
  const onWake = useCallback(() => {
    setLive(true);
    countUp(priceRef.current, pkg.price);
  }, [pkg.price]);

  return (
    <article className={`fim-pack${live ? " is-live" : ""}`}>
      <SamplePost scene={pkg.scene} label={`Replay the sample post for ${pkg.name}`} onWake={onWake} />
      <div className="fim-pack-body">
        <span className={`fim-badge${pkg.badge === "Our pick" ? " is-pick" : ""}`}>{pkg.badge}</span>
        <h3>{pkg.name}</h3>
        <p className="fim-price">
          <span ref={priceRef}>{usd(pkg.price)}</span>
          {pkg.unit && <small> {pkg.unit}</small>}
        </p>
        <ul>
          {pkg.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </article>
  );
}
