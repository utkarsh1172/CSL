"use client";

import { useState } from "react";

import type { ContactFaq as ContactFaqItem } from "@/content/pages/contact";

import { ContactSectionHeading } from "./ContactSectionHeading";

const initialCount = 5;

type ContactFaqProps = {
  faqs: ContactFaqItem[];
};

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 8">
      <path d="M1 1.25 6 6.25l5-5" />
    </svg>
  );
}

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
        <div className="contact-faq__list" data-reveal-children="">
          {visibleFaqs.map((faq, index) => (
            <details key={faq.question} name="contact-faq" open={index === 0}>
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
