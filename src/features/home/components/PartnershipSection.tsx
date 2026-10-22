import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomePartner, HomePartnership } from "@/types/home";

type PartnershipSectionProps = {
  partnership: HomePartnership;
};

// Four beads on the dotted orbit (radius 44 in a 100-unit box), on the diagonals.
const orbitDots = [45, 135, 225, 315].map((angle) => {
  const radians = (angle * Math.PI) / 180;
  const round = (value: number) => Math.round(value * 100) / 100;

  return { x: round(50 + 44 * Math.cos(radians)), y: round(50 + 44 * Math.sin(radians)) };
});

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="partner-card__check" viewBox="0 0 12 12">
      <path d="m2.2 6.4 2.5 2.5 5.1-5.6" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3.2-3.2a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3.2 3.2a4.5 4.5 0 0 0 6.4 6.4l1-1" />
    </svg>
  );
}

/** Typographic stand-in for a partner logo: an oversized initial beside the name on two lines. */
function PartnerWordmark({ name }: { name: string }) {
  const [first, ...rest] = name.split(" ");

  return (
    <span className="partner-wordmark">
      <span aria-hidden="true" className="partner-wordmark__initial">
        {first.charAt(0).toUpperCase()}
      </span>
      <span aria-hidden="true" className="partner-wordmark__name">
        <span>{first.slice(1)}</span>
        <span>{rest.join(" ")}</span>
      </span>
      <span className="sr-only">{name}</span>
    </span>
  );
}

function PartnerCard({ partner, reveal }: { partner: HomePartner; reveal: "left" | "right" }) {
  return (
    <div className="partner-card" data-reveal={reveal} data-reveal-delay="2">
      <h3 className="partner-card__brand">
        {partner.logoSrc ? (
          <Image alt={partner.name} height={240} src={partner.logoSrc} unoptimized width={693} />
        ) : (
          <PartnerWordmark name={partner.name} />
        )}
      </h3>
      <p className="partner-card__title">{partner.title}</p>
      <ul className="partner-card__points">
        {partner.points.map((point) => (
          <li key={point}>
            <CheckIcon />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The two partners slide in from either side and meet at a link badge on a turning orbit. */
export function PartnershipSection({ partnership }: PartnershipSectionProps) {
  const { heading, partners } = partnership;

  return (
    <section
      aria-labelledby="partnership-heading"
      className="page-section page-section--ruled home-partnership"
      id="partnership"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="partnership-heading"
          title={heading.title}
        />

        <div className="partnership">
          <PartnerCard partner={partners[0]} reveal="right" />

          <div aria-hidden="true" className="partnership__link" data-reveal="scale" data-reveal-delay="3">
            <svg className="partnership__orbit" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" />
              {orbitDots.map((dot) => (
                <circle className="partnership__orbit-dot" cx={dot.x} cy={dot.y} key={`${dot.x}-${dot.y}`} r="1.8" />
              ))}
            </svg>
            <span className="partnership__badge">
              <LinkIcon />
            </span>
          </div>

          <PartnerCard partner={partners[1]} reveal="left" />
        </div>
      </div>
    </section>
  );
}
