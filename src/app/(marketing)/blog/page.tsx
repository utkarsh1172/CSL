import type { Metadata } from "next";

import { BlogPage } from "@/features/blog/components/BlogPage";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Leadership Blog",
  description:
    "Explore Canada School of Leadership articles on mentorship, learning, development and employee retention.",
  path: "/blog",
});

export default function BlogRoute() {
  return <BlogPage />;
}
