/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

if (process.env.NODE_ENV === 'production') {
  nextConfig = {
    ...nextConfig,
    basePath: 'hueforge-td',
  };
}

export default nextConfig;
