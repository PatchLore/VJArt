import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/feed.xml',
        destination: '/feed',
      },
    ];
  },
};

export default nextConfig;
