"use client";

import { openCalendly } from "@/lib/calendly";
import { wbButtonStyle, type ButtonVariant, type ButtonSize } from "./Workbench";

// Renders a WButton-styled control that opens the Calendly popup —
// a thin client boundary so the homepage (a server component) can still
// use it without passing a function across the server/client split.
export default function CalendlyWButton({
  url, variant = "primary", size = "md", children, style,
}: {
  url: string; variant?: ButtonVariant; size?: ButtonSize; children: React.ReactNode; style?: React.CSSProperties;
}) {
  return (
    <button onClick={(e) => openCalendly(url, e)} style={{ ...wbButtonStyle(variant, size), ...style }}>
      {children}
    </button>
  );
}
