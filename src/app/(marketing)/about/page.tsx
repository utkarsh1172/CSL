import type { Metadata } from "next";

import { aboutPage } from "@/content/pages/about";
import { AboutPage } from "@/features/about/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.metaDescription,
};

export default function AboutRoute() {
  return <AboutPage />;
}
