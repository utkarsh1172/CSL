import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import type { BlogContentSection, BlogPostDetail, RelatedBlogPost } from "@/types/blog";

import { BlogAdvisorForm } from "./BlogAdvisorForm";

type BlogArticleProps = {
  post: BlogPostDetail;
  relatedPosts: RelatedBlogPost[];
};

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.2 7.7H1.6V22h3.6V7.7ZM3.4 2A2.1 2.1 0 1 0 3.4 6.2 2.1 2.1 0 0 0 3.4 2ZM22.4 13.8c0-4.3-2.3-6.4-5.4-6.4-2.5 0-3.6 1.4-4.2 2.3v-2H9.2V22h3.6v-7.1c0-1.9.4-3.8 2.8-3.8s2.4 2.2 2.4 3.9v7h3.6l.8-8.2Z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M18.2 5.7c3.1-3 6.8-3.3 8.3-3.2.1 1.5-.2 5.2-3.2 8.3l-7.8 7.8-5.1-5.1 7.8-7.8Z" />
      <path d="m10.5 13.5-4.4.5-3.6 3.6 6.1 1.1M15.5 18.5l-.5 4.4-3.6 3.6-1.1-6.1" />
      <circle cx="20.8" cy="8.8" r="2.2" />
      <path d="M7.8 21.5c-2.8.7-4.3 2.3-4.8 5.5 3.2-.5 4.8-2 5.5-4.8M11.6 17.2l3.2 3.2" />
    </svg>
  );
}

function ArticleSection({ section }: { section: BlogContentSection }) {
  return (
    <section className="article-section" data-reveal="rise">
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul>
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.note ? (
        <aside className="article-note">
          <h3>{section.note.title}</h3>
          <p>{section.note.body}</p>
        </aside>
      ) : null}
    </section>
  );
}

export function BlogArticle({ post, relatedPosts }: BlogArticleProps) {
  const publishedDate = new Intl.DateTimeFormat("en-CA", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <>
      <SiteHeader />
      <main className="article-page">
        <article>
          <div className="article-shell">
            <nav aria-label="Breadcrumb" className="article-breadcrumb" data-reveal="eyebrow">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span>Discover</span>
              <span aria-hidden="true">›</span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{post.shortTitle}</span>
            </nav>

            <header className="article-header">
              <div className="article-heading-row">
                <h1 data-reveal="lines">
                  <RevealLines text={post.title} />
                </h1>
                <div className="article-share" data-reveal="rise" data-reveal-delay="3">
                  <a
                    aria-label="Share this article on LinkedIn"
                    data-boom-click=""
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://canadaschoolofleadership.com${post.href}`)}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="article-share__linkedin">
                      <LinkedInIcon />
                    </span>
                    <span>Share this Article</span>
                  </a>
                  <a
                    aria-label="Share this article by email"
                    className="article-share__email"
                    data-boom-click=""
                    href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`https://canadaschoolofleadership.com${post.href}`)}`}
                  >
                    <ShareIcon />
                  </a>
                </div>
              </div>

              <div className="article-hero" data-reveal="zoom" data-reveal-delay="4">
                <Image
                  alt={post.imageAlt}
                  height={409}
                  priority
                  sizes="(max-width: 760px) calc(100vw - 28px), 1100px"
                  src={post.imageSrc}
                  width={1084}
                />
              </div>

              <div className="article-meta" data-reveal="rise" data-reveal-delay="5">
                <div className="article-tags" aria-label="Article topics">
                  {post.tags.map((tag, index) => (
                    <span key={`${tag}-${index}`}>{tag}</span>
                  ))}
                </div>
                <p>
                  <time dateTime={post.publishedAt}>{publishedDate}</time>
                  <span aria-hidden="true"> | </span>
                  Written By: {post.author.name}
                </p>
              </div>
            </header>

            <section
              aria-labelledby="article-tldr-title"
              className="article-tldr"
              data-reveal="card"
            >
              <div className="article-tldr__header">
                <h2 id="article-tldr-title">
                  <span className="article-tldr__rocket">
                    <RocketIcon />
                  </span>
                  TL;DR
                </h2>
                <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
                  Follow Us:
                  <strong>Linked</strong>
                  <span className="article-tldr__linkedin">
                    <LinkedInIcon />
                  </span>
                </a>
              </div>
              <ol>
                {post.tldr.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <div className="article-content-grid">
              <div className="article-copy">
                <ArticleSection section={post.introduction} />

                <blockquote className="article-quote" data-reveal="rise">
                  <p>“{post.quote.text}”</p>
                  <cite>— {post.quote.attribution}</cite>
                </blockquote>

                {post.sections.map((section, index) => (
                  <div key={section.title}>
                    <ArticleSection section={section} />

                    {index === 0 ? (
                      <>
                        <section
                          aria-label={`${post.shortTitle} key figures`}
                          className="article-stats"
                          data-reveal="rise"
                        >
                          {post.stats.map((stat, statIndex) => (
                            <div
                              data-reveal="card"
                              data-reveal-delay={statIndex + 1}
                              key={stat.label}
                            >
                              <span>{stat.trend}</span>
                              <strong>
                                <BoomCounter value={stat.value} />
                              </strong>
                              <p>{stat.label}</p>
                            </div>
                          ))}
                        </section>

                        <section className="article-comparison" data-reveal="rise">
                          <h2>{post.comparison.title}</h2>
                          <div className="article-table-wrap">
                            <table>
                              <thead>
                                <tr>
                                  {post.comparison.columns.map((column) => (
                                    <th key={column} scope="col">
                                      {column}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {post.comparison.rows.map((row) => (
                                  <tr key={row[0]}>
                                    {row.map((cell, cellIndex) =>
                                      cellIndex === 0 ? (
                                        <th key={cell} scope="row">
                                          {cell}
                                        </th>
                                      ) : (
                                        <td key={cell}>{cell}</td>
                                      ),
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </section>
                      </>
                    ) : null}
                  </div>
                ))}

                <aside className="article-cta" data-reveal="card">
                  <h2>{post.cta.title}</h2>
                  <ul>
                    {post.cta.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link data-boom-click="" href={post.cta.href}>
                    {post.cta.label}
                  </Link>
                </aside>

                <section
                  aria-labelledby="article-faq-heading"
                  className="article-faq"
                  data-reveal="rise"
                >
                  <h2 id="article-faq-heading">FAQ</h2>
                  <p>{post.faqIntro}</p>
                  <div>
                    {post.faqs.map((faq, index) => (
                      <details key={faq.question} open={index === 0}>
                        <summary>{faq.question}</summary>
                        <p>{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>

                <aside aria-label="About the author" className="article-author" data-reveal="card">
                  <div className="article-author__identity">
                    <span className="article-author__avatar" aria-hidden="true">
                      {post.author.initials}
                    </span>
                    <div>
                      <p>Author profile</p>
                      <strong>{post.author.name}</strong>
                      <span>{post.author.role}</span>
                      <span>{post.author.organization}</span>
                    </div>
                  </div>
                  <span className="article-author__linkedin" aria-hidden="true">
                    <LinkedInIcon />
                  </span>
                  <p>{post.author.bio}</p>
                </aside>
              </div>

              <BlogAdvisorForm />
            </div>
          </div>

          <section
            aria-labelledby="related-blogs-heading"
            className="related-blogs"
            data-reveal="rise"
          >
            <div className="related-blogs__inner">
              <h2 id="related-blogs-heading">Our Related Blogs</h2>
              <div>
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    data-boom-click=""
                    data-reveal="card"
                    data-reveal-delay={index}
                    href={relatedPost.href}
                    key={relatedPost.id}
                  >
                    <span>{relatedPost.title}</span>
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
