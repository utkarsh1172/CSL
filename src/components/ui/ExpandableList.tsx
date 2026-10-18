"use client";

import { useId, useState, type ReactNode } from "react";

type ExpandableListItem = {
  key: string;
  node: ReactNode;
};

type ExpandableListProps = {
  items: ExpandableListItem[];
  /** Items shown before the toggle; the button hides when nothing more is waiting. */
  initialCount?: number;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
  /** Adds a trailing arrow that nudges forward on hover. */
  withArrow?: boolean;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/** A grid that shows its first few items and reveals the rest behind a "See More" button. */
export function ExpandableList({
  items,
  initialCount = 3,
  className,
  moreLabel = "See More",
  lessLabel = "Show Less",
  withArrow = false,
}: ExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const visibleItems = expanded ? items : items.slice(0, initialCount);

  return (
    <>
      {/* ScrollReveal staggers each item in, including ones added by the toggle. */}
      <ul className={className} data-reveal-children="" id={listId}>
        {visibleItems.map((item) => (
          <li key={item.key}>{item.node}</li>
        ))}
      </ul>

      {items.length > initialCount ? (
        <button
          aria-controls={listId}
          aria-expanded={expanded}
          className="button button--more"
          data-boom-click=""
          data-reveal="rise"
          onClick={() => setExpanded((current) => !current)}
          type="button"
        >
          {expanded ? lessLabel : moreLabel}
          {withArrow ? <ArrowIcon /> : null}
        </button>
      ) : null}
    </>
  );
}
