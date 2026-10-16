import type { ReactNode } from "react";

import type { LineIconName } from "@/types/icon";

type LineIconProps = {
  name: LineIconName;
  className?: string;
};

/** Outline glyphs on a 24px grid; stroke colour and width come from CSS. */
const iconPaths: Record<LineIconName, ReactNode> = {
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.8 13.4-1.3 7.1 4.5-2.4 4.5 2.4-1.3-7.1" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.4C10.3 5 7.6 4.5 3.5 4.7v13.6c4.1-.2 6.8.3 8.5 1.7 1.7-1.4 4.4-1.9 8.5-1.7V4.7c-4.1-.2-6.8.3-8.5 1.7Z" />
      <path d="M12 6.4V20" />
    </>
  ),
  briefcase: (
    <>
      <rect height="12.5" rx="2" width="18" x="3" y="7" />
      <path d="M8.5 7V5.2a1.7 1.7 0 0 1 1.7-1.7h3.6a1.7 1.7 0 0 1 1.7 1.7V7M9.5 7v12.5M14.5 7v12.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16M6.5 16.5v-3M10.5 16.5v-6M14.5 16.5v-4.5M18.5 16.5V9" />
      <path d="m5 10.5 4.5-4 3.5 2.5 6-5M15.5 4H19v3.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.6 8.4-2.2 5-5 2.2 2.2-5 5-2.2Z" />
    </>
  ),
  document: (
    <>
      <path d="M14 3.5H7.2A1.7 1.7 0 0 0 5.5 5.2v13.6a1.7 1.7 0 0 0 1.7 1.7h9.6a1.7 1.7 0 0 0 1.7-1.7V8L14 3.5Z" />
      <path d="M14 3.5V8h4.5M9 12.5h6M9 16h6M9 9h2" />
    </>
  ),
  head: (
    <>
      <path d="M7 20.5v-3.2a7 7 0 1 1 9.8-2.9l1.7 3.1h-2.3v3H11" />
      <circle cx="12.3" cy="10" r="2.2" />
      <path d="M12.3 6.4v1.4M12.3 12.2v1.4M8.7 10h1.4M14.5 10h1.4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3.5 10v4a1.5 1.5 0 0 0 1.5 1.5h2l9 4.5V4L7 8.5H5A1.5 1.5 0 0 0 3.5 10Z" />
      <path d="m7.5 15.5 1.4 4.5M19.5 9.5a3.5 3.5 0 0 1 0 5" />
    </>
  ),
  mic: (
    <>
      <rect height="11" rx="3" width="6" x="9" y="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
    </>
  ),
  nodes: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="m6.5 6.5 3.8 3.8M17.5 6.5l-3.8 3.8M6.5 17.5l3.8-3.8M17.5 17.5l-3.8-3.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6.2v5.3c0 4.4 2.9 7.7 7 9 4.1-1.3 7-4.6 7-9V6.2l-7-2.7Z" />
      <path d="M9.5 8.5v4.2a2.5 2.5 0 0 0 5 0V8.5" />
    </>
  ),
  sitemap: (
    <>
      <rect height="5" rx="1.2" width="6" x="9" y="3" />
      <rect height="5" rx="1.2" width="6" x="3" y="16" />
      <rect height="5" rx="1.2" width="6" x="15" y="16" />
      <path d="M12 8v4M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    </>
  ),
  star: (
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  ),
  sunrise: (
    <path d="M3 18.5h18M7.5 18.5a4.5 4.5 0 0 1 9 0M12 7v3M5.6 10.6l1.7 1.7M18.4 10.6l-1.7 1.7M3 14.5h2M19 14.5h2M5 21.5h14" />
  ),
  target: (
    <>
      <circle cx="11" cy="13" r="7.5" />
      <circle cx="11" cy="13" r="4" />
      <circle cx="11" cy="13" r="0.8" />
      <path d="m11 13 7-7M15.5 6.5V4l3-1v2.5h2.5l-1 3h-2.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.3" />
      <path d="M3 19.5c.6-3.4 2.9-5.4 6-5.4s5.4 2 6 5.4" />
      <path d="M15.2 4.9a3.3 3.3 0 0 1 0 6.2M17.5 14.4c2 .7 3.2 2.4 3.6 5.1" />
    </>
  ),
};

export function LineIcon({ name, className }: LineIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`line-icon${className ? ` ${className}` : ""}`}
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  );
}
