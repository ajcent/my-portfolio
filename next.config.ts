import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
        pathname: "/th/id/**",
      },
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
