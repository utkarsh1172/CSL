import type { Metadata } from "next";

import { aboutPage } from "@/content/pages/about";
import { AboutPage } from "@/features/about/components/AboutPage";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description: aboutPage.metaDescription,
  path: "/about",
});

export default function AboutRoute() {
  return <AboutPage />;
}
