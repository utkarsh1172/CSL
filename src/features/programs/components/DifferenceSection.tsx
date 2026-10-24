import Image from "next/image";
import { Fragment, type CSSProperties } from "react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { LineIcon } from "@/components/ui/LineIcon";
import type { Program } from "@/types/program";

type DifferenceSectionProps = {
  difference: Program["difference"];
};

export function DifferenceSection({ difference }: DifferenceSectionProps) {
  const { heading, banner } = difference;

  return (
    <section aria-labelledby="difference-heading" className="page-section page-section--ruled program-difference">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="difference-heading"
          title={heading.title}
        />

        <div className="derisk-banner" data-reveal="zoom">
          <div aria-hidden="true" className="derisk-banner__visual">
            <Image alt="" fill sizes="(max-width: 900px) 100vw, 840px" src={banner.imageSrc} />
          </div>

          <div className="derisk-banner__copy">
            <h3>
              {banner.lead} <strong>{banner.emphasis}</strong>
            </h3>
            <p>{banner.summary}</p>
          </div>

          {/* The month timeline, then the inner shift it drives, arrive step by step. */}
          <div className="derisk-banner__path">
            <p>
              {banner.timeline.map((step, index) => (
                <Fragment key={step}>
                  <span data-pop="" style={{ "--grow-index": index } as CSSProperties}>
                    {step}
                  </span>
                  {index < banner.timeline.length - 1 ? <span aria-hidden="true"> → </span> : " "}
                </Fragment>
              ))}
            </p>
            <p>
              {banner.stages.map((stage, index) => (
                <Fragment key={stage}>
                  <span
                    data-pop=""
                    style={{ "--grow-index": banner.timeline.length + index } as CSSProperties}
                  >
                    {stage}
                  </span>
                  {index < banner.stages.length - 1 ? <span aria-hidden="true"> &gt; </span> : null}
                </Fragment>
              ))}
              <span aria-hidden="true"> +++</span>
            </p>
          </div>
        </div>

        <ul className="authority-grid" data-reveal-children="">
          {difference.authorities.map((authority) => (
            <li className="authority-card" key={authority.title}>
              <span className="authority-card__icon">
                <LineIcon name={authority.icon} />
              </span>
              <h3>{authority.title}</h3>
              <p>{authority.detail}</p>
            </li>
          ))}
        </ul>

        <a className="program-difference__cta" data-boom-click="" data-reveal="rise" href="#talk-to-advisor">
          Schedule a Free Call
        </a>
      </div>
    </section>
  );
}
