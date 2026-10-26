import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomePrograms } from "@/types/home";

type ProgramsSectionProps = {
  programs: HomePrograms;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path d="m4.5 2.5 3.5 3.5-3.5 3.5" />
    </svg>
  );
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  const { heading } = programs;

  return (
    <section
      aria-labelledby="programs-heading"
      className="page-section page-section--ruled home-programs"
      id="programs"
    >
      <div className="section-shell">
        <div className="home-programs__head">
          <SectionHeading
            accent={heading.accent}
            align="start"
            className="section-heading--large section-heading--light"
            description={heading.description}
            eyebrow={heading.eyebrow}
            id="programs-heading"
            title={heading.title}
          />
          <Link className="home-programs__all" data-reveal="rise" href={programs.viewAllHref}>
            {programs.viewAllLabel}
            <ArrowIcon />
          </Link>
        </div>

        <ul className="program-cards" data-reveal-children="">
          {programs.programs.map((program) => (
            <li key={program.title}>
              <Link className="program-card" href={program.href}>
                <div className="program-card__media">
                  {/* Decorative: the title and summary already name the link. */}
                  <Image
                    alt=""
                    fill
                    sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, (max-width: 1080px) 25vw, 210px"
                    src={program.imageSrc}
                  />
                </div>
                <div className="program-card__body">
                  <h3 className="program-card__title">{program.title}</h3>
                  <p className="program-card__summary">{program.summary}</p>
                  <span aria-hidden="true" className="program-card__go">
                    <ChevronIcon />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
