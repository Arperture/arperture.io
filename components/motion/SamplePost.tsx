"use client";

import { useCallback, useEffect, useRef } from "react";
import type { SceneId } from "@/lib/motion-posts";
import { nowSec, prefersReducedMotion } from "./loop";
import { useMotionCanvas, type PostState } from "./useMotionCanvas";

// One square sample post. It sits flat until it is 45% on screen, then "taps"
// itself and comes alive. Clicking replays the move.
export default function SamplePost({
  scene, label, size = 560, onWake,
}: { scene: SceneId; label: string; size?: number; onWake?: () => void }) {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const state = useRef<PostState>({ scene, tapAt: null });
  const onWakeRef = useRef(onWake);
  onWakeRef.current = onWake;
  const timer = useRef(0);

  const tap = useCallback((replay: boolean) => {
    if (state.current.tapAt != null && !replay) return;
    state.current.tapAt = nowSec();
    onWakeRef.current?.();
  }, []);

  useMotionCanvas(cvRef, state, (ratio) => {
    if (ratio > 0.45 && state.current.tapAt == null && !timer.current) {
      timer.current = window.setTimeout(() => tap(false), 350);
    }
  });

  useEffect(() => {
    if (prefersReducedMotion()) onWakeRef.current?.();
    return () => window.clearTimeout(timer.current);
  }, []);

  return (
    <button type="button" className="fim-post" onClick={() => tap(true)} aria-label={label}>
      <canvas ref={cvRef} width={size} height={size} aria-hidden="true" />
    </button>
  );
}
