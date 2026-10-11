import type { Metadata } from "next";
import Link from "next/link";
import { StudyBlogList } from "@/features/insights/components/StudyBlogList";

// Sample data - in a real implementation, this would be fetched from content files
const samplePosts = [
  {
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
  {
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
];

export const metadata: Metadata = {
  title: {
    default: "Leadership Insights | Canada School of Leadership",
    template: "%s | Canada School of Leadership",
  },
  description: "Latest leadership insights, research, and practical guidance from CSL faculty and practitioners.",
};

export default function InsightsPage() {
  return (
    <>
      <StudyBlogList posts={samplePosts} />
    </>
  );
}