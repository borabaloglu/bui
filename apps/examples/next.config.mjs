/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@borabaloglu/ui"],
  experimental: {
    esmExternals: "loose",
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
