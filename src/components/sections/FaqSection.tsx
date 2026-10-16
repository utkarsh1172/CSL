"use client";

import { useState } from "react";

import type { FaqItem } from "@/types/content";

import { SectionHeading } from "./SectionHeading";

type FaqSectionProps = {
  faqs: FaqItem[];
  /** Prefix for the heading id and the accordion group name, so the section stays unique. */
  idPrefix: string;
  eyebrow?: string;
  title?: string;
  accent?: string;
  align?: "center" | "start";
  /** Questions shown before "View More". */
  initialCount?: number;
  className?: string;
};

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 8">
      <path d="M1 1.25 6 6.25l5-5" />
    </svg>
  );
}

/** Accordion of questions; one answer opens at a time and the rest wait behind "View More". */
export function FaqSection({
  faqs,
  idPrefix,
  eyebrow = "Frequently Asked Questions (FAQs):",
  title = "About",
  accent = "Canada School of Leadership (CSL)",
  align = "center",
  initialCount = 5,
  className,
}: FaqSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialCount);
  const headingId = `${idPrefix}-faq-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={`faq-section faq-section--${align}${className ? ` ${className}` : ""}`}
      id="faqs"
    >
      <div className="section-shell faq-section__inner">
        <SectionHeading accent={accent} align={align} eyebrow={eyebrow} id={headingId} title={title} />

        {/* ScrollReveal staggers each item in, including ones added by "View More". */}
        <div className="faq-section__list" data-reveal-children="">
          {visibleFaqs.map((faq, index) => (
            <details key={faq.question} name={`${idPrefix}-faq`} open={index === 0}>
              <summary>
                {faq.question}
                <ChevronIcon />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

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
