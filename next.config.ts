import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/webmail/:path*",
        destination: "https://mail.elporvenirbiogrowers.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
