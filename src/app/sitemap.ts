import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/content/blog";
import { getProgramBySlug, getProgramSlugs } from "@/content/programs";

// Every public page. Add new static pages here; programs and blog posts are picked up from
// their content. The insights study blog stays out until it launches.
const pages: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/success-stories", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const programs = getProgramSlugs().flatMap((slug) => {
    const program = getProgramBySlug(slug);
    if (!program) return [];

    return {
      url: absoluteUrl(`/programs/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [absoluteUrl(program.hero.imageSrc)],
    };
  });

  const posts = getBlogPostSlugs().flatMap((slug) => {
    const post = getBlogPostBySlug(slug);
    if (!post) return [];

    return {
      url: absoluteUrl(post.href),
      lastModified: post.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [absoluteUrl(post.imageSrc)],
    };
  });

  return [
    ...pages.map(({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      changeFrequency,
      priority,
    })),
    ...programs,
    ...posts,
  ];
}
