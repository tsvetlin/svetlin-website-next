import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //output: 'export',
  output: 'standalone', // Required for Docker deployment
};

export default nextConfig;
