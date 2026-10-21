import type { Metadata } from "next";

import { homePage } from "@/content/pages/home";
import { HomePage } from "@/features/home/components/HomePage";

export const metadata: Metadata = {
  description: homePage.metaDescription,
};

export default function HomeRoute() {
  return <HomePage />;
}
