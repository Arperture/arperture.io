// Sample-post canvas scenes for /motion ("Feed in Motion").
//
// Ported from the Feed in Motion prototype, which was tuned frame by frame, so
// the timing, easing and layout are unchanged. Only the paint changed: the
// palette is the v3 warm dark + amber system and type is Archivo (condensed
// display) instead of Clash Display / Space Mono.
//
// Each scene is a pure function of time since the "tap", drawn in a
// 1000 x 1000 design space centred on the origin. Before the tap a flat grey
// "before" post is shown; at the tap a ripple plays and the "after" scene takes
// over. The businesses named in the scenes are invented samples.

export type SceneId = "bakery" | "winery" | "bike" | "taco";
export const SCENE_IDS: SceneId[] = ["bakery", "winery", "bike", "taco"];

/** Settled time used for reduced-motion: every scene is fully built by 2.8s. */
export const SETTLED_NOW = 10;

const C = {
  ink: "#12100E", ink8: "#2A2520", ink7: "#37312A", ink6: "#4A433A", ink5: "#645B50", ink4: "#958C80",
  paper: "#F1ECE3", amber: "#E9A23B", amberHi: "#F2B85F", amber7: "#6E4617",
};
const DISP = '"Archivo", system-ui, sans-serif';
const BODY = '"Archivo", system-ui, sans-serif';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
export const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
export const eOut = (k: number) => 1 - Math.pow(1 - k, 3);
const eBack = (k: number) => { const c = 1.70158, x = k - 1; return 1 + (c + 1) * x * x * x + c * x * x; };
const eBounce = (k: number) => {
  const n = 7.5625, d = 2.75;
  if (k < 1 / d) return n * k * k;
  if (k < 2 / d) return n * (k -= 1.5 / d) * k + 0.75;
  if (k < 2.5 / d) return n * (k -= 2.25 / d) * k + 0.9375;
  return n * (k -= 2.625 / d) * k + 0.984375;
};
const rnd = (i: number) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

// ---- cut-out images (loaded once, drawn when ready) ----
type ImgName = "loaf" | "glass" | "bike" | "taco";
const IM: Partial<Record<ImgName, HTMLImageElement>> = {};
let imagesStarted = false;
export function loadMotionImages(onLoad?: () => void) {
  if (typeof window === "undefined") return;
  if (!imagesStarted) {
    imagesStarted = true;
    (["loaf", "glass", "bike", "taco"] as ImgName[]).forEach((n) => {
      const i = new Image();
      i.onload = () => { IM[n] = i; listeners.forEach((f) => f()); };
      i.src = `/assets/motion/${n}.webp`;
    });
  }
  if (onLoad) listeners.add(onLoad);
}
const listeners = new Set<() => void>();
export function offMotionImages(f: () => void) { listeners.delete(f); }

/** Resolves once Archivo (with its width axis) is usable on a canvas. */
export function motionFontsReady(): Promise<void> {
  if (typeof document === "undefined" || !document.fonts) return Promise.resolve();
  return Promise.all([
    document.fonts.load('800 100px "Archivo"'),
    document.fonts.load('600 100px "Archivo"'),
  ]).then(() => undefined, () => undefined);
}

// ---- drawing helpers (module-level context, set by drawPost) ----
let g!: CanvasRenderingContext2D;

