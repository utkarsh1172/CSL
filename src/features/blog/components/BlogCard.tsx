import Image from "next/image";
import Link from "next/link";

import type { BlogPostSummary } from "@/types/blog";

type BlogCardProps = {
  post: BlogPostSummary;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <div className="blog-card__media">
        <Image
          alt="Business leaders discussing a next-generation business solution"
          height={273}
          sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1080px) 45vw, 230px"
          src={post.imageSrc}
          width={238}
        />
      </div>
      <div className="blog-card__body">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link aria-label={`Read more about ${post.title}`} href={post.href}>
          Read More...
        </Link>
      </div>
    </article>
  );
}
