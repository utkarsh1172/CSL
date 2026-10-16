import type { CSSProperties, ReactNode } from "react";

import type { GrowthChart } from "@/types/program";

type GrowthPanelProps = {
  chart: GrowthChart;
  variant: "traditional" | "csl";
  /** Extra content beside the chart, such as the CSL benefits list. */
  aside?: ReactNode;
};

// Trend lines on a 100x40 canvas stretched over the bars: an arc that fades for traditional
// programs, a curve that keeps climbing for the ecosystem.
const trendPaths = {
  traditional: {
    line: "M1 24 C 22 6, 40 2, 58 9 S 86 26, 94 31",
    head: "M90 26.5 L94.5 31.2 L88.6 32.6",
  },
  csl: {
    line: "M1 37 C 34 35, 64 27, 95 3",
    head: "M89.6 3.4 L95.4 2.6 L94 8",
  },
} as const;

/** A tagged chart card: bars grow and the trend line draws in once the board is revealed. */
export function GrowthPanel({ chart, variant, aside }: GrowthPanelProps) {
  const trend = trendPaths[variant];

  return (
    <article className={`growth-panel growth-panel--${variant}`}>
      <div className="growth-panel__body">
        <span className="growth-panel__tag">{chart.tag}</span>
        <h3>{chart.title}</h3>

        <div aria-hidden="true" className="growth-chart">
          <div className="growth-chart__bars">
            {chart.bars.map((height, index) => (
              <span
                data-grow="y"
                key={index}
                style={{ height: `${height}%`, "--grow-index": index } as CSSProperties}
              />
            ))}
          </div>
          <svg className="growth-chart__trend" data-draw="" preserveAspectRatio="none" viewBox="0 0 100 40">
            <path d={trend.line} />
            <path d={trend.head} />
          </svg>
        </div>

        <div aria-hidden="true" className="growth-chart__axis">
          {chart.axis.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      {aside}
    </article>
  );
}
