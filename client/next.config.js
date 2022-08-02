/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['leonardo.osnova.io']
  }
}

module.exports = nextConfig
