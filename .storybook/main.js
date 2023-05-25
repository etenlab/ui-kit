const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    // Find the Babel loader in the Storybook Webpack configuration.
    const babelLoader = config.module.rules.find(
      (rule) =>
        rule.use && rule.use.loader && rule.use.loader.includes('babel-loader'),
    );
    // Exclude the `node_modules` folder from the Babel loader.
    if (babelLoader) {
      babelLoader.exclude = /node_modules/;
    }
    // Add a new rule for the `language-tags` module.
    config.module.rules.push({
      test: /\.js$/,
      include: [path.resolve(__dirname, '../node_modules/language-tags')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });

    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-react-loader'],
    });

    return config;
  },
};
