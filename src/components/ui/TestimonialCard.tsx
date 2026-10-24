import type { Testimonial } from "@/types/content";

type TestimonialCardProps = {
  testimonial: Testimonial;
  variant?: "default" | "flip";
};

function QuoteIcon() {
  return (
    <svg aria-hidden="true" className="testimonial-card__mark" viewBox="0 0 32 24">
      <path d="M4 2h7.5v8.6c0 6-2.6 9.9-7.9 11.4l-.9-2.6c3-1.2 4.5-3.4 4.6-6.4H4V2Zm16.5 0H28v8.6c0 6-2.6 9.9-7.9 11.4l-.9-2.6c3-1.2 4.5-3.4 4.6-6.4h-3.3V2Z" />
    </svg>
  );
}

export function TestimonialCard({ testimonial, variant = "default" }: TestimonialCardProps) {
  if (variant === "flip") {
    return (
      <figure
        aria-label={`Testimonial from ${testimonial.name}`}
        className="testimonial-card testimonial-card--flip flip-card"
        tabIndex={0}
      >
        <div className="testimonial-card__inner flip-card__inner">
          <div className="testimonial-card__face testimonial-card__front flip-card__face flip-card__front">
            <QuoteIcon />
            <blockquote>
              <p>{testimonial.quote}</p>
            </blockquote>
            <span className="testimonial-card__flip-hint">Meet the leader</span>
          </div>
          <figcaption className="testimonial-card__face testimonial-card__back flip-card__face flip-card__back">
            <span className="flip-card__eyebrow">Leadership perspective</span>
            <strong>{testimonial.name}</strong>
            <span>
              {testimonial.role} | {testimonial.organization} | {testimonial.region}
            </span>
          </figcaption>
        </div>
      </figure>
    );
  }

  return (
    <figure className="testimonial-card">
      <QuoteIcon />
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>
        <strong>{testimonial.name}</strong>
        <span>
          {testimonial.role} | {testimonial.organization} | {testimonial.region}
        </span>
      </figcaption>
    </figure>
  );
}
