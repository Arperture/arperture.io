import ALL_STYLES from "./motion-styles.json";

// The motion style library behind the /motion gallery and the homepage strip.
export type MotionStyle = { n: number; name: string; type: string; goodFor: string; file: string; aliases?: string; ready: boolean };

// A style only shows once its clip and poster are in public/media/styles (the
// `ready` flag is set by scripts/motion-styles.mjs), so there is never an empty tile.
export const MOTION_STYLES_READY = (ALL_STYLES as MotionStyle[]).filter((s) => s.ready);

export const styleNumber = (s: MotionStyle) => String(s.n).padStart(2, "0");
// "Food & bakeries" reads as "for food & bakeries" mid-sentence, but acronyms
// and brand-cased words ("SaaS problem...", "AI consultants") keep their case.
export const styleForWhom = (s: MotionStyle) =>
  (/^\p{Lu}[\p{Ll},-]*$/u.test(s.goodFor.split(" ")[0]) ? s.goodFor.charAt(0).toLowerCase() + s.goodFor.slice(1) : s.goodFor);
export const styleClip = (s: MotionStyle) => `/media/styles/${s.file}.mp4`;
export const stylePoster = (s: MotionStyle) => `/media/styles/posters/${s.file}.jpg`;

const TYPE_LABEL: Record<string, string> = { "Data-Viz": "Data viz", "Mixed-Media": "Mixed media", "Hand-Drawn": "Hand-drawn" };
export const styleTypeLabel = (t: string) => TYPE_LABEL[t] || t;
