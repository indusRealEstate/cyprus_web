/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ["premium-realtor.com", "alsimatower.ae"],
    // unoptimized: true,
  },
  distDir: "build",
  // trailingSlash: true,
  // output: "export",
};

module.exports = nextConfig;
