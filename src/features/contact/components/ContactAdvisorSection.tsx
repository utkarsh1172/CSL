import Link from "next/link";

import { LeadForm } from "@/components/forms/LeadForm";
import { LeadCard } from "@/components/sections/LeadCard";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ContactAdvisorSection() {
  return (
    <section aria-labelledby="two-systems-heading" className="contact-advisor" id="talk-to-advisor">
      <div className="section-shell contact-advisor__inner">
        <div className="contact-advisor__copy">
          <SectionHeading
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

        <LeadCard accent="AI Leadership program" headingId="contact-advisor-heading" title="Explore the">
          <LeadForm
            className="lead-form lead-form--light"
            idPrefix="contact-advisor"
            submitLabel="Talk to an Advisor"
          />
        </LeadCard>
      </div>
    </section>
  );
}
