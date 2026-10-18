import type { Testimonial } from "@/types/content";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function QuoteIcon() {
  return (
    <svg aria-hidden="true" className="testimonial-card__mark" viewBox="0 0 32 24">
      <path d="M4 2h7.5v8.6c0 6-2.6 9.9-7.9 11.4l-.9-2.6c3-1.2 4.5-3.4 4.6-6.4H4V2Zm16.5 0H28v8.6c0 6-2.6 9.9-7.9 11.4l-.9-2.6c3-1.2 4.5-3.4 4.6-6.4h-3.3V2Z" />
    </svg>
  );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
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
