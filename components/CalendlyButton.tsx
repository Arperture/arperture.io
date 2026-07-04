"use client";

import { openCalendly } from "@/lib/calendly";

export default function CalendlyButton({
  url,
  className,
  style,
  children,
}: {
  url: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <button onClick={(e) => openCalendly(url, e)} className={className} style={style}>
      {children}
    </button>
  );
}
