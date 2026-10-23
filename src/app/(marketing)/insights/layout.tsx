import type { Metadata } from "next";
import type { ReactNode } from "react";

// The insights study blog is still a prototype (sample posts, no header or footer), so it stays
// out of search results and the sitemap until it launches.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function InsightsLayout({ children }: { children: ReactNode }) {
  return children;
}
