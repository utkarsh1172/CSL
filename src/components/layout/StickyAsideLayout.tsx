import type { ReactNode } from "react";

type StickyAsideLayoutProps = {
  /** Usually a LeadCard; it stays in view beside every section until the layout ends. */
  aside: ReactNode;
  /** Id for the aside, so "Schedule a Free Call" style links can jump to the form. */
  asideId?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Two-column page body: sections scroll in the main column while the aside sticks below the
 * header, as on leadershipprograms.ca's course pages. Below 1080px it stops sticking and
 * follows the content.
 */
export function StickyAsideLayout({ aside, asideId, className, children }: StickyAsideLayoutProps) {
  return (
    <div className={`sticky-layout${className ? ` ${className}` : ""}`}>
      <div className="sticky-layout__main">{children}</div>
      <div className="sticky-layout__aside" id={asideId}>
        {aside}
      </div>
    </div>
  );
}
