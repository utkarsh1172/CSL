import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPostBySlug, getBlogPostSlugs, getRelatedBlogPosts } from "@/content/blog";
import { BlogArticle } from "@/features/blog/components/BlogArticle";
import { createPageMetadata } from "@/lib/seo/metadata";
import { blogPostStructuredData } from "@/lib/seo/structured-data";

type BlogArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog post not found",
    };
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: post.href,
    image: { src: post.imageSrc, alt: post.imageAlt },
    article: {
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      section: post.category,
      tags: post.tags,
    },
  });
}

export default async function BlogArticleRoute({ params }: BlogArticleRouteProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={blogPostStructuredData(post)} />
      <BlogArticle post={post} relatedPosts={getRelatedBlogPosts(post.slug)} />
    </>
  );
}
