/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "as1.ftcdn.net", "images.pexels.com","randomuser.me" ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
