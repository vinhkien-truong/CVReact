import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  basePath: "/CVReact",
  assetPrefix: "/CVReact/",
  images: {
    unoptimized: true
  }
};

export default nextConfig;