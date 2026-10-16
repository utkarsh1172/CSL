import { LeadForm } from "@/components/forms/LeadForm";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function FranchiseSection() {
  return (
    <section aria-labelledby="franchise-heading" className="contact-franchise">
      <div className="section-shell">
        <div className="contact-franchise__card" data-reveal="zoom">
          <div className="contact-franchise__copy">
            <SectionHeading
              accent="Multiple Benefits"
              description="We help experienced professionals understand how their 25+ years of knowledge, experience and expertise can create value beyond their existing corporate designation."
              eyebrow="Franchise"
              id="franchise-heading"
              title="One Franchise"
            />
          </div>

          <div className="contact-franchise__form" data-reveal="left" data-reveal-delay="3">
            <h3>Contact Us</h3>
            <LeadForm
              className="lead-form lead-form--dark"
              idPrefix="franchise"
              submitLabel="Contact Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
