import { absoluteUrl, siteConfig, siteUrl } from "@/config/site";
import { contactDetails } from "@/content/pages/contact";
import type { BlogAuthor, BlogPostDetail } from "@/types/blog";
import type { Program } from "@/types/program";

/**
 * schema.org structured data (JSON-LD). The organisation and website are described once, in the
 * root layout, and other pages point to them by `@id`.
 */
const context = "https://schema.org";
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const organizationReference = {
  "@type": "EducationalOrganization",
  "@id": organizationId,
  name: siteConfig.name,
  url: absoluteUrl("/"),
};

type Crumb = { name: string; path: string };

function breadcrumbs(trail: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function author(byline: BlogAuthor) {
  if (byline.isTeam) {
    return { "@type": "Organization", name: byline.name, url: absoluteUrl("/") };
  }

  return {
    "@type": "Person",
    name: byline.name,
    jobTitle: byline.role,
    worksFor: { "@type": "Organization", name: byline.organization },
  };
}

/** The organisation and website, shown on every page. */
export function siteStructuredData() {
  return {
    "@context": context,
    "@graph": [
      {
        ...organizationReference,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo.src),
          width: siteConfig.logo.width,
          height: siteConfig.logo.height,
        },
        email: contactDetails.email,
        telephone: contactDetails.phoneHref.replace("tel:", ""),
        address: { "@type": "PostalAddress", ...siteConfig.address },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: siteConfig.name,
        inLanguage: siteConfig.language,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

/** A blog article and its breadcrumb trail (Home › Blog › article). */
export function blogPostStructuredData(post: BlogPostDetail) {
  const url = absoluteUrl(post.href);

  return {
    "@context": context,
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: absoluteUrl(post.imageSrc),
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: author(post.author),
        publisher: organizationReference,
        mainEntityOfPage: url,
        articleSection: post.category,
        keywords: post.tags.join(", "),
        inLanguage: siteConfig.language,
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.shortTitle, path: post.href },
      ]),
    ],
  };
}

/** A program as a Course offered by the school, with its fee when it reads like "USD 8,000". */
export function programStructuredData(program: Program) {
  const path = `/programs/${program.slug}`;
  const url = absoluteUrl(path);
  const fee = program.deliverables.fee.value.match(/^([A-Z]{3})\s*([\d,]+(?:\.\d+)?)$/);

  return {
    "@context": context,
    "@graph": [
      {
        "@type": "Course",
        "@id": `${url}#course`,
        name: program.name,
        description: program.metaDescription,
        url,
        image: absoluteUrl(program.hero.imageSrc),
        provider: organizationReference,
        inLanguage: siteConfig.language,
        ...(fee
          ? {
              offers: {
                "@type": "Offer",
                category: "Paid",
                price: Number(fee[2].replace(/,/g, "")),
                priceCurrency: fee[1],
                url,
              },
            }
          : {}),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: program.name, path },
      ]),
    ],
  };
}
