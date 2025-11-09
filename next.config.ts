import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // domains: ['shared.akamai.steamstatic.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shared.akamai.steamstatic.com',
        port: '',
        pathname: '/store_item_assets/**',
      },
    ],
  },
};

export default nextConfig;
