import type { BlogPostDetail, BlogPostSummary, RelatedBlogPost } from "@/types/blog";

import { cisaInterviewQuestionsPost } from "./posts/cisa-interview-questions";
import { cybersecurityLeadershipPost } from "./posts/cybersecurity-leadership-executives";
import { emotionalIntelligencePost } from "./posts/emotional-intelligence-leadership";
import { leadingHybridTeamsPost } from "./posts/leading-hybrid-teams";
import { mentorshipRetentionPost } from "./posts/mentorship-employee-retention";
import { microlearningPost } from "./posts/microlearning-busy-professionals";
import { pmpExamMythsPost } from "./posts/pmp-exam-myths";
import { pmpTrainingCanadaPost } from "./posts/pmp-training-canada";
import { stayInterviewsPost } from "./posts/stay-interviews-retention";

export const blogCategories = [
  "Leadership",
  "IT & Cyber Security",
  "Learning",
  "Employee Retention",
] as const;

/** Display order on the blog landing page. Every entry must be a distinct article. */
const blogPostList: BlogPostDetail[] = [
  pmpTrainingCanadaPost,
  cisaInterviewQuestionsPost,
  microlearningPost,
  mentorshipRetentionPost,
  emotionalIntelligencePost,
  cybersecurityLeadershipPost,
  pmpExamMythsPost,
  stayInterviewsPost,
  leadingHybridTeamsPost,
];

const blogPostDetails = new Map(blogPostList.map((post) => [post.slug, post]));

if (blogPostDetails.size !== blogPostList.length) {
  throw new Error("Each blog post must have a unique slug; the same article is listed twice.");
}

export const blogPosts: BlogPostSummary[] = blogPostList.map(
  ({ id, title, excerpt, category, imageSrc, imageAlt, href }) => ({
    id,
    title,
    excerpt,
    category,
    imageSrc,
    imageAlt,
    href,
  }),
);

export function getBlogPostBySlug(slug: string) {
  return blogPostDetails.get(slug);
}

export function getBlogPostSlugs() {
  return blogPostList.map((post) => post.slug);
}

const normalizeTag = (tag: string) => tag.trim().toLowerCase();

/** Other articles ranked by shared category and tags; never includes the current article. */
export function getRelatedBlogPosts(slug: string, limit = 3): RelatedBlogPost[] {
  const current = blogPostDetails.get(slug);

  if (!current) {
    return [];
  }

  const currentTags = new Set(current.tags.map(normalizeTag));

  return blogPostList
    .filter((post) => post.slug !== current.slug)
    .map((post, order) => ({
      post,
      order,
      score:
        (post.category === current.category ? 2 : 0) +
        new Set(post.tags.map(normalizeTag).filter((tag) => currentTags.has(tag))).size,
    }))
    .sort((first, second) => second.score - first.score || first.order - second.order)
    .slice(0, limit)
    .map(({ post }) => ({ id: post.id, title: post.title, href: post.href }));
}
