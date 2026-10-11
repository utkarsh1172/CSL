type StudyBlogTagsProps = {
  tags: string[];
};

export function StudyBlogTags({ tags }: StudyBlogTagsProps) {
  return (
    <div className="study-blog-tags">
      {tags.map((tag) => (
        <span key={tag} className="study-blog-tags__tag">
          #{tag}
        </span>
      ))}
    </div>
  );
}