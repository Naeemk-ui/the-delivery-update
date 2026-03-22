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

        // Localization
        { source: '/lang/:path*', destination: `${legacyHost}/lang/:path*` },
      ],
    };
  },
};

export default nextConfig;