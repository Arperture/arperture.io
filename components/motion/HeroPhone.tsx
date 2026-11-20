"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_POSTS, eOut, lerp, seg } from "@/lib/motion-posts";
import { nowSec, prefersReducedMotion, subscribeFrame } from "./loop";
import { useMotionCanvas, type PostState } from "./useMotionCanvas";

const FLAT = 1.6; // seconds a post sits flat before the tap
const LIVE = 5.4; // seconds it plays before the next post

// The hero demo: a phone that cycles four flat posts, taps each one, and lets
// it play. Tapping the post triggers it early.
export default function HeroPhone() {
  const [i, setI] = useState(0);
  const [live, setLive] = useState(false);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const likesRef = useRef<HTMLSpanElement>(null);
  const tcRef = useRef<HTMLSpanElement>(null);
  const state = useRef<PostState>({ scene: HERO_POSTS[0].id, tapAt: null });
  const cycle = useRef({ i: 0, start: 0 });

  useMotionCanvas(cvRef, state);

  const tap = (now: number) => {
    if (state.current.tapAt != null) return;
    state.current.tapAt = now;
    setLive(true);
  };

  useEffect(() => {
    if (prefersReducedMotion()) {
      state.current.tapAt = 0;
      setLive(true);
      if (likesRef.current) likesRef.current.textContent = `${HERO_POSTS[0].l1} likes`;
      return;
    }
    cycle.current.start = nowSec();
    let lastY = window.scrollY, vel = 0;
    return subscribeFrame((now, dt) => {
      const c = cycle.current, st = state.current, post = HERO_POSTS[c.i];
      if (st.tapAt == null && now - c.start > FLAT) tap(now);
      if (st.tapAt != null) {
        const k = eOut(seg(now - st.tapAt, 1.2, 2.6));
        if (likesRef.current) likesRef.current.textContent = `${Math.round(lerp(post.l0, post.l1, k))} likes`;
        if (now - st.tapAt > LIVE) {
          c.i = (c.i + 1) % HERO_POSTS.length; c.start = now;
          state.current = { scene: HERO_POSTS[c.i].id, tapAt: null };
          setI(c.i); setLive(false);
        }
      }
      if (tcRef.current) {
        const f = Math.floor(now * 24);
        tcRef.current.textContent = [Math.floor(f / 86400), Math.floor(f / 1440) % 60, Math.floor(f / 24) % 60, f % 24]
          .map((v) => String(v).padStart(2, "0")).join(":");
      }
      const y = window.scrollY;
      vel = lerp(vel, (y - lastY) / Math.max(dt, 0.001), 0.12); lastY = y;
      if (phoneRef.current) phoneRef.current.style.transform = `rotate(${Math.max(-3, Math.min(3, vel * 0.0016)) - 2}deg)`;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const post = HERO_POSTS[i];
  return (
    <div className="fim-phone-wrap">
      <div className={`fim-phone${live ? " is-live" : ""}`} ref={phoneRef}>
        <div className="fim-screen">
          <div className="fim-appbar" aria-hidden="true">
            <span>mainstreet</span>
            <span className="fim-tc" ref={tcRef}>00:00:00:00</span>
          </div>
          <div className="fim-post-head">
            <span className="fim-avatar" aria-hidden="true">{post.name[0].toUpperCase()}</span>
            <span>
              <span className="fim-handle">{post.name}</span>
              <span className="fim-loc">{post.loc}</span>
            </span>
          </div>
          <button
            type="button" className="fim-post" aria-label="Bring this sample post to life"
            onClick={() => tap(nowSec())}
          >
            <canvas ref={cvRef} width={680} height={680} aria-hidden="true" />
          </button>
          <div className="fim-post-foot">
            <span className="fim-likes">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.9c0 5.6-7.5 10-7.5 10z" /></svg>
              <span ref={likesRef}>{post.l0} likes</span>
            </span>
            <span className="fim-cap"><b>{post.name}</b> {post.cap}</span>
            <span className="fim-state">{live ? "In motion" : "Static post"}</span>
          </div>
        </div>
      </div>
      <p className="fim-hint">Tap the post. These are sample posts for made-up shops.</p>
    </div>
  );
}
