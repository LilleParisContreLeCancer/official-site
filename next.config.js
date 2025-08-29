/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
