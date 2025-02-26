import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  env: {
    REACT_APP_BRANCH: process.env.VERCEL_GIT_COMMIT_REF,
  },
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'components/'),
      context: path.resolve(__dirname, 'context/'),
      utils: path.resolve(__dirname, 'utils/'),
    };
    
    return config;
  },
};

export default nextConfig;
