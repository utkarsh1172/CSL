import { SeeMoreStoriesLink } from "@/components/ui/SeeMoreStoriesLink";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { HeadingContent, Testimonial } from "@/types/content";

import { SectionHeading } from "./SectionHeading";

type TestimonialsSectionProps = {
  heading: HeadingContent;
  headingId: string;
  testimonials: Testimonial[];
  className?: string;
  contained?: boolean;
  showSeeMore?: boolean;
};

/** Shared testimonial section used across marketing and program pages. */
export function TestimonialsSection({
  heading,
  headingId,
  testimonials,
  className = "page-section page-section--ruled",
  contained = true,
  showSeeMore = true,
}: TestimonialsSectionProps) {
  const content = (
    <>
      <SectionHeading
        accent={heading.accent}
        align="start"
        className="section-heading--large section-heading--light"
        description={heading.description}
        eyebrow={heading.eyebrow}
        id={headingId}
        title={heading.title}
      />
      <ul className="testimonial-grid" data-reveal-children="">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name}>
            <TestimonialCard testimonial={testimonial} variant="flip" />
          </li>
        ))}
      </ul>
      {showSeeMore ? <SeeMoreStoriesLink /> : null}
    </>
  );

  return (
    <section
      aria-labelledby={headingId}
      className={`testimonials-section ${className}`}
      id="testimonials"
    >
      {contained ? <div className="section-shell">{content}</div> : content}
    </section>
  );
}
