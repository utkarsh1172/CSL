import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { StudyBlogPost } from "@/types/content";

// Sample data - in a real implementation, this would be fetched from content files based on slug
const samplePosts: Record<string, StudyBlogPost> = {
  "welcome-to-csl-study-blog": {
    id: "welcome-to-csl-study-blog",
    title: "Welcome to the CSL Study Blog",
    excerpt: "Discover leadership insights, research, and practical guidance from the Canada School of Leadership's expert faculty and practitioners.",
    coverImage: "/images/content/study-blog-hero.jpg",
    author: {
      name: "CSL Editorial Team",
      avatar: "/images/author/csl-team.jpg",
    },
    publishedAt: "2026-10-11T00:00:00Z",
    tags: ["Leadership", "Research", "Insights"],
    readTime: 5,
    content: "# Welcome to the CSL Study Blog\n\nAt the Canada School of Leadership, we believe that continuous learning is the foundation of exceptional leadership.",
  },
  "emotional-intelligence-in-leadership": {
    id: "emotional-intelligence-in-leadership",
    title: "The Role of Emotional Intelligence in Modern Leadership",
    excerpt: "Explore why EQ is becoming as critical as IQ for effective leadership in today's complex organizational landscapes.",
    coverImage: "/images/content/eq-leadership.jpg",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/images/author/sarah-chen.jpg",
    },
    publishedAt: "2026-10-04T00:00:00Z",
    tags: ["Emotional Intelligence", "Leadership Skills", "Psychology"],
    readTime: 8,
    content: "# The Role of Emotional Intelligence in Modern Leadership\n\n## Introduction\n\nIn today's rapidly evolving business environment, technical expertise and strategic acumen alone are insufficient for leadership success.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = samplePosts[params.slug];

  if (!post) {
    return {
      title: "Page Not Found | Canada School of Leadership",
      description: "The requested insight could not be found.",
    };
  }

  return {
    title: {
      default: `${post.title} | Canada School of Leadership`,
      template: "%s | Canada School of Leadership",
    },
    description: post.excerpt,
  };
}

export default function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Debug: Check if post exists
  const post = samplePosts[params.slug];

  // For debugging, let's see what we're working with
  // In a real scenario, we'd remove this debug output
  if (!post) {
    // Instead of notFound(), let's see what's happening
    return (
      <div>
        <h1>Debug Info</h1>
        <p>Slug: {params.slug}</p>
        <p>Type of slug: {typeof params.slug}</p>
        <p>Available posts: {JSON.stringify(Object.keys(samplePosts))}</p>
        <p>Post lookup result: {post ? 'Found' : 'Not found'}</p>
        <p>Sample posts object: {JSON.stringify(samplePosts, null, 2)}</p>
      </div>
    );
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
    </>
  );
}