import type { CSSProperties } from "react";

import { LineIcon } from "@/components/ui/LineIcon";
import { RevealLines } from "@/components/ui/RevealLines";
import type { GrowthChart } from "@/types/about";

type GrowthPanelProps = {
  chart: GrowthChart;
  variant: "traditional" | "csl";
};

/**
 * A tagged chart card. It rises in on its own as it scrolls into view (the CSL card a beat after
 * the traditional one), then its title lines rise. The chart is its own trigger, so the bars grow
 * left to right when they reach the viewport, the same way each title waits for its own lines.
 */
export function GrowthPanel({ chart, variant }: GrowthPanelProps) {
  return (
    <article
      className={`growth-panel growth-panel--${variant}`}
      data-reveal="card"
      data-reveal-delay={variant === "traditional" ? "1" : "3"}
    >
      <p className="growth-panel__tag">
        <LineIcon name={chart.icon} />
        {chart.tag}
      </p>
      <h3 data-reveal="lines">
        <RevealLines text={chart.title} />
      </h3>

      <div aria-hidden="true" className="growth-chart" data-reveal="grow">
        {chart.bars.map((height, index) => (
          <span
            data-grow="y"
            key={index}
            style={{ height: `${height}%`, "--grow-index": index } as CSSProperties}
          />
        ))}
      </div>

      <div aria-hidden="true" className="growth-chart__axis">
        {chart.axis.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </article>
  );
}
