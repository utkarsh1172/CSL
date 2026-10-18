"use client";

import { useId, useState } from "react";

import type { CurriculumMonth } from "@/types/program";

type CurriculumMonthsProps = {
  months: CurriculumMonth[];
};

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="curriculum-months__chevron" viewBox="0 0 12 8">
      <path d="M1 1.25 6 6.25l5-5" />
    </svg>
  );
}

/** Month cards that open to show what each stage covers; one stays open at a time. */
export function CurriculumMonths({ months }: CurriculumMonthsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <ul className="curriculum-months" data-reveal-children="">
      {months.map((month, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        // Open state lives in `data-open`: ScrollReveal adds classes to these items, and a
        // changing className would make React overwrite them.
        return (
          <li data-open={isOpen || undefined} key={month.title}>
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="curriculum-months__trigger"
              id={triggerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span>
                <span className="curriculum-months__title">{month.title}</span>
                <span className="curriculum-months__month">({month.month})</span>
              </span>
              <ChevronIcon />
            </button>
            <div
              aria-labelledby={triggerId}
              className="curriculum-months__panel"
              id={panelId}
              inert={!isOpen}
              role="region"
            >
              {/* The inner wrapper collapses to zero height; the paragraph keeps its padding. */}
              <div>
                <p>{month.summary}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
