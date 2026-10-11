import { SiteHeader } from "@/components/layout/SiteHeader";
import { blogCategories, blogPosts } from "@/content/blog";

import { BlogDirectory } from "./BlogDirectory";

export function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="blog-page">
        <BlogDirectory categories={blogCategories} posts={blogPosts} />
      </main>
    </>
  );
}
