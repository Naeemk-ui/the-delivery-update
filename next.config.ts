import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Points to your live backend. 
    const legacyHost = process.env.LEGACY_BACKEND_URL || 'https://thedelivery.co.za';

    return {
      beforeFiles: [
        // Preserved Onboarding Flows
        { source: '/vendor/apply', destination: `${legacyHost}/vendor/apply` },
        { source: '/deliveryman/apply', destination: `${legacyHost}/deliveryman/apply` },

        // Preserved Legal & Policy Pages
        { source: '/privacy-policy', destination: `${legacyHost}/privacy-policy` },
        { source: '/terms-and-conditions', destination: `${legacyHost}/terms-and-conditions` },
        { source: '/refund', destination: `${legacyHost}/refund` },
        { source: '/shipping-policy', destination: `${legacyHost}/shipping-policy` },
        { source: '/cancelation', destination: `${legacyHost}/cancelation` },

        // Localization
        { source: '/lang/:path*', destination: `${legacyHost}/lang/:path*` },
      ],
    };
  },
};

export default nextConfig;