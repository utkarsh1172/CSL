"use client";

import { useState } from "react";

import { FaqAccordion } from "@/components/ui/FaqAccordion";
import type { ContactFaq as ContactFaqItem } from "@/content/pages/contact";

import { ContactSectionHeading } from "./ContactSectionHeading";

const initialCount = 5;

type ContactFaqProps = {
  faqs: ContactFaqItem[];
};

export function ContactFaq({ faqs }: ContactFaqProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialCount);

  return (
    <section aria-labelledby="contact-faq-heading" className="contact-faq" id="faqs">
      <div className="contact-shell contact-faq__inner">
        <ContactSectionHeading
          accent="Canada School of Leadership (CSL)"
          eyebrow="Frequently Asked Questions (FAQs):"
          id="contact-faq-heading"
          title="About"
        />

        {/* ScrollReveal staggers each item in, including ones added by "View More". */}
        <FaqAccordion className="contact-faq__list" data-reveal-children="" items={visibleFaqs} />

        {faqs.length > initialCount ? (
          <button
            aria-expanded={showAll}
            className="contact-faq__more"
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
