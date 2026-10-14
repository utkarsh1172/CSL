import Image from "next/image";
import Link from "next/link";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import { contactDetails, contactHero } from "@/content/pages/contact";

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3.5 9.2 12 3.8l8.5 5.4v9.3a1.7 1.7 0 0 1-1.7 1.7H5.2a1.7 1.7 0 0 1-1.7-1.7V9.2Z" />
      <path d="m3.8 9.4 8.2 5.4 8.2-5.4" />
    </svg>
  );
}

export function ContactHero() {
  return (
    <section aria-labelledby="contact-heading" className="contact-hero">
      <div aria-hidden="true" className="contact-hero__visual">
        <Image
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, 56vw"
          src={contactHero.imageSrc}
        />
      </div>

      <div className="contact-hero__inner">
        <div className="contact-hero__content">
          <a
            className="contact-hero__email"
            data-boom-click=""
            data-reveal="eyebrow"
            href={`mailto:${contactDetails.email}`}
          >
            <MailIcon />
            <span>{contactDetails.email}</span>
          </a>

          <h1 data-reveal="lines" id="contact-heading">
            <span className="contact-hero__line">
              <RevealLines text={contactHero.title} />
            </span>{" "}
            {/* One rising unit, so the gradient sweeps across the whole phrase rather than per word. */}
            <span className="contact-hero__line">
              <span className="reveal-word contact-hero__gradient-text">{contactHero.accent}</span>
            </span>
          </h1>

          <p className="contact-hero__summary" data-reveal="rise">
            {contactHero.summary}
          </p>

          <div className="contact-hero__actions" data-reveal="rise">
            <p className="contact-hero__rating">
              *Rated <BoomCounter value={contactHero.rating} />
            </p>
            <div>
              <Link className="button button--primary" data-boom-click="" href="/programs">
                Start Your Journey
              </Link>
              <a className="button button--light" data-boom-click="" href="#talk-to-advisor">
                Schedule a Free Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
