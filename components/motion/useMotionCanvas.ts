"use client";

import { useEffect, type RefObject } from "react";
import {
  drawPost, loadMotionImages, offMotionImages, motionFontsReady, SETTLED_NOW, type SceneId,
} from "@/lib/motion-posts";
import { subscribeFrame, prefersReducedMotion } from "./loop";

export type PostState = { scene: SceneId; tapAt: number | null };

// Paints a sample post into a canvas. The canvas redraws every frame only
// while it is on screen. With reduced motion it shows the settled "after"
// frame and never animates.
export function useMotionCanvas(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  state: RefObject<PostState>,
  onRatio?: (ratio: number) => void,
) {
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    if (prefersReducedMotion()) {
      const paint = () => drawPost(cv, state.current.scene, SETTLED_NOW, 0);
      paint();
      loadMotionImages(paint);
      motionFontsReady().then(paint);
      return () => offMotionImages(paint);
    }

    loadMotionImages();
    let visible = false;
    const paintFlat = () => { if (!visible) drawPost(cv, state.current.scene, 0, state.current.tapAt == null ? null : -100); };
    paintFlat();
    motionFontsReady().then(paintFlat);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { visible = e.isIntersecting; onRatio?.(e.intersectionRatio); }),
      { threshold: [0, 0.45] },
    );
    io.observe(cv);
    // The scenes were authored for video frame rates, so 30 fps is plenty and
    // halves the main-thread cost on phones.
    let lastDraw = 0;
    const off = subscribeFrame((now) => {
      if (!visible || now - lastDraw < 1 / 31) return;
      lastDraw = now;
      drawPost(cv, state.current.scene, now, state.current.tapAt);
    });
    return () => { io.disconnect(); off(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
