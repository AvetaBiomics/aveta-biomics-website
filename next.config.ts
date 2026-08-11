import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without it, Next.js walks up
  // looking for a lockfile and can select a directory outside the project.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
