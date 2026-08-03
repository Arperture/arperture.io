"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_PRIMARY, SERVICES_MENU, SOCIAL_LINKS, CALENDLY_30MIN } from "@/lib/data";
import { openCalendly } from "@/lib/calendly";
import { SocialIcon, ChevronDown } from "./icons";
import { Wordmark, WButton } from "./Workbench";

export default function Nav() {
  const pathname = usePathname() || "/";
  const [servicesOpen, setServicesOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // close menus on navigation
  useEffect(() => {
    setServicesOpen(false);
    setSocialsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // outside-click close
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (servicesOpen && servicesRef.current && !servicesRef.current.contains(t)) setServicesOpen(false);
      if (socialsOpen && socialsRef.current && !socialsRef.current.contains(t)) setSocialsOpen(false);
      if (mobileOpen && mobileRef.current && !mobileRef.current.contains(t)) setMobileOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [servicesOpen, socialsOpen, mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };
  const servicesActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/small-business") ||
    pathname.startsWith("/enhancement");

  const linkStyle = (active: boolean) => ({
    color: active ? "var(--text)" : "var(--text-muted)",
    fontWeight: active ? 600 : 500,
  });

  return (
    <nav className="nav" aria-label="Primary">
      <div
        style={{
          maxWidth: 1180, margin: "0 auto", padding: "14px 24px", display: "flex",
          alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap",
        }}
      >
        <Link href="/" className="brand" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Wordmark size={21} />
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <ul className="nav-desktop" style={{ listStyle: "none", margin: 0, padding: 0, gap: 28 }}>
          {NAV_PRIMARY.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link" style={linkStyle(isActive(item.href))}>
                {item.label}
              </Link>
            </li>
          ))}
          <li ref={servicesRef} style={{ position: "relative" }}>
            <button
              onClick={() => { setServicesOpen((v) => !v); setSocialsOpen(false); }}
              className="nav-link"
              style={{ display: "flex", alignItems: "center", gap: 6, ...linkStyle(servicesActive) }}
            >
              Services
              <span style={{ display: "flex", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .15s" }}>
                <ChevronDown />
              </span>
            </button>
            {servicesOpen && (
              <div style={dropdownStyle("left")}>
                {SERVICES_MENU.map((sv) => (
                  <Link key={sv.href} href={sv.href} className="menu-item" style={menuItemStyle}>
                    {sv.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        <div className="nav-desktop-right">
          <div ref={socialsRef} style={{ position: "relative" }}>
            <button
              onClick={() => { setSocialsOpen((v) => !v); setServicesOpen(false); }}
              className="nav-link"
              style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)" }}
            >
              Socials
              <span style={{ display: "flex", transform: socialsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .15s" }}>
                <ChevronDown />
              </span>
            </button>
            {socialsOpen && (
              <div style={dropdownStyle("right")}>
                {SOCIAL_LINKS.map((soc) => (
                  <a key={soc.key} href={soc.url} target="_blank" rel="noopener noreferrer" className="menu-item" style={socialItemStyle}>
                    <span style={{ display: "flex", color: "var(--ember)", flexShrink: 0 }}>
                      <SocialIcon name={soc.key} />
                    </span>
                    {soc.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <WButton variant="primary" size="sm" onClick={(e) => openCalendly(CALENDLY_30MIN, e)}>
            Book a Call
          </WButton>
        </div>

        {/* ---------- MOBILE NAV ---------- */}
        <div ref={mobileRef} className="nav-compact" style={{ position: "relative" }}>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44,
              background: "none", border: "1px solid var(--border-strong)", borderRadius: 10, cursor: "pointer", padding: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
          {mobileOpen && (
            <div
              style={{
                position: "fixed", top: 64, left: 0, width: "100%", height: "calc(100vh - 64px)", zIndex: 60,
                background: "var(--bg)", borderTop: "1px solid var(--border)", overflowY: "auto",
                padding: "8px 24px 32px", boxSizing: "border-box",
              }}
            >
              {NAV_PRIMARY.map((item) => (
                <Link key={item.href} href={item.href} style={{ ...mobileLinkStyle, ...linkStyle(isActive(item.href)) }}>
                  {item.label}
                </Link>
              ))}

              <div style={mobileSectionLabel}>Services</div>
              {SERVICES_MENU.map((sv) => (
                <Link key={sv.href} href={sv.href} style={{ ...mobileLinkStyle, paddingLeft: 12, fontSize: "1rem", color: "var(--text-muted)" }}>
                  {sv.label}
                </Link>
              ))}

              <div style={mobileSectionLabel}>Socials</div>
              {SOCIAL_LINKS.map((soc) => (
                <a key={soc.key} href={soc.url} target="_blank" rel="noopener noreferrer" style={mobileSocialStyle}>
                  <span style={{ display: "flex", color: "var(--ember)", flexShrink: 0 }}>
                    <SocialIcon name={soc.key} />
                  </span>
                  {soc.label}
                </a>
              ))}

              <div style={{ marginTop: 24 }}>
                <WButton variant="primary" size="lg" onClick={(e) => openCalendly(CALENDLY_30MIN, e)} style={{ width: "100%" }}>
                  Book a Call
                </WButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const dropdownStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute", top: "calc(100% + 14px)", [side]: 0, minWidth: 190,
  background: "var(--surface-2)", border: "1px solid var(--border-strong)", borderRadius: 10,
  padding: 8, boxShadow: "var(--shadow-lg)", display: "flex", flexDirection: "column", gap: 2, zIndex: 60,
});

const menuItemStyle: React.CSSProperties = {
  display: "block", width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: 6,
  color: "var(--text)", textDecoration: "none", background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem",
};

const socialItemStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 6,
  color: "var(--text)", textDecoration: "none", fontSize: "0.9rem",
};

const mobileLinkStyle: React.CSSProperties = {
  display: "block", width: "100%", textAlign: "left", background: "none", border: "none",
  borderBottom: "1px solid var(--border)", cursor: "pointer", padding: "18px 0", fontSize: "1.1rem",
  color: "var(--text-muted)", textDecoration: "none",
};

const mobileSectionLabel: React.CSSProperties = {
  padding: "18px 0 6px", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em",
  textTransform: "uppercase", color: "var(--text-faint)",
};

const mobileSocialStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 12, padding: "14px 0 14px 12px",
  borderBottom: "1px solid var(--border)", color: "var(--text-muted)", textDecoration: "none", fontSize: "1rem",
};
