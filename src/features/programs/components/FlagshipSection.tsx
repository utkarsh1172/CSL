import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Program } from "@/types/program";

type FlagshipSectionProps = {
  flagship: Program["flagship"];
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="flagship-card__arrow" viewBox="0 0 24 24">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function FlagshipSection({ flagship }: FlagshipSectionProps) {
  const { heading } = flagship;

  return (
    <section aria-labelledby="flagship-heading" className="page-section program-flagship" id="flagship">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="flagship-heading"
          title={heading.title}
        />

        {/* The first program is featured; hovering or focusing another hands the highlight over. */}
        <ul className="flagship-grid" data-reveal-children="">
          {flagship.programs.map((program, index) => (
            <li key={program.title}>
              <Link
                className={`flagship-card${index === 0 ? " flagship-card--featured" : ""}`}
                href={program.href}
              >
                <span className="flagship-card__title">
                  {program.title}
                  <ArrowIcon />
                </span>
                <span className="flagship-card__summary">
                  {program.summary} <span className="flagship-card__more">Read more</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
