/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'wordpress'], // Add your WordPress domain here
  },
}

module.exports = nextConfig 