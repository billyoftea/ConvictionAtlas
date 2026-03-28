// @ts-check
const { composePlugins, withNx } = require('@nx/next');

const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {any} */
const nextConfig = {
  nx: {},
  output: 'export',
  basePath: isGithubPages ? '/ConvictionAtlas' : undefined,
  assetPrefix: isGithubPages ? '/ConvictionAtlas/' : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { devtoolSegmentExplorer: false },
};

module.exports = composePlugins(withNx)(nextConfig);
