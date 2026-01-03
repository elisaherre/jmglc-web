/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1];
const basePath = repoName ? `/${repoName}` : '';
const assetPrefix = basePath || '';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
