import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Robots-Tag", value: "all" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/menus", destination: "/menus-prices", permanent: true },
      { source: "/locations", destination: "/store-locator", permanent: true },
      { source: "/blog", destination: "/posts", permanent: true },
      { source: "/post/:slug", destination: "/posts/:slug", permanent: true },
      { source: "/category/:slug", destination: "/categories/:slug", permanent: true },
      { source: "/login", destination: "/", permanent: false },
      { source: "/auth", destination: "/", permanent: false },
      { source: "/admin", destination: "/", permanent: false },
      { source: '/menus-prices/desserts', destination: '/posts/papa-johns-desserts', permanent: true },
      { source: '/menus-prices/drinks', destination: '/drinks', permanent: true },
    ];
  },
  experimental: {
    optimizeCss: false, // Turn on in prod for experimental optimization
  },
};

export default nextConfig;

