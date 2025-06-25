import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   typescript: {
    ignoreBuildErrors: true, // ⚠️ Skips type errors during build — use with caution
  },
};

export default nextConfig;