// Archivo's condensed cut comes from its width axis. The stretch keyword goes
// in the font shorthand where the browser accepts it there, and on the
// context's fontStretch property where it exists. A browser with neither draws
// normal width, and the width guards below keep text inside the frame.
let shorthandStretch: boolean | null = null;
function canShorthandStretch() {
  if (shorthandStretch == null) {
    const probe = "800 extra-condensed 10px sans-serif";
    g.font = "10px serif"; g.font = probe;
    shorthandStretch = g.font !== "10px serif";
  }
  return shorthandStretch;
}
function setFont(wt: number, size: number, font: string) {
  const narrow = font === DISP;
  g.font = narrow && canShorthandStretch() ? `${wt} extra-condensed ${size}px ${font}` : `${wt} ${size}px ${font}`;
  if ("fontStretch" in g) (g as unknown as { fontStretch: string }).fontStretch = narrow ? "extra-condensed" : "normal";
}
function txt(s: string, x: number, y: number, size: number, wt: number, col: string, align: CanvasTextAlign = "center", font = DISP, ls = 0, maxW = 0) {
  setFont(wt, size, font); g.letterSpacing = ls + "px";
  if (maxW) { const w = g.measureText(s).width; if (w > maxW) { size *= maxW / w; setFont(wt, size, font); } }
  g.fillStyle = col; g.textAlign = align; g.textBaseline = "middle"; g.fillText(s, x, y); g.letterSpacing = "0px";
}
function img(im: HTMLImageElement | undefined, cx: number, cy: number, w: number) {
  if (!im) return; const h = (w * im.height) / im.width; g.drawImage(im, cx - w / 2, cy - h / 2, w, h);
}
function shadow(cx: number, cy: number, rx: number, ry: number, a: number) {
  if (rx <= 0) return; g.fillStyle = `rgba(0,0,0,${a})`; g.beginPath(); g.ellipse(cx, cy, rx, ry, 0, 0, 7); g.fill();
}
function sticker(cx: number, cy: number, r: number, fill: string, l1: string, l2: string, ink: string, k: number, rot: number) {
  if (k <= 0) return;
  g.save(); g.translate(cx, cy); g.rotate(rot); g.scale(k, k);
  g.fillStyle = "rgba(0,0,0,.25)"; g.beginPath(); g.arc(5, 8, r, 0, 7); g.fill();
  g.fillStyle = fill; g.beginPath();
  for (let i = 0; i < 40; i++) { const a = (i / 40) * Math.PI * 2, rad = r * (i % 2 ? 0.93 : 1); g.lineTo(Math.cos(a) * rad, Math.sin(a) * rad); }
  g.closePath(); g.fill();
  txt(l1, 0, -r * 0.2, r * 0.5, 800, ink, "center", DISP, 0, r * 1.42);
  txt(l2, 0, r * 0.28, r * 0.34, 700, ink, "center", DISP, 0, r * 1.42);
  g.restore();
}
function tag(s: string, y: number, k: number, col = C.paper) {
  if (k <= 0) return; g.globalAlpha = k; txt(s, 0, y + (1 - k) * 14, 27, 700, col, "center", BODY, 3, 900); g.globalAlpha = 1;
}

// ---- flat "before" post ----
const DULL: Record<SceneId, [string, string]> = {
  bakery: ["Fresh bread daily", "come by!"],
  winery: ["OPEN SAT - SUN", "12 - 6 · tastings available"],
  bike: ["Tune-ups $60", "call for details"],
  taco: ["TACO TUESDAY!!", "2 for $7 all day"],
};
function dull(id: SceneId) {
  g.fillStyle = C.ink8; g.fillRect(-500, -500, 1000, 1000);
  g.strokeStyle = "rgba(241,236,227,.10)"; g.lineWidth = 3; g.strokeRect(-455, -455, 910, 910);
  const f = "Arial, sans-serif", L = DULL[id];
  txt(L[0], 0, -30, 84, 700, C.ink5, "center", f, 0, 800);
  txt(L[1], 0, 70, 44, 400, C.ink5, "center", f, 0, 800);
}

// ---- live "after" posts ----
const S: Record<SceneId, (lt: number) => void> = {
  bakery(lt) {
    g.fillStyle = C.amber7; g.fillRect(-500, -500, 1000, 1000);
    g.save(); g.translate(0, 150); g.rotate(lt * 0.12); g.fillStyle = "rgba(242,184,95,.20)";
    for (let i = 0; i < 12; i++) { g.rotate(Math.PI / 6); g.beginPath(); g.moveTo(0, 0); g.lineTo(1500, -105); g.lineTo(1500, 105); g.fill(); }
    g.restore();
    const e = eBack(seg(lt, 0.4, 1.05)), ly = 150 + (1 - e) * 900 + Math.sin(lt * 2.2) * 6;
    shadow(0, 365, 300 * e, 34, 0.25);
    const sk = seg(lt, 1.0, 1.7);
    if (sk > 0) for (let i = -1; i <= 1; i++) {
      g.strokeStyle = `rgba(241,236,227,${0.6 * sk})`; g.lineWidth = 15; g.lineCap = "round"; g.beginPath();
      for (let s = 0; s <= 1; s += 0.05) { const yy = ly - 200 - s * 170 * sk, xx = i * 120 + Math.sin(s * 6.5 + lt * 3 + i * 1.7) * 20; s ? g.lineTo(xx, yy) : g.moveTo(xx, yy); }
      g.stroke();
    }
    img(IM.loaf, 0, ly, 640);
    ([["Warm", 1.2, -378], ["by 7am.", 1.45, -196]] as [string, number, number][]).forEach(([s, t0, y]) => {
      const p = eBack(seg(lt, t0, t0 + 0.4)); if (p <= 0) return;
      g.save(); g.translate(0, y); g.scale(lerp(1.7, 1, p), lerp(1.7, 1, p)); g.globalAlpha = clamp(p * 1.4);
      txt(s, 0, 0, 214, 800, C.paper, "center", DISP, 0, 900); g.restore();
    });
    sticker(345, -23, 108, C.amber, "BAKED", "DAILY", C.ink, eBack(seg(lt, 1.9, 2.3)), -0.2 + Math.sin(lt * 1.6) * 0.05);
    tag("HEARTH & RYE BAKERY · LEESBURG", 438, seg(lt, 2.2, 2.7));
  },
  winery(lt) {
    const gr = g.createLinearGradient(0, -500, 0, 500); gr.addColorStop(0, C.ink7); gr.addColorStop(1, C.ink); g.fillStyle = gr; g.fillRect(-500, -500, 1000, 1000);
    g.fillStyle = C.amber; g.beginPath(); g.arc(210, 270 - eOut(seg(lt, 0.2, 1.4)) * 330, 150, 0, 7); g.fill();
    ([[210, 70, 0.0021, 26, C.ink5], [340, 60, 0.0031, 55, C.ink6], [480, 50, 0.0043, 95, C.ink8]] as [number, number, number, number, string][]).forEach(([y0, amp, f, sp, col], n) => {
      g.fillStyle = col; g.beginPath(); g.moveTo(-500, 500);
      for (let x = -500; x <= 520; x += 20) { const u = (x + lt * sp + n * 400) * f; g.lineTo(x, y0 + Math.sin(u * 6.283) * amp + Math.sin(u * 13.2 + n) * amp * 0.4); }
      g.lineTo(500, 500); g.fill();
    });
    const e = eBack(seg(lt, 0.45, 1.1)), gy = 160 + (1 - e) * 1000;
    g.save(); g.translate(0, gy); g.rotate(Math.sin(lt * 1.5) * 0.035); shadow(0, 250, 96, 14, 0.3); img(IM.glass, 0, 0, 212); g.restore();
    const rise = (s: string, y: number, size: number, t0: number) => {
      setFont(800, size, DISP); g.letterSpacing = "-1px"; let tw = g.measureText(s).width; g.letterSpacing = "0px";
      if (tw > 900) { size *= 900 / tw; tw = 900; }
      let x = -tw / 2;
      [...s].forEach((ch, i) => {
        const p = eOut(seg(lt, t0 + i * 0.045, t0 + i * 0.045 + 0.4)); setFont(800, size, DISP);
        const cw = g.measureText(ch).width - 1; g.globalAlpha = p; txt(ch, x, y + (1 - p) * 70, size, 800, C.paper, "left"); x += cw;
      });
      g.globalAlpha = 1;
    };
    rise("Sip the", -385, 190, 1.2); rise("weekend.", -225, 220, 1.5);
    sticker(345, -23, 108, C.paper, "SAT–SUN", "12 TO 6", C.ink, eBack(seg(lt, 2.1, 2.5)), 0.16 + Math.sin(lt * 1.4) * 0.05);
    tag("SUNDIAL & SPARROW CELLARS · HILLSBORO", 438, seg(lt, 2.3, 2.8));
  },
  bike(lt) {
    g.fillStyle = C.ink8; g.fillRect(-500, -500, 1000, 1000);
    g.save(); g.translate(330, 480); const R = 430 * eOut(seg(lt, 0.1, 0.8)); g.rotate(lt * 1.9);
    if (R > 50) {
      g.strokeStyle = C.amber; g.lineWidth = 46; g.beginPath(); g.arc(0, 0, R, 0, 7); g.stroke();
      g.strokeStyle = C.paper; g.lineWidth = 12; g.beginPath(); g.arc(0, 0, R - 40, 0, 7); g.stroke();
      g.strokeStyle = "rgba(241,236,227,.28)"; g.lineWidth = 5;
      for (let i = 0; i < 18; i++) { g.rotate(Math.PI / 9); g.beginPath(); g.moveTo(0, 0); g.lineTo(R - 46, 0); g.stroke(); }
      g.fillStyle = C.ink; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.fill();
    }
    g.restore();
    g.strokeStyle = "rgba(241,236,227,.7)"; g.lineCap = "round";
    for (let i = 0; i < 9; i++) {
      const sp = 900 + rnd(i) * 700, len = 120 + rnd(i + 9) * 240, y = -80 + i * 62, x = 500 + len - ((lt * sp + rnd(i + 3) * 2000) % (1000 + len * 2));
      g.lineWidth = 6 + rnd(i + 5) * 8; g.beginPath(); g.moveTo(x, y); g.lineTo(x - len, y); g.stroke();
    }
    const e = eBack(seg(lt, 0.45, 1.15)), bx = -(1 - e) * 1000; shadow(bx, 382, 300, 22, 0.22); img(IM.bike, bx, 170 - Math.abs(Math.sin(lt * 5)) * 7, 660);
    ([["Roll in.", 1.2, -375, -1], ["Ride out.", 1.5, -205, 1]] as [string, number, number, number][]).forEach(([s, t0, y, dir]) => {
      const p = eOut(seg(lt, t0, t0 + 0.45)); if (p <= 0) return;
      g.save(); g.translate(dir * (1 - p) * 1000, y); g.transform(1, 0, -0.16, 1, 0, 0); txt(s, 0, 0, 220, 800, C.paper, "center", DISP, 0, 880); g.restore();
    });
    const sp = seg(lt, 1.9, 2.5); sticker(345, -23, 112, C.amber, "$60", "TUNE-UP", C.ink, eBack(sp), (1 - eOut(sp)) * -4 - 0.14);
    const k = seg(lt, 2.3, 2.8);
    if (k > 0) { g.globalAlpha = k; g.fillStyle = C.amber; g.beginPath(); g.roundRect(-400, 408, 800, 60, 6); g.fill(); g.globalAlpha = 1; tag("COPPER CRANK CYCLES · PURCELLVILLE", 438, k, C.ink); }
  },
  taco(lt) {
    const gr = g.createLinearGradient(-500, -500, 500, 500); gr.addColorStop(0, C.ink7); gr.addColorStop(1, C.ink); g.fillStyle = gr; g.fillRect(-500, -500, 1000, 1000);
    const cols = [C.amber, C.paper, C.amberHi, C.ink4];
    for (let i = 0; i < 44; i++) {
      const sp = 260 + rnd(i) * 300, x = (rnd(i + 50) - 0.5) * 1000, y = ((lt * sp + rnd(i + 20) * 3000) % 1200) - 600, s = 16 + rnd(i + 7) * 20;
      g.save(); g.translate(x, y); g.rotate(lt * (1 + rnd(i + 2) * 3) + i); g.fillStyle = cols[i % 4]; g.globalAlpha = clamp(lt * 2) * 0.85;
      if (i % 4 === 2) { g.beginPath(); g.ellipse(0, 0, s, s * 0.45, 0, 0, 7); g.fill(); }
      else if (i % 4 === 3) { g.beginPath(); g.arc(0, 0, s, 0, Math.PI); g.fill(); }
      else g.fillRect(-s / 2, -s / 2, s, s);
      g.restore();
    }
    const d = eBounce(seg(lt, 0.45, 1.3)), yy = 180 - (1 - d) * 1000, sq = 1 + Math.max(0, Math.sin(seg(lt, 1.0, 1.4) * Math.PI)) * 0.06;
    shadow(0, 355, 300 * d, 30, 0.32);
    g.save(); g.translate(0, yy); g.rotate(-0.06); g.scale(sq, 1 / sq); img(IM.taco, 0, 0, 660); g.restore();
    const drop = (s: string, y: number, size: number, t0: number, col: string) => {
      setFont(800, size, DISP); let tw = g.measureText(s).width;
      if (tw > 900) { size *= 900 / tw; tw = 900; }
      let x = -tw / 2;
      [...s].forEach((ch, i) => {
        const p = eBounce(seg(lt, t0 + i * 0.06, t0 + i * 0.06 + 0.55)); setFont(800, size, DISP);
        const cw = g.measureText(ch).width; if (p > 0) txt(ch, x, y - (1 - p) * 500, size, 800, col, "left"); x += cw;
      });
    };
    drop("Taco", -380, 250, 1.1, C.amber); drop("Tuesday.", -206, 176, 1.35, C.paper);
    sticker(345, -23, 108, C.paper, "2 FOR", "$7", C.ink, eBack(seg(lt, 2.1, 2.5)), -0.18 + Math.sin(lt * 1.7) * 0.05);
    tag("DOS CALLES TAQUERIA · STERLING", 438, seg(lt, 2.3, 2.8));
  },
};

