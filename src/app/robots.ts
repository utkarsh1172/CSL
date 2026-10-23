import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexable } from "@/config/site";

/** Production invites every crawler (except into the API) and points it at the sitemap; previews turn all away. */
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
