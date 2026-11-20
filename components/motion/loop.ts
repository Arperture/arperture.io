// One requestAnimationFrame loop shared by everything animated on /motion
// (sample posts, marquee, phone tilt). It runs only while something is
// subscribed, and the browser pauses it in hidden tabs.
type Frame = (now: number, dt: number) => void;

const subs = new Set<Frame>();
let raf = 0;
let last = 0;

export const nowSec = () => performance.now() / 1000;

function tick(t: number) {
  const now = t / 1000;
  const dt = Math.min(0.05, Math.max(0, now - last));
  last = now;
  subs.forEach((f) => f(now, dt));
  raf = subs.size ? requestAnimationFrame(tick) : 0;
}

export function subscribeFrame(fn: Frame) {
  subs.add(fn);
  if (!raf) { last = nowSec(); raf = requestAnimationFrame(tick); }
  return () => { subs.delete(fn); };
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
