"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "[data-reveal]";

// Tags each `.reveal-word` with the rendered line it sits on, so lines can rise in sequence.
function assignRevealLines(element: HTMLElement) {
  let line = -1;
  let lineTop = Number.NaN;

  element.querySelectorAll<HTMLElement>(".reveal-word").forEach((word) => {
    if (Number.isNaN(lineTop) || Math.abs(word.offsetTop - lineTop) > 2) {
      line += 1;
      lineTop = word.offsetTop;
    }

    word.style.setProperty("--line", String(line));
  });
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    const revealImmediately = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        element.classList.add("is-revealed");
      });
    };

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      root.classList.remove("motion-ready");
      revealImmediately(document);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          if (entry.target instanceof HTMLElement && entry.target.dataset.reveal === "lines") {
            assignRevealLines(entry.target);
          }

          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0,
      },
    );

    const observe = (root: ParentNode) => {
      const prepareGroup = (group: HTMLElement) => {
        Array.from(group.children).forEach((child, index) => {
          if (child instanceof HTMLElement && !child.hasAttribute("data-reveal")) {
            child.dataset.reveal = "up";
            child.dataset.revealDelay = String(Math.min(index % 4, 3));
          }
        });
      };

      if (root instanceof HTMLElement && root.matches("[data-reveal-children]")) {
        prepareGroup(root);
      }
      root.querySelectorAll<HTMLElement>("[data-reveal-children]").forEach(prepareGroup);

      root.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        if (!element.classList.contains("is-revealed")) {
          observer.observe(element);
        }
      });
    };

    observe(document);
    root.setAttribute("data-motion-active", "");

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target instanceof HTMLElement) {
          const group = mutation.target.closest<HTMLElement>("[data-reveal-children]");
          if (group) observe(group);
        }

        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches(revealSelector) && !node.classList.contains("is-revealed")) {
            observer.observe(node);
          }

          observe(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.removeAttribute("data-motion-active");
    };
  }, [pathname]);

  return null;
}
