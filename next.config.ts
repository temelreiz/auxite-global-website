import type { NextConfig } from "next";

// auxiteglobal.com is being consolidated into auxite.io. Every
// request gets a 301 (permanent) to the same path on auxite.io,
// preserving deep links so any backlinks pointing at e.g.
// auxiteglobal.com/about reach auxite.io/about. 301 transfers
// ~95% of accumulated link equity to the new domain, and Google
// uses it as the canonical merge signal — within a few weeks
// "auxite" searches surface auxite.io exclusively.
//
// Exception: keep /.well-known/* on this domain so any in-flight
// domain-verification or app-link assertions don't break during
// the SEO consolidation window. Once we confirm nothing is being
// served from .well-known here, the carve-out can be removed.

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/:path((?!\\.well-known).*)*',
        destination: 'https://auxite.io/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
