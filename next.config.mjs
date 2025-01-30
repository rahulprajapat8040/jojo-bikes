/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/.well-known/acme-challenge/:path*",
          destination: "/public/.well-known/acme-challenge/:path*",
        },
      ];
    },
  };
  
  export default nextConfig;
  