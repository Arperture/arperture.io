"use client";

import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export default function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  // SSR default is light (matches data-theme="light" on <html>); synced to the
  // stored choice on mount, so first client render matches the server (no mismatch).
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={label}
      title={label}
      className="theme-toggle"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: showLabel ? 10 : 0,
        width: showLabel ? "100%" : 40,
        height: showLabel ? "auto" : 40,
        background: "none",
        border: "1px solid var(--border-strong)",
        borderRadius: showLabel ? 999 : 10,
        color: "var(--text)",
        cursor: "pointer",
        padding: showLabel ? "14px 20px" : 0,
        marginTop: showLabel ? 16 : 0,
        fontSize: "1rem",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
      }}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      {showLabel && <span>{isDark ? "Light mode" : "Dark mode"}</span>}
    </button>
  );
}
