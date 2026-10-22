import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExpandableList } from "@/components/ui/ExpandableList";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types/content";
import type { HomePageContent } from "@/types/home";

type TestimonialsSectionProps = {
  content: HomePageContent["testimonials"];
  testimonials: Testimonial[];
};

export function TestimonialsSection({ content, testimonials }: TestimonialsSectionProps) {
  const { heading } = content;

  return (
    <section
      aria-labelledby="home-testimonials-heading"
      className="page-section home-testimonials"
      id="testimonials"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="home-testimonials-heading"
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
