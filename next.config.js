/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      experimental,
      {
        allowedDevOrigins: [
          "http://localhost:3000",
          "https://web-society-exe.vercel.app",
          "10.43.129.101",
        ],
      },
    ],
  },
};

module.exports = nextConfig;
