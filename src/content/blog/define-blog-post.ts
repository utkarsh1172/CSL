import type { BlogPostDetail } from "@/types/blog";

export type BlogPostInput = Omit<BlogPostDetail, "id" | "href">;

export function defineBlogPost(post: BlogPostInput): BlogPostDetail {
  return {
    ...post,
    id: post.slug,
    href: `/blog/${post.slug}`,
  };
}
