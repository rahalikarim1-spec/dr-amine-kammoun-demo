import type { NextConfig } from "next";

const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: { globalNotFound: true },
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    // The site root has no content of its own: send visitors to the default language.
    // Add legacy / migration redirects below (redirect-ready architecture).
    return [{ source: "/", destination: "/fr/", permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default config;
