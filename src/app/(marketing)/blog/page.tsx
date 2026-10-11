import type { Metadata } from "next";

import { BlogPage } from "@/features/blog/components/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore Canada School of Leadership articles on mentorship, learning, development and employee retention.",
};

export default function BlogRoute() {
  return <BlogPage />;
}
