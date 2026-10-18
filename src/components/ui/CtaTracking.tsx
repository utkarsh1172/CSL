"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

// Every call to action already carries data-boom-click; data-track can name any other element.
const trackedSelector = "[data-track], [data-boom-click]";

/** Where on the page a click happened: the nearest section id, else the header or footer. */
function sectionOf(element: Element) {
  const section = element.closest("section[id], [id='talk-to-advisor']");
  if (section) return section.id;
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  return element.closest("section")?.getAttribute("aria-labelledby") ?? "page";
}

/** Delegated listener: records a cta_click for every tracked button or link that is pressed. */
export function CtaTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest<HTMLElement>(trackedSelector);
      // Form submits are measured as form events, not CTA clicks.
      if (!trigger || trigger.matches('button[type="submit"]')) return;

      trackEvent({
        name: "cta_click",
        label: (trigger.dataset.track ?? trigger.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 80),
        section: sectionOf(trigger),
        href: trigger.getAttribute("href") ?? undefined,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
