import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
};

module.exports = nextConfig;



export default nextConfig;
