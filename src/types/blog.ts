export type BlogPostSummary = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type BlogAuthor = {
  name: string;
  role: string;
  organization: string;
  bio: string;
  initials: string;
  /** A team byline, credited to an organisation rather than a person in structured data. */
  isTeam?: boolean;
};

export type BlogStat = {
  value: string;
  label: string;
  trend: string;
};

export type BlogContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: {
    title: string;
    body: string;
  };
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type RelatedBlogPost = {
  id: string;
  title: string;
  href: string;
};

export type BlogPostDetail = BlogPostSummary & {
  slug: string;
  /** Short label used in the breadcrumb trail. */
  shortTitle: string;
  publishedAt: string;
  author: BlogAuthor;
  tags: string[];
  tldr: string[];
  quote: {
    text: string;
    attribution: string;
  };
  introduction: BlogContentSection;
  stats: BlogStat[];
  comparison: {
    title: string;
    columns: [string, string, string];
    rows: [string, string, string][];
  };
  sections: BlogContentSection[];
  cta: {
    title: string;
    points: string[];
    label: string;
    href: string;
  };
  faqIntro: string;
  faqs: BlogFaq[];
};
