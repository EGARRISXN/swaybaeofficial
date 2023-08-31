/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_EMAIL_USER: "sway.bae9000@gmail.com",
    NEXT_PUBLIC_EMAIL_PASS: "jhbniwvadgmhsdyk",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/assets/dog.png",
      },
    ],
  },
};

module.exports = nextConfig;
