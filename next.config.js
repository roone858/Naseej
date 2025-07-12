/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "as1.ftcdn.net" },
      { hostname: "images.pexels.com" },
      { hostname: "randomuser.me" },
    ],
  },
};

module.exports = nextConfig;
