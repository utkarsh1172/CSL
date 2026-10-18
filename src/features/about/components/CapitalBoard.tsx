"use client";

import { useState, type CSSProperties } from "react";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { LineIcon } from "@/components/ui/LineIcon";
import type { LeadershipCapital } from "@/types/about";

type CapitalBoardProps = {
  coreLabel: string;
  coreCaption: string;
  dimensions: LeadershipCapital[];
};

// The orbit is drawn on a 400-unit square; nodes sit on the ring at this radius.
const viewBox = 400;
const nodeRadius = 164;
const ringRadii = [58, 98, 138, 178];

/** Places the nodes evenly around the ring, clockwise from twelve o'clock. */
function orbitPoint(index: number, count: number) {
  const angle = ((-90 + (360 / count) * index) * Math.PI) / 180;
  const round = (value: number) => Math.round(value * 100) / 100;

  return {
    x: round(viewBox / 2 + nodeRadius * Math.cos(angle)),
    y: round(viewBox / 2 + nodeRadius * Math.sin(angle)),
  };
}

const toPercent = (value: number) => `${(value / viewBox) * 100}%`;

/** Orbit diagram and capital meters; hovering either side highlights the same dimension. */
export function CapitalBoard({ coreLabel, coreCaption, dimensions }: CapitalBoardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const points = dimensions.map((_, index) => orbitPoint(index, dimensions.length));

  return (
    <div
      className={`capital-board${activeId ? " has-active" : ""}`}
      data-reveal="zoom"
      data-reveal-delay="2"
      onMouseLeave={() => setActiveId(null)}
    >
      {/* Decorative: the meter list beside it carries the same information. */}
      <div aria-hidden="true" className="capital-orbit">
        <svg className="capital-orbit__rings" viewBox={`0 0 ${viewBox} ${viewBox}`}>
          {points.map((point, index) => (
            <line
              className="capital-orbit__spoke"
              key={dimensions[index].id}
              x1={viewBox / 2}
              x2={point.x}
              y1={viewBox / 2}
              y2={point.y}
            />
          ))}
          {ringRadii.map((radius) => (
            <circle cx={viewBox / 2} cy={viewBox / 2} key={radius} r={radius} />
          ))}
          <circle className="capital-orbit__track" cx={viewBox / 2} cy={viewBox / 2} r={118} />
        </svg>

        <div className="capital-orbit__core">
          <strong>{coreLabel}</strong>
          <span>{coreCaption}</span>
        </div>

        {dimensions.map((dimension, index) => (
          <span
            className={`capital-orbit__node${activeId === dimension.id ? " is-active" : ""}`}
            key={dimension.id}
            onMouseEnter={() => setActiveId(dimension.id)}
            style={
              {
                left: toPercent(points[index].x),
                top: toPercent(points[index].y),
                "--grow-index": index,
              } as CSSProperties
            }
          >
            <span className="capital-orbit__badge">
              <LineIcon name={dimension.icon} />
            </span>
            <span className="capital-orbit__label">{dimension.label}</span>
          </span>
        ))}
      </div>

      <ul className="capital-meters">
        {dimensions.map((dimension, index) => (
          <li
            className={activeId === dimension.id ? "is-active" : undefined}
            key={dimension.id}
            onBlur={() => setActiveId(null)}
            onFocus={() => setActiveId(dimension.id)}
            onMouseEnter={() => setActiveId(dimension.id)}
            tabIndex={0}
          >
            <div className="capital-meters__head">
              <LineIcon name={dimension.icon} />
              <strong>{dimension.name}</strong>
              <span className="capital-meters__score">
                <BoomCounter value={`${dimension.score}%`} />
              </span>
            </div>
            <p>{dimension.description}</p>
            <span className="capital-meters__track">
              <span
                className="capital-meters__fill"
                data-grow="x"
                style={{ width: `${dimension.score}%`, "--grow-index": index } as CSSProperties}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
