import type { NextConfig } from "next";
const StylelintPlugin = require("stylelint-webpack-plugin");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

export default nextConfig;
