import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Flags Next.js releases that fix published security advisories when AI coding agents run
    // `next dev` or `next build`, so the app is kept on a patched version.
    agentUpgrade: "security",
  },
  // Files in public/images (logos, flags, the footer photo) are otherwise served with
  // max-age=0, so browsers re-check every one on each full page load. Browsers keep them for a
  // day, then keep using them for up to a week while checking for a newer copy in the
  // background. Give a replaced image a new file name if it must change everywhere at once.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  // Temporary (307) until an "All Programs" index page exists: "Start Your Journey", "Explore
  // Programs" and the blog calls to action all link to /programs. Remove this when adding
  // src/app/(marketing)/programs/page.tsx, or the redirect will shadow it.
  async redirects() {
    return [
      { source: "/programs", destination: "/programs/ai-leadership", permanent: false },
      { source: "/programs/leadership", destination: "/programs/ai-leadership", permanent: false },
    ];
  },
};

export default nextConfig;
