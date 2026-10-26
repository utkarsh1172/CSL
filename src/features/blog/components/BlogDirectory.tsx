"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { RevealLines } from "@/components/ui/RevealLines";
import type { BlogPostSummary } from "@/types/blog";

import { AdvisorForm } from "./AdvisorForm";
import { BlogCard } from "./BlogCard";

type BlogDirectoryProps = {
  categories: readonly string[];
  posts: BlogPostSummary[];
};

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="10.8" cy="10.8" r="6.2" />
      <path d="m15.4 15.4 4.2 4.2" />
    </svg>
  );
}

export function BlogDirectory({ categories, posts }: BlogDirectoryProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = selectedCategory === null || post.category === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [posts, query, selectedCategory]);

  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 6);

  return (
    <>
      <section className="blog-hero" aria-labelledby="blog-heading">
        <div className="blog-hero__inner">
          <nav aria-label="Breadcrumb" className="blog-breadcrumb" data-reveal="eyebrow">
            <Link href="/">Home</Link>
            <span aria-hidden="true">&gt;</span>
            <span>Discover</span>
            <span aria-hidden="true">&gt;</span>
            <span aria-current="page">Blog</span>
          </nav>
          <div className="blog-hero__content">
            <h1 data-reveal="lines" id="blog-heading">
              <RevealLines text="Find our all blogs from here" />
            </h1>
            <p data-reveal="rise">
              Our latest articles on mentorships, learning and development, employee retention
            </p>
            <label className="blog-search" data-reveal="rise">
              <span className="sr-only">Search blogs</span>
              <SearchIcon />
              <input
                onChange={(event) => {
                  setQuery(event.target.value);
                  setShowAll(false);
                }}
                placeholder="Search Blogs..."
                type="search"
                value={query}
              />
            </label>
          </div>
        </div>
      </section>

      <section className="blog-content" aria-labelledby="recent-posts-heading">
        <div className="blog-content__inner">
          <div className="blog-toolbar" data-reveal="rise">
            <div className="blog-categories" aria-label="Filter blog categories">
              <span>categories</span>
              {categories.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <button
                    aria-pressed={isSelected}
                    data-boom-click=""
                    key={category}
                    onClick={() => {
                      setSelectedCategory(isSelected ? null : category);
                      setShowAll(false);
                    }}
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <a
              aria-label="Follow Canada School of Leadership on LinkedIn"
              className="blog-linkedin"
              data-boom-click=""
              href="https://www.linkedin.com"
              rel="noreferrer"
              target="_blank"
            >
              <span>Follow Us:</span>
              <Image
                alt=""
                aria-hidden="true"
                height={26}
                src="/images/brand/linkedin.svg"
                width={104}
              />
            </a>
          </div>

          <div className="blog-content__columns">
            <div className="blog-posts">
              <h2 data-reveal="rise" id="recent-posts-heading">
                Our Recent Post
              </h2>
              {visiblePosts.length > 0 ? (
                // Keyed by category so switching filters replays the card entrance for every result.
                <div className="blog-posts__grid" key={selectedCategory ?? "all"}>
                  {visiblePosts.map((post, index) => (
                    <BlogCard eager={index === 0} key={post.id} post={post} revealDelay={index % 3} />
                  ))}
                </div>
              ) : (
                <p className="blog-posts__empty">No blogs match your search yet.</p>
              )}

              {filteredPosts.length > 6 ? (
                <button
                  className="blog-view-more"
                  data-boom-click=""
                  onClick={() => setShowAll((current) => !current)}
                  type="button"
                >
                  {showAll ? "Show Less" : "View More"}
                </button>
              ) : null}
            </div>

            <AdvisorForm />
          </div>
        </div>
      </section>
    </>
  );
}
