import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ... vos autres configurations
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
