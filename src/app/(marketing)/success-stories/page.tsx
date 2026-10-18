import type { Metadata } from "next";

import { SuccessStoriesPage } from "@/features/success-stories/components/SuccessStoriesPage";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories of professionals and organizations who transformed their leadership capabilities, visibility, and influence through Canada School of Leadership.",
};

export default function SuccessStoriesRoute() {
  return <SuccessStoriesPage />;
}
