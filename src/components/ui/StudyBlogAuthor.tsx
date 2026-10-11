import Image from "next/image";

type StudyBlogAuthorProps = {
  name: string;
  avatar: string;
  bio?: string;
};

export function StudyBlogAuthor({
  name,
  avatar,
  bio,
}: StudyBlogAuthorProps) {
  return (
    <div className="study-blog-author">
      <div className="study-blog-author__avatar">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={60}
          height={60}
          priority
        />
      </div>
      <div className="study-blog-author__info">
        <h3 className="study-blog-author__name">{name}</h3>
        {bio && (
          <p className="study-blog-author__bio">{bio}</p>
        )}
      </div>
    </div>
  );
}