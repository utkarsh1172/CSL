import { SectionHeading } from "@/components/sections/SectionHeading";
import type { AboutComparison } from "@/types/about";

import { GrowthPanel } from "./GrowthPanel";

type ComparisonSectionProps = {
  comparison: AboutComparison;
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
    <section aria-labelledby="comparison-heading" className="page-section about-comparison">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="comparison-heading"
          title={heading.title}
        />

        <div className="comparison-charts">
          <GrowthPanel chart={traditional} variant="traditional" />
          <GrowthPanel chart={csl} variant="csl" />
        </div>

        {/* The table rises in after the cards; its rows then follow one by one. */}
        <div
          aria-label={`${columns[1]} programs compared with ${columns[2]}`}
          className="compare-table"
          data-reveal="rise"
          data-reveal-delay="2"
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
    </section>
  );
}
