type StudyBlogDateProps = {
  dateString: string;
};

export function StudyBlogDate({ dateString }: StudyBlogDateProps) {
  const date = new Date(dateString);

  return (
    <time className="study-blog-date" dateTime={dateString}>
      {date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}