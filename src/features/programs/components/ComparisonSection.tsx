import { SectionHeading } from "@/components/sections/SectionHeading";
import { LineIcon } from "@/components/ui/LineIcon";
import type { ProgramComparison } from "@/types/program";

import { GrowthPanel } from "./GrowthPanel";

type ComparisonSectionProps = {
  comparison: ProgramComparison;
};

function CrossIcon() {
  return (
    <svg aria-hidden="true" className="compare-table__mark" viewBox="0 0 12 12">
      <path d="m3 3 6 6M9 3 3 9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="compare-table__mark" viewBox="0 0 12 12">
      <path d="m2.2 6.4 2.5 2.5 5.1-5.6" />
    </svg>
  );
}

export function ComparisonSection({ comparison }: ComparisonSectionProps) {
  const { heading, traditional, csl, columns, rows } = comparison;

  return (
    <section aria-labelledby="comparison-heading" className="program-section program-comparison">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="program-heading program-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="comparison-heading"
          title={heading.title}
        />

        <div className="comparison-board" data-reveal="zoom" data-reveal-delay="2">
          <div className="comparison-board__charts">
            <GrowthPanel chart={traditional} variant="traditional" />
            <GrowthPanel
              aside={
                <ul className="growth-panel__benefits">
                  {csl.benefits.map((benefit) => (
                    <li key={benefit.label}>
                      <span>
                        <LineIcon name={benefit.icon} />
                      </span>
                      {benefit.label}
                    </li>
                  ))}
                </ul>
              }
              chart={csl}
              variant="csl"
            />
          </div>

          <div
            aria-label={`${columns[1]} programs compared with ${columns[2]}`}
            className="compare-table"
            role="table"
          >
            <div className="compare-table__head" role="rowgroup">
              <div className="compare-table__row" role="row">
                {columns.map((column) => (
                  <span key={column} role="columnheader">
                    {column}
                  </span>
                ))}
              </div>
            </div>

            <div data-reveal-children="" role="rowgroup">
              {rows.map((row) => (
                <div className="compare-table__row" key={row.dimension} role="row">
                  <span className="compare-table__dimension" role="rowheader">
                    <span className="compare-table__icon">
                      <LineIcon name={row.icon} />
                    </span>
                    {row.dimension}
                  </span>
                  <span className="compare-table__traditional" role="cell">
                    <CrossIcon />
                    {row.traditional}
                  </span>
                  <span className="compare-table__csl" role="cell">
                    <CheckIcon />
                    {row.csl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
