"use client";

import { useState } from "react";

import { FaqAccordion } from "@/components/ui/FaqAccordion";
import type { FaqItem } from "@/types/content";

import { SectionHeading } from "./SectionHeading";

type FaqSectionProps = {
  faqs: FaqItem[];
  /** Prefix for the heading id, so the section stays unique on the page. */
  idPrefix: string;
  eyebrow?: string;
  title?: string;
  accent?: string;
  align?: "center" | "start";
  /** Questions shown before "View More". */
  initialCount?: number;
  /** Anchor id for the section; pages with two FAQ lists give the second its own. */
  sectionId?: string;
  className?: string;
};

/** Accordion of questions; one answer opens at a time and the rest wait behind "View More". */
export function FaqSection({
  faqs,
  idPrefix,
  eyebrow = "Frequently Asked Questions (FAQs):",
  title = "About",
  accent = "Canada School of Leadership (CSL)",
  align = "center",
  initialCount = 5,
  sectionId = "faqs",
  className,
}: FaqSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialCount);
  const headingId = `${idPrefix}-faq-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={`faq-section faq-section--${align}${className ? ` ${className}` : ""}`}
      id={sectionId}
    >
      <div className="section-shell faq-section__inner">
        <SectionHeading accent={accent} align={align} eyebrow={eyebrow} id={headingId} title={title} />

        {/* ScrollReveal staggers each item in, including ones added by "View More". */}
        <FaqAccordion className="faq-section__list" data-reveal-children="" items={visibleFaqs} />

        {faqs.length > initialCount ? (
          <button
            aria-expanded={showAll}
            className="faq-section__more"
            data-boom-click=""
            onClick={() => setShowAll((current) => !current)}
            type="button"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        ) : null}
      </div>
    </section>
  );
}
