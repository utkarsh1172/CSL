import Image from "next/image";
import Link from "next/link";

import type { BlogPostSummary } from "@/types/blog";

type BlogCardProps = {
  post: BlogPostSummary;
  revealDelay?: number;
};

export function BlogCard({ post, revealDelay = 0 }: BlogCardProps) {
  return (
    <article className="blog-card" data-reveal="card" data-reveal-delay={revealDelay}>
      <Link aria-label={`Read more about ${post.title}`} data-boom-click="" href={post.href}>
        <div className="blog-card__media">
          <Image
            alt={post.imageAlt}
            height={409}
            sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1080px) 45vw, 230px"
            src={post.imageSrc}
            width={1084}
          />
        </div>
        <div className="blog-card__body">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span className="blog-card__read-more">Read More...</span>
        </div>
      </Link>
    </article>
  );
}
