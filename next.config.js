require('dotenv').config();
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'b.zmtcdn.com'],
  }
}

module.exports = nextConfig
