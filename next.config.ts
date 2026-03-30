import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/webmail/:path*",
        destination: "https://webmail.siteground.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
