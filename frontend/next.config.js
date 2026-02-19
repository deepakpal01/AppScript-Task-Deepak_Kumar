/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com', 'i.pravatar.cc'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**',
      },
    ],
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://figma-plp-build.preview.emergentagent.com',
  },
}

module.exports = nextConfig
