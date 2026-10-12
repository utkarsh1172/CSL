import Link from "next/link";

type StudyBlogPostCardProps = {
  title: string;
  excerpt: string;
  coverImage: string;
  authorName: string;
  authorAvatar: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
  slug: string;
  revealDelay?: number;
};

export function StudyBlogPostCard({
  title,
  excerpt,
  coverImage,
  authorName,
  authorAvatar,
  publishedAt,
  tags,
  readTime,
  slug,
  revealDelay = 0,
}: StudyBlogPostCardProps) {
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link className="study-blog-post-card__link" href={`/insights/${slug}`}>
      <article
        className="study-blog-post-card"
        data-reveal="up"
        data-reveal-delay={revealDelay}
      >
        <div className="study-blog-post-card__image">
          <img
            src={coverImage}
            alt={title}
            className="study-blog-post-card__image-img"
          />
        </div>
        <div className="study-blog-post-card__content">
          <div className="study-blog-post-card__meta">
            <div className="study-blog-post-card__author">
              <img
                src={authorAvatar}
                alt={`${authorName} avatar`}
                className="study-blog-post-card__author-avatar"
              />
              <span className="study-blog-post-card__author-name">
                {authorName}
              </span>
            </div>
            <time className="study-blog-post-card__date" dateTime={publishedAt}>
              {date}
            </time>
          </div>
          <h2 className="study-blog-post-card__title">{title}</h2>
          <p className="study-blog-post-card__excerpt">{excerpt}</p>
          <div className="study-blog-post-card__tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="study-blog-post-card__tag"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="study-blog-post-card__footer">
            <span className="study-blog-post-card__read-time">
              {readTime} min read
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
