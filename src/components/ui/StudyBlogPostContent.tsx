import type { ReactNode } from "react";

type StudyBlogPostContentProps = {
  title: string;
  coverImage: string;
  authorName: string;
  authorAvatar: string;
  publishedAt: string;
  tags: string[];
  content: ReactNode; // Will be rendered HTML/Markdown
  readTime: number;
};

export function StudyBlogPostContent({
  title,
  coverImage,
  authorName,
  authorAvatar,
  publishedAt,
  tags,
  content,
  readTime,
}: StudyBlogPostContentProps) {
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="study-blog-post-content">
      <header className="study-blog-post-content__header">
        <div className="study-blog-post-content__hero">
          <img
            src={coverImage}
            alt={title}
            className="study-blog-post-content__hero-image"
          />
          <div className="study-blog-post-content__hero-overlay" />
        </div>
        <div className="study-blog-post-content__header-content">
          <div className="study-blog-post-content__meta">
            <div className="study-blog-post-content__author">
              <img
                src={authorAvatar}
                alt={`${authorName} avatar`}
                className="study-blog-post-content__author-avatar"
              />
              <div>
                <span className="study-blog-post-content__author-name">
                  {authorName}
                </span>
                <time className="study-blog-post-content__date" dateTime={publishedAt}>
                  {date}
                </time>
              </div>
            </div>
            <div className="study-blog-post-content__tags">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="study-blog-post-content__tag"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="study-blog-post-content__title">{title}</h1>
          <p className="study-blog-post-content__read-time">
            {readTime} min read
          </p>
        </div>
      </header>

      <div className="study-blog-post-content__body">
        {content}
      </div>

      <footer className="study-blog-post-content__footer">
        <div className="study-blog-post-content__footer-content">
          {/* Related posts or CTAs could go here */}
        </div>
      </footer>
    </article>
  );
}