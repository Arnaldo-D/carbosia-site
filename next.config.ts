import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1) NON bloccare la build se ESLint trova errori
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2) NON bloccare la build se TypeScript trova errori
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
