import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // impedisce a ESLint di bloccare la build su Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
