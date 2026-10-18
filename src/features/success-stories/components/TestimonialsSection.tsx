import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExpandableList } from "@/components/ui/ExpandableList";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { SuccessStoriesContent } from "@/types/success-story";

type TestimonialsSectionProps = {
  testimonials: SuccessStoriesContent["testimonials"];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const { heading } = testimonials;

  return (
    <section aria-labelledby="testimonials-heading" className="success-block" id="testimonials">
      <SectionHeading
        accent={heading.accent}
        align="start"
        className="section-heading--large section-heading--light"
        description={heading.description}
        eyebrow={heading.eyebrow}
        id="testimonials-heading"
        title={heading.title}
      />
      <ExpandableList
        className="testimonial-grid"
        items={testimonials.items.map((testimonial) => ({
          key: testimonial.name,
          node: <TestimonialCard testimonial={testimonial} />,
        }))}
      />
    </section>
  );
}