function ripple(k: number) {
  if (k <= 0 || k >= 1) return;
  g.fillStyle = `rgba(233,162,59,${0.9 * (1 - k)})`; g.beginPath(); g.arc(0, 40, 46 * (1 - k * 0.4), 0, 7); g.fill();
  [0, 0.25].forEach((o) => {
    const kk = clamp(k - o) / (1 - o); if (kk <= 0) return;
    g.strokeStyle = `rgba(233,162,59,${1 - kk})`; g.lineWidth = 14 * (1 - kk) + 3; g.beginPath(); g.arc(0, 40, 40 + eOut(kk) * 330, 0, 7); g.stroke();
  });
}

/** Draw one square post. `tapAt` is the time the tap landed, or null while flat. */
export function drawPost(cv: HTMLCanvasElement, id: SceneId, now: number, tapAt: number | null) {
  const ctx = cv.getContext("2d"); if (!ctx) return; g = ctx;
  const px = cv.width; g.setTransform(px / 1000, 0, 0, px / 1000, px / 2, px / 2);
  const lt = tapAt == null ? -1 : now - tapAt - 0.18;
  if (lt < 0) dull(id); else S[id](lt);
  if (tapAt != null) {
    if (lt >= 0 && lt < 0.35) { g.globalAlpha = 1 - lt / 0.35; dull(id); g.globalAlpha = 1; }
    ripple(seg(now - tapAt, 0, 0.7));
  }
}

/** The four hero-phone posts, in rotation order. */
export const HERO_POSTS: { id: SceneId; name: string; loc: string; cap: string; l0: number; l1: number }[] = [
  { id: "bakery", name: "hearthandrye", loc: "Leesburg, Virginia", cap: "Fresh bread daily. Come by!", l0: 3, l1: 248 },
  { id: "winery", name: "sundialandsparrow", loc: "Hillsboro, Virginia", cap: "Open Sat-Sun 12-6", l0: 5, l1: 191 },
  { id: "bike", name: "coppercrankcycles", loc: "Purcellville, Virginia", cap: "Tune-ups $60, call for details", l0: 2, l1: 163 },
  { id: "taco", name: "doscallestaqueria", loc: "Sterling, Virginia", cap: "Taco Tuesday!! 2 for $7", l0: 4, l1: 312 },
];
