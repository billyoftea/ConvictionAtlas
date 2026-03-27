// @ts-check
const { composePlugins, withNx } = require('@nx/next');

/** @type {any} */
const nextConfig = {
  nx: {},
  output: 'export',
  basePath: '/ConvictionAtlas',
  assetPrefix: '/ConvictionAtlas/',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { devtoolSegmentExplorer: false },
};

module.exports = composePlugins(withNx)(nextConfig);
