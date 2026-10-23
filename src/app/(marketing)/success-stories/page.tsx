import type { Metadata } from "next";

import { SuccessStoriesPage } from "@/features/success-stories/components/SuccessStoriesPage";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Success Stories",
  description:
    "Real stories of professionals and organizations who transformed their leadership capabilities, visibility, and influence through Canada School of Leadership.",
  path: "/success-stories",
});

export default function SuccessStoriesRoute() {
  return <SuccessStoriesPage />;
}
