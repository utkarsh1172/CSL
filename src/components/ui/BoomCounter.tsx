"use client";

import { useEffect, useRef, useState } from "react";

type BoomCounterProps = {
  value: string;
  duration?: number;
};

// Splits values such as "72%", "+1.3%", "24h" or "$1,200" into prefix, number and suffix.
const numericValuePattern = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/;

function formatValue(amount: number, decimals: number, grouped: boolean) {
  return amount.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
    useGrouping: grouped,
  });
}

/** Counts a stat up from zero the first time it scrolls into view. */
export function BoomCounter({ value, duration = 2000 }: BoomCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = counterRef.current;
    const match = value.match(numericValuePattern);

    if (
      !element ||
      !match ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const [, prefix, numeric, suffix] = match;
    const target = Number.parseFloat(numeric.replace(/,/g, ""));
    const decimals = numeric.split(".")[1]?.length ?? 0;
    const grouped = numeric.includes(",");
    const render = (amount: number) =>
      setDisplay(`${prefix}${formatValue(amount, decimals, grouped)}${suffix}`);

    let frame = 0;
    render(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();
        let start: number | null = null;

        // Time from the first frame's own timestamp so progress can never start below zero.
        const tick = (now: number) => {
          start ??= now;
          const progress = Math.min(Math.max((now - start) / duration, 0), 1);
          // Critically damped spring (no bounce), like the reference site's counters.
          const eased = progress === 1 ? 1 : 1 - (1 + 9.2 * progress) * Math.exp(-9.2 * progress);

          render(target * eased);

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      setDisplay(value);
    };
  }, [duration, value]);

  return (
    <>
      <span aria-hidden="true" ref={counterRef}>
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
