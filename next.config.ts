import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle so the Docker image stays small
  // and starts fast on Fly.io.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  // Canonical URLs carry trailing slashes, matching the content front-matter
  // and the URL disposition manifest conventions.
  trailingSlash: true,
  // All legacy-URL dispositions live in src/proxy.ts + src/lib/redirects.ts
  // (single source of truth, single-hop 301s, 410 support).
};

export default nextConfig;
