import { ExpandableList } from "@/components/ui/ExpandableList";
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
  /** Show this many testimonials, with a "Show More" button that opens the rest in place. */
  initialCount?: number;
};

/** Shared testimonial section used across marketing and program pages. */
export function TestimonialsSection({
  heading,
  headingId,
  testimonials,
  className = "page-section page-section--ruled",
  contained = true,
  showSeeMore = true,
  initialCount,
}: TestimonialsSectionProps) {
  const cards = testimonials.map((testimonial, index) => ({
    key: `${testimonial.name}-${index}`,
    node: <TestimonialCard testimonial={testimonial} variant="flip" />,
  }));

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
      {initialCount ? (
        <ExpandableList
          className="testimonial-grid"
          initialCount={initialCount}
          items={cards}
          lessLabel="Show Less"
          moreLabel="Show More"
          withArrow
        />
      ) : (
        <ul className="testimonial-grid" data-reveal-children="">
          {cards.map((card) => (
            <li key={card.key}>{card.node}</li>
          ))}
        </ul>
      )}
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
