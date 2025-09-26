/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...your config...
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
