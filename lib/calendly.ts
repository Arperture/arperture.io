// Opens the Calendly popup widget (script loaded in the root layout).
// Falls back to a new tab if the widget script hasn't loaded yet.
declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export function openCalendly(url: string, e?: { preventDefault: () => void }) {
  if (e) e.preventDefault();
  if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
  } else if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener");
  }
}
