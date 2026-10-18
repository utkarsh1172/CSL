import Image from "next/image";

import { RevealLines } from "@/components/ui/RevealLines";
import type { Program } from "@/types/program";

type OverviewSectionProps = {
  overview: Program["overview"];
  brochureHref: string;
};

export function OverviewSection({ overview, brochureHref }: OverviewSectionProps) {
  return (
    <section aria-labelledby="overview-heading" className="page-section program-overview" id="overview">
      <div className="section-shell">
        <div className="overview-card" data-reveal="card">
          <div className="overview-card__copy">
            <p className="overview-card__eyebrow">{overview.eyebrow}</p>
            <h2 data-reveal="lines" id="overview-heading">
              <RevealLines text={overview.title} />
            </h2>
            <p className="overview-card__summary">{overview.summary}</p>

            <dl className="overview-card__details" data-reveal-children="">
              {overview.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="overview-card__media">
            <Image alt={overview.imageAlt} fill sizes="(max-width: 900px) 100vw, 260px" src={overview.imageSrc} />
          </figure>
        </div>

        <a className="button button--more" data-boom-click="" data-reveal="rise" href={brochureHref}>
          Download Brochure
        </a>
      </div>
    </section>
  );
}
