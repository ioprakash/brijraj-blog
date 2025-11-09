/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for Vercel deployment with dynamic routes
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
