/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d21elisfc3zsvc.cloudfront.net",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
