import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  devIndicators: false, // Hii inaondoa kabisa ile alama ya 'N' kwenye ukurasa wako
};

export default nextConfig;