# SEO, Search Console and Analytics

## What the site already provides

| URL / output | Source | Notes |
| --- | --- | --- |
| `/sitemap.xml` | `src/app/sitemap.ts` | Every public page, program and blog post (with images; posts with their publish date). Add new static pages to the list in that file. |
| `/robots.txt` | `src/app/robots.ts` | Production allows everything except `/api/` and links the sitemap. Preview deployments disallow everything. |
| Canonical URL, title, description, Open Graph and X cards | `createPageMetadata` in `src/lib/seo/metadata.ts` | Called by every page. Titles become "Page \| Canada School of Leadership". |
| Share image (1200 × 630) | `src/app/opengraph-image.tsx` | Used by pages without their own photo; programs and blog posts share their hero image. |
| Favicon, app icons, web manifest | `src/app/favicon.ico`, `icon.png`, `apple-icon.png`, `manifest.ts` | Cut from the logo mark. Replace the files when official icon artwork arrives. |
| Structured data (JSON-LD) | `src/lib/seo/structured-data.ts` | Organization and WebSite on every page; BlogPosting and breadcrumbs on articles; Course and breadcrumbs on programs. |
| No-index | `src/app/(marketing)/insights/layout.tsx` | The insights study blog is a prototype and stays out of search until it launches. |

Only the production deployment can be indexed. Vercel previews tag every page `noindex` and answer
robots.txt with `Disallow: /`, so they never compete with the live site.

## Environment variables (Vercel → Settings → Environment Variables → Production)

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The live address, e.g. `https://www.example.com` (no trailing slash). Without it, the Vercel production domain is used. |
| `GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag code (only if you verify with the meta tag). |
| `BING_SITE_VERIFICATION` | Bing Webmaster Tools `msvalidate.01` code (optional). |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` **or** `NEXT_PUBLIC_GTM_ID` | GA4 measurement id (`G-…`) for Analytics directly, or a Tag Manager container (`GTM-…`) with GA4 set up inside it. Set one, not both. |

Redeploy after changing any of them.

## Launch checklist

1. **Domain.** Add the custom domain in Vercel and set `NEXT_PUBLIC_SITE_URL` to it. Pick one form
   (with or without `www`) and let Vercel redirect the other to it.
2. **Search Console.** Add a property at <https://search.google.com/search-console>:
   - *Domain property* (recommended): add the TXT record Google shows to the domain's DNS.
   - *URL-prefix property*: choose "HTML tag", copy the `content` value into
     `GOOGLE_SITE_VERIFICATION`, redeploy, then press Verify.
3. **Submit the sitemap.** In Search Console → Sitemaps, submit `sitemap.xml`. Then use URL
   Inspection → Request indexing for the home page, About, the program page and Contact.
4. **Analytics.** In Google Analytics, create a GA4 property and a Web data stream for the live
   domain. Copy the measurement id (`G-…`) into `NEXT_PUBLIC_GA_MEASUREMENT_ID` and redeploy.
   Open the site and confirm your visit under Reports → Realtime.
5. **Conversions.** The site sends `cta_click`, `form_start`, `lead_submit` and `lead_error`. Once
   they appear in GA4 (Admin → Events, usually within a day), mark `lead_submit` as a key event.
6. **Link the two.** In GA4 Admin → Product links, link Search Console to see search queries in
   Analytics.
7. **Check the markup.** Run the home page, a program page and a blog article through the
   [Rich Results Test](https://search.google.com/test/rich-results), and paste a link into a
   LinkedIn post draft to preview the share card.
