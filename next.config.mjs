/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allows any hostname
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
