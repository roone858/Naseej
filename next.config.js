/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "as1.ftcdn.net" },
      { hostname: "images.pexels.com" },
      { hostname: "randomuser.me" },
      { hostname: "winsfolio.net" },
      { hostname: "cdn.pixabay.com" },
      { hostname: "www.w3schools.com" },
      { hostname: "www.freepik.com" },
      { hostname: "cdn.pixabay.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
