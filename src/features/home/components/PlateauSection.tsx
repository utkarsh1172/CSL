import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomePlateau } from "@/types/home";

type PlateauSectionProps = {
  plateau: HomePlateau;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function PlateauSection({ plateau }: PlateauSectionProps) {
  const { heading } = plateau;

  return (
    <section aria-labelledby="plateau-heading" className="page-section home-plateau">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="plateau-heading"
          title={heading.title}
        />

        <div className="home-plateau__stage">
          <figure className="home-plateau__media" data-reveal="zoom" data-reveal-delay="2">
            <Image
              alt={plateau.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 790px"
              src={plateau.imageSrc}
            />
          </figure>

          {/* The first gap is featured; hovering or focusing another hands the highlight over. */}
          <ul className="plateau-gaps" data-reveal-children="">
            {plateau.gaps.map((gap, index) => (
              <li key={gap.title}>
                <a
                  className={`plateau-gap${index === 0 ? " plateau-gap--featured" : ""}`}
                  href="#talk-to-advisor"
                >
                  <span className="plateau-gap__title">
                    {gap.title}
                    <ArrowIcon />
                  </span>
                  <span className="plateau-gap__question">{gap.question}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="button button--primary home-plateau__brochure"
          data-boom-click=""
          data-reveal="rise"
          href={plateau.brochureHref}
        >
          {plateau.brochureLabel}
        </a>
      </div>
    </section>
  );
}
