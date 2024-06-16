const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

if (isProd) {
  nextConfig = {
    ...nextConfig,
    basePath: 'hueforge-td',
  };
}

export default nextConfig;
