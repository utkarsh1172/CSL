export type StudyBlogPost = {
  id: string
  title: string
  excerpt: string
  content: string  // HTML or markdown
  coverImage: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string  // ISO date
  tags: string[]
  readTime: number  // in minutes
}

export type StudyBlogAuthor = {
  name: string
  avatar: string
  bio?: string
}
export type FaqItem = {
  question: string
  answer: string
}

export type IndustryBrand = {
  name: string
  /** Typographic wordmark shown in place of the organisation's logo file. */
  mark: string
  sub?: string
  /** Picks the wordmark's styling: `brand-wordmark--${tone}`. */
  tone: "orion" | "rogers" | "scotiabank" | "kyndryl" | "tcs"
  sector: string
}

/** Two-tone heading copy: `title` renders in ink, `accent` in brand blue. */
export type HeadingContent = {
  eyebrow?: string
  title: string
  accent?: string
  description?: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  organization: string
  region: string
}

export type Mentor = {
  name: string
  role: string
  /** Local portrait used in mentor and coach rosters. */
  imageSrc?: string
  /** Portraits sit beside a visible name, so an empty alt keeps that name from being repeated. */
  imageAlt?: string
  /** Public LinkedIn profile, opened by "View profile". Leave it out until a confirmed URL exists. */
  linkedinHref?: string
}
