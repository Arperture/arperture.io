"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ytEmbed, type Clip, type Project } from "@/lib/data";

export const clipSrc = (id: string) => `/media/wall/${id}.mp4`;
export const clipPoster = (id: string) => `/media/wall/${id}.jpg`;
export const projectPoster = (p: Project) => (p.clips[0] ? clipPoster(p.clips[0].id) : p.still || "");

// Plays the full film (YouTube, privacy-enhanced) when one exists; otherwise
// the loop itself, larger and with controls.
export default function Lightbox({
  project, clip, onClose,
}: { project: Project; clip?: Clip; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prev?.focus?.();
    };
  }, [onClose]);

  const c = clip || project.clips[0];
  const film = project.youtubeId;
  const shape = film ? "h" : c?.shape || "h";

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={project.title}>
      <button type="button" className="lb-scrim" aria-label="Close" tabIndex={-1} onClick={onClose} />
      <div className="lb-body">
        <div className={`lb-media lbm-${shape}`}>
          {film ? (
            <iframe
              src={ytEmbed(film, true)}
              title={project.title}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : c ? (
            <video src={clipSrc(c.id)} poster={clipPoster(c.id)} autoPlay muted loop playsInline controls />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.still} alt="" />
          )}
        </div>
        <div className="lb-meta">
          <div className="lb-text">
            <p className="lb-title">{project.title}</p>
            <p className="lb-label">{project.label} · {project.year}</p>
            {project.blurb && <p className="lb-blurb">{project.blurb}</p>}
          </div>
          <div className="lb-actions">
            {project.caseSlug && (
              <Link href={`/portfolio/${project.caseSlug}/`} className="btn btn-line btn-sm">
                Read the case study
              </Link>
            )}
            {!film && (
              <Link href="/contact/" className="btn btn-line btn-sm">
                Start a project like this
              </Link>
            )}
            <button ref={closeRef} type="button" className="btn btn-line btn-sm" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
