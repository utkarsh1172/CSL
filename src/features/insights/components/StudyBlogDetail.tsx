import type { StudyBlogPost } from "@/types/content";
import { StudyBlogPostContent } from "@/components/ui/StudyBlogPostContent";
import Link from "next/link";

type StudyBlogDetailProps = {
  post: StudyBlogPost;
};

export function StudyBlogDetail({ post }: StudyBlogDetailProps) {
  // In a real implementation, this would parse markdown or HTML content
  // For now, we'll use a placeholder that demonstrates the structure
  const contentPlaceholder = (
    <>
      <p>{post.excerpt}</p>
      <p>This is where the full article content would be rendered. In a production implementation, this would process markdown or HTML content from the content file.</p>
      <blockquote>
        <p>"Leadership is not about titles, positions, or flowcharts. It is about one life influencing another."</p>
        <cite>— John C. Maxwell</cite>
      </blockquote>
      <p>Continue reading the full insight for practical frameworks, research findings, and actionable strategies.</p>
    </>
  );

  return (
    <article className="study-blog-detail">
      <div className="study-blog-detail__container">
        <StudyBlogPostContent
          title={post.title}
          coverImage={post.coverImage}
          authorName={post.author.name}
          authorAvatar={post.author.avatar}
          publishedAt={post.publishedAt}
          tags={post.tags}
          content={contentPlaceholder}
          readTime={post.readTime}
        />

        <div className="study-blog-detail__actions">
          <Link href="/insights" className="button button--light">
            ← Back to All Insights
          </Link>
        </div>
      </div>
    </article>
  );
}