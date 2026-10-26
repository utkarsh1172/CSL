import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomePartner, HomePartnership } from "@/types/home";

type PartnershipSectionProps = {
  partnership: HomePartnership;
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="partner-card__check" viewBox="0 0 12 12">
      <path d="m2.2 6.4 2.5 2.5 5.1-5.6" />
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
          <Image alt={partner.name} height={288} src={partner.logoSrc} unoptimized width={826} />
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

/** The Canada School of Leadership offering spans the full partnership section. */
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
        </div>
      </div>
    </section>
  );
}
