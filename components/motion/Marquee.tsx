"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion, subscribeFrame } from "./loop";

const WORDS = ["Motion posts", "Leesburg", "Loudoun County", "Shot through the aperture", "Now booking"];

// A slow ticker that speeds up with scroll velocity. Decorative: hidden from
// assistive tech, and static with reduced motion.
export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;
    let x = 0, lastY = window.scrollY, vel = 0;
    return subscribeFrame((_now, dt) => {
      const y = window.scrollY;
      vel += ((y - lastY) / Math.max(dt, 0.001) - vel) * 0.12; lastY = y;
      x -= (38 + Math.abs(vel) * 0.35) * dt;
      const half = track.scrollWidth / 2;
      if (half > 0 && -x > half) x += half;
      track.style.transform = `translateX(${x}px)`;
    });
  }, []);

  const run = [0, 1, 2].flatMap((r) => WORDS.map((w) => <span key={`${r}-${w}`}>{w}</span>));
  return (
    <div className="fim-marquee" aria-hidden="true">
      <div className="fim-marquee-track" ref={trackRef}>
        <div className="fim-marquee-run">{run}</div>
        <div className="fim-marquee-run">{run}</div>
      </div>
    </div>
  );
}
