import type { Metadata } from "next";

import { homePage } from "@/content/pages/home";
import { HomePage } from "@/features/home/components/HomePage";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Canada School of Leadership | Executive Leadership Programs",
  absoluteTitle: true,
  description: homePage.metaDescription,
  path: "/",
});

export default function HomeRoute() {
  return <HomePage />;
}
