import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      }
    ]
  }
};

module.exports = nextConfig;
