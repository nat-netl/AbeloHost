import type { NextConfig } from "next";

const StylelintPlugin = require("stylelint-webpack-plugin");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/product-images/**",
      },
    ],
  },
};

export default nextConfig;
