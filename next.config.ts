import { NextConfig } from 'next';

// Ensure we use strict mode for type safety
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Enable experimental features if needed
  experimental: {
    // typedRoutes: true,
    // serverActions: true,
  },
  
  // Configure images if using remote sources
  images: {
    domains: [
      // 'example.com',
      // 'images.unsplash.com'
    ],
  },
  
  // Security headers for better protection
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        // Security headers based on best practices
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ],
};

export default nextConfig;