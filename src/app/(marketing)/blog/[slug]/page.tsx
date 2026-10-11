import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBlogPostBySlug, getBlogPostSlugs } from "@/content/blog";
import { BlogArticle } from "@/features/blog/components/BlogArticle";

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

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogArticleRoute({ params }: BlogArticleRouteProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />;
}
