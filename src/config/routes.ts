import { programCatalog } from "@/content/programs/catalog";

/**
 * Paths the site has pages for. Menus and the footer also link to pages that are still to be
 * built (other programs, regional pages, terms, brochures); those links skip prefetching, or
 * every page view would fire a failing request for each one as it scrolls into view. Add a path
 * here when its page is created; program pages come from the catalog automatically.
 */
const builtPaths = new Set<string>([
  "/",
  "/about",
  "/blog",
  "/contact",
  "/success-stories",
  "/insights",
  // Redirects to the AI Leadership program until a programs index page exists (next.config.ts).
  "/programs",
  ...programCatalog.map((program) => `/programs/${program.slug}`),
]);

/** Whether an internal href leads to a page that exists (its #anchor and ?query are ignored). */
export function isBuiltRoute(href: string) {
  const path = href.split(/[?#]/)[0] || "/";
  return builtPaths.has(path);
}

/** `prefetch` for a Link: the default for built pages, off for pages still to come. */
export function prefetchFor(href: string) {
  return isBuiltRoute(href) ? undefined : false;
}
