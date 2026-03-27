//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const isProd = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  experimental: {
    devtoolSegmentExplorer: false,
  },
  // GitHub Pages 静态导出配置
  ...(isProd && {
    output: 'export',
    basePath: '/ConvictionAtlas',
    assetPrefix: '/ConvictionAtlas/',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
};

const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
