import type { NextConfig } from "next";

// Static export -> Cloudflare Pages. The turbopack rule is what makes Tailwind work.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": { as: "*.css", loaders: ["@tailwindcss/turbopack"] },
    },
  },
};

export default nextConfig;