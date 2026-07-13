import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle so the Docker image stays small
  // and starts fast on Fly.io.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
