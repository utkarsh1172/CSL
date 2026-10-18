import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExpandableList } from "@/components/ui/ExpandableList";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types/content";
import type { Program } from "@/types/program";

type TestimonialsSectionProps = {
  content: Program["testimonials"];
  testimonials: Testimonial[];
};

export function TestimonialsSection({ content, testimonials }: TestimonialsSectionProps) {
  const { heading } = content;

  return (
    <section
      aria-labelledby="program-testimonials-heading"
      className="page-section page-section--ruled program-testimonials"
      id="testimonials"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="program-testimonials-heading"
          title={heading.title}
        />
        <ExpandableList
          className="testimonial-grid"
          items={testimonials.map((testimonial) => ({
            key: testimonial.name,
            node: <TestimonialCard testimonial={testimonial} />,
          }))}
          moreLabel="View More"
          withArrow
        />
      </div>
    </section>
  );
}
