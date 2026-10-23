import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  /** The page's site path, e.g. "/about"; it becomes the canonical URL. */
  path: string;
  /** Use the title exactly, without the " | Canada School of Leadership" suffix. */
  absoluteTitle?: boolean;
  /** Share image; without one, links use the site-wide card from app/opengraph-image.tsx. */
  image?: { src: string; alt: string; width?: number; height?: number };
  /** Marks the page as an article for social cards. */
  article?: {
    publishedTime: string;
    authors: string[];
    section?: string;
    tags?: string[];
  };
};

// Search results cut titles off at around 60 characters, so the brand suffix is only added
// when the whole title still fits.
const titleLimit = 65;

/**
 * Title, description, canonical URL and social cards for one page. Open Graph and Twitter are
 * always set as whole objects: Next.js replaces a parent's nested metadata rather than merging
 * it, so a partial object here would drop the site name, locale, card type and share image.
 */
export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
  article,
}: PageMetadataOptions): Metadata {
  const brandedTitle = `${title} | ${siteConfig.name}`;
  const branded = !absoluteTitle && brandedTitle.length <= titleLimit;
  const shareTitle = branded ? brandedTitle : title;
  const { src, ...imageDetails } = image ?? siteConfig.shareImage;
  const images = [{ url: src, ...imageDetails }];
  const shared = {
    url: path,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: shareTitle,
    description,
    images,
  };

  return {
    title: branded ? title : { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: article
      ? {
          ...shared,
          type: "article",
          publishedTime: article.publishedTime,
          authors: article.authors,
          section: article.section,
          tags: article.tags,
        }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: images.map((entry) => entry.url),
    },
  };
}
