/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['leonardo.osnova.io']
  }
}

module.exports = nextConfig
