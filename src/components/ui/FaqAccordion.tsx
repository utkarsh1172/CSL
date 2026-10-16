"use client";

import { useId, useState } from "react";
import type { ComponentPropsWithoutRef, KeyboardEvent } from "react";

export type FaqAccordionItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = Omit<ComponentPropsWithoutRef<"div">, "children" | "onKeyDown"> & {
  items: FaqAccordionItem[];
  /** Answer shown on first render; `null` starts with every answer closed. */
  defaultOpenIndex?: number | null;
  variant?: "default" | "compact";
};

const triggerSelector = ".faq-accordion__trigger";

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path d="M6 1.5v9M1.5 6h9" />
    </svg>
  );
}

// Arrow, Home and End keys move between questions, per the WAI-ARIA accordion pattern.
function focusSiblingTrigger(event: KeyboardEvent<HTMLDivElement>) {
  if (!(event.target instanceof HTMLElement) || !event.target.matches(triggerSelector)) {
    return;
  }

  const triggers = Array.from(
    event.currentTarget.querySelectorAll<HTMLButtonElement>(triggerSelector),
  );
  const current = triggers.indexOf(event.target as HTMLButtonElement);
  const last = triggers.length - 1;
  const next = {
    ArrowDown: current === last ? 0 : current + 1,
    ArrowUp: current === 0 ? last : current - 1,
    Home: 0,
    End: last,
  }[event.key];

  if (next === undefined) {
    return;
  }

  event.preventDefault();
  triggers[next]?.focus();
}

/**
 * Single-open FAQ list modelled on leadershipprograms.ca: answers glide open from zero height
 * while the plus turns into a filled close mark. Collapsed answers stay mounted (and `inert`),
 * so closing animates as smoothly as opening.
 */
export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
  variant = "default",
  className,
  ...rest
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <div
      {...rest}
      className={`faq-accordion faq-accordion--${variant}${className ? ` ${className}` : ""}`}
      onKeyDown={focusSiblingTrigger}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        // Open state lives in `data-open`, not the class list: ScrollReveal adds `is-revealed`
        // to these items, and a changing className would make React overwrite it.
        return (
          <div className="faq-accordion__item" data-open={isOpen || undefined} key={item.question}>
            <h3 className="faq-accordion__heading">
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="faq-accordion__trigger"
                id={triggerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span className="faq-accordion__question">{item.question}</span>
                <span className="faq-accordion__icon">
                  <PlusIcon />
                </span>
              </button>
            </h3>
            <div
              aria-labelledby={triggerId}
              className="faq-accordion__panel"
              id={panelId}
              inert={!isOpen}
              role="region"
            >
              <div className="faq-accordion__body">
                <p className="faq-accordion__answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
