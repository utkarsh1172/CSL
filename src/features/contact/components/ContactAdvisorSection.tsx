import Link from "next/link";

import { RevealLines } from "@/components/ui/RevealLines";

import { ContactSectionHeading } from "./ContactSectionHeading";
import { LeadForm } from "./LeadForm";

export function ContactAdvisorSection() {
  return (
    <section aria-labelledby="two-systems-heading" className="contact-advisor" id="talk-to-advisor">
      <div className="contact-shell contact-advisor__inner">
        <div className="contact-advisor__copy">
          <ContactSectionHeading
            accent="One works."
            align="start"
            eyebrow="Get in Touch"
            id="two-systems-heading"
            title="Two systems."
          />
          <p data-reveal="rise" data-reveal-delay="2">
            Whether you’re an individual learner looking to upskill or a company seeking corporate
            training, we’re just a message away.
          </p>
          <p data-reveal="rise" data-reveal-delay="3">
            Fill out the form below or reach out through your preferred channel — our team will
            respond promptly.
          </p>
          <div data-reveal="rise" data-reveal-delay="4">
            <Link className="button button--primary" data-boom-click="" href="/programs">
              Start Your Journey
            </Link>
          </div>
        </div>

        <aside
          aria-labelledby="contact-advisor-heading"
          className="contact-advisor__card"
          data-reveal="card"
          data-reveal-delay="2"
        >
          <p className="contact-advisor__eyebrow">Get Started</p>
          <h2 data-reveal="lines" id="contact-advisor-heading">
            <RevealLines text="Explore the" />{" "}
            <span className="contact-heading__accent">
              <RevealLines text="AI Leadership program" />
            </span>
          </h2>
          <LeadForm
            className="lead-form lead-form--light"
            idPrefix="contact-advisor"
            submitLabel="Talk to an Advisor"
          />
        </aside>
      </div>
    </section>
  );
}
