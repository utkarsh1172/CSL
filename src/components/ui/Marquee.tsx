import type { CSSProperties, ReactNode } from "react";

type MarqueeItem = {
  key: string;
  /** Announced to screen readers, since the moving copies are hidden from them. */
  label: string;
  node: ReactNode;
};

type MarqueeProps = {
  items: MarqueeItem[];
  /** Accessible name for the list, e.g. "Organisations that trust CSL". */
  label: string;
  /** Seconds for one full loop; lower is faster. */
  duration?: number;
  /** How many times the items repeat inside each half, so short lists still fill wide rows. */
  repeat?: number;
  className?: string;
};

/**
 * Endless horizontal carousel: two identical halves slide left and the track snaps back by
 * exactly one half, so the loop is seamless. Pauses on hover; holds still for
 * reduced motion.
 */
export function Marquee({ items, label, duration = 28, repeat = 2, className }: MarqueeProps) {
  const half = Array.from({ length: repeat }, (_, copy) =>
    items.map((item) => ({ ...item, key: `${copy}-${item.key}`, isRepeat: copy > 0 })),
  ).flat();

  return (
    <div
      className={`marquee${className ? ` ${className}` : ""}`}
      data-reveal="rise"
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <ul aria-label={label} className="sr-only">
        {items.map((item) => (
          <li key={item.key}>{item.label}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="marquee__track">
        {[0, 1].map((group) => (
          <ul className="marquee__group" key={group}>
            {half.map((item) => (
              <li className={item.isRepeat ? "marquee__repeat" : undefined} key={item.key}>
                {item.node}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
