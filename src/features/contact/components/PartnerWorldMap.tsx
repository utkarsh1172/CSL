"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

import { CanadaFlag } from "@/components/ui/CanadaFlag";
import type { PartnerRegion } from "@/content/pages/contact";

export type MapRegion = PartnerRegion & {
  /** Marker position in the map's SVG coordinates. */
  point: { x: number; y: number };
};

type PartnerWorldMapProps = {
  width: number;
  height: number;
  regions: MapRegion[];
  /** The server-rendered country outlines. */
  children: ReactNode;
};

const toPercent = (value: number, total: number) => `${((value / total) * 100).toFixed(3)}%`;

/** Pulsing region markers over the world map; a region pill selects one, hovering previews it. */
export function PartnerWorldMap({ width, height, regions, children }: PartnerWorldMapProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [previewed, setPreviewed] = useState<string | null>(null);
  const highlighted = previewed ?? selected;
  const selectedRegion = regions.find((region) => region.id === selected);

  const preview = (id: string) => ({
    onMouseEnter: () => setPreviewed(id),
    onMouseLeave: () => setPreviewed(null),
  });

  return (
    <div className="world-map" data-active-region={highlighted ?? undefined}>
      <div className="world-map__frame" data-reveal="zoom" data-reveal-delay="2">
        <div className="world-map__canvas">
          {children}

          <svg aria-hidden="true" className="world-map__markers" viewBox={`0 0 ${width} ${height}`}>
            {regions.map((region, index) => (
              <g
                className="world-map__marker"
                data-active={highlighted === region.id ? "" : undefined}
                key={region.id}
                onClick={() => setSelected(region.id)}
                style={{ "--marker-index": index } as CSSProperties}
                transform={`translate(${region.point.x.toFixed(1)} ${region.point.y.toFixed(1)})`}
                {...preview(region.id)}
              >
                <g className="world-map__marker-body">
                  <circle className="world-map__pulse" r="10" />
                  <circle className="world-map__dot" r="4.5" />
                </g>
              </g>
            ))}
          </svg>

          {regions.map((region) => (
            <span
              aria-hidden="true"
              className="world-map__tag"
              data-active={highlighted === region.id ? "" : undefined}
              key={region.id}
              style={{ left: toPercent(region.point.x, width), top: toPercent(region.point.y, height) }}
            >
              {region.markerLabel}
            </span>
          ))}

          <div aria-hidden="true" className="world-map__vignette" />
        </div>
      </div>

      <div aria-label="Partner regions" className="world-map__regions" data-reveal-children="" role="group">
        {regions.map((region) => (
          <button
            aria-pressed={selected === region.id}
            className="world-map__region"
            data-boom-click=""
            key={region.id}
            onBlur={() => setPreviewed(null)}
            onClick={() => setSelected((current) => (current === region.id ? null : region.id))}
            onFocus={() => setPreviewed(region.id)}
            type="button"
            {...preview(region.id)}
          >
            <span aria-hidden="true" className="world-map__badge">
              {region.code === "CA" ? <CanadaFlag /> : region.code}
            </span>
            {region.name}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="world-map__caption">
        {selectedRegion ? (
          <>
            <strong>{selectedRegion.name}:</strong> {selectedRegion.locations.join(" · ")}
          </>
        ) : (
          "Select a region to see where our partners are."
        )}
      </p>
    </div>
  );
}
