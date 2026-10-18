import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
