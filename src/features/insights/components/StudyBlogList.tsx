import type { StudyBlogPost } from "@/types/content";
import { StudyBlogPostCard } from "@/components/ui/StudyBlogPostCard";

type StudyBlogListProps = {
  posts: StudyBlogPost[];
};

export function StudyBlogList({ posts }: StudyBlogListProps) {
  return (
    <section className="study-blog-list">
      <div className="study-blog-list__container">
        <h2 className="study-blog-list__title">Leadership Insights</h2>
        <p className="study-blog-list__subtitle">
          Latest research, frameworks, and perspectives from our faculty and practitioner community
        </p>
        <div className="study-blog-list__grid">
          {posts.map((post) => (
            <StudyBlogPostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              authorName={post.author.name}
              authorAvatar={post.author.avatar}
              publishedAt={post.publishedAt}
              tags={post.tags}
              readTime={post.readTime}
              slug={post.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}