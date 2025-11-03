import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  // Note: Security headers are served via `public/_headers` for static export.
};

export default nextConfig;

