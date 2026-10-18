/**
 * Conversion tracking. Events go to `window.dataLayer`, which Google Tag Manager (or GA4 through
 * GTM) reads; with no container configured they simply queue, so the site works either way.
 * Event names follow the CRO funnel: CTA click → form start → lead submitted.
 */
export type AnalyticsEvent =
  | {
      name: "cta_click";
      /** Visible button text, or its `data-track` label. */
      label: string;
      /** Id of the page section the button sits in, or "header" / "footer". */
      section: string;
      href?: string;
    }
  | { name: "form_start"; form: string }
  | { name: "lead_submit"; form: string; page: string }
  | { name: "lead_error"; form: string; reason: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  const { name, ...params } = event;
  (window.dataLayer ??= []).push({ event: name, ...params });

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", name, params);
  }
}
