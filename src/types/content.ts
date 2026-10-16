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
