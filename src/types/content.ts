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