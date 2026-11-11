"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_PRIMARY, CALENDLY_30MIN } from "@/lib/data";
import { openCalendly } from "@/lib/calendly";

export default function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname === href + "/" || pathname.startsWith(href + "/") ||
    (href === "/services" && (pathname.startsWith("/work-with-us") || pathname.startsWith("/enhancement"))) ||
    (href === "/portfolio" && pathname.startsWith("/portfolio"));

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Arperture home">
          <Image src="/assets/arperture-mark.webp" alt="" width={28} height={28} priority />
          <span className="brand-word">Arperture</span>
        </Link>

        <ul className="nav-links">
          {NAV_PRIMARY.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link href="/contact" className="nav-link nav-contact" aria-current={isActive("/contact") ? "page" : undefined}>
            Contact
          </Link>
          <a href={CALENDLY_30MIN} onClick={(e) => openCalendly(CALENDLY_30MIN, e)} className="btn btn-primary btn-nav">
            Book a call
          </a>
          <div ref={drawerRef} className="nav-compact">
            <button
              type="button"
              className="nav-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true" className={open ? "burger is-open" : "burger"} />
            </button>
            {open && (
              <div id="nav-drawer" className="nav-drawer">
                {[...NAV_PRIMARY, { label: "Contact", href: "/contact" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="drawer-link"
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
