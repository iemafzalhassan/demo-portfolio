
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NAME: process.env.NAME,
    },
    // Optimize images for production
    images: {
      unoptimized: true
    },
    // Configure for Docker deployment
    compress: true,
    generateEtags: false,
    poweredByHeader: false
}

module.exports = nextConfig