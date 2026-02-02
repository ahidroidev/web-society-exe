/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  /*experimental: {
    allowedDevOrigins: [
      "http://localhost:3000",
      "https://web-society-exe.vercel.app",
      "10.43.129.101",
    ],
  },*/
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
