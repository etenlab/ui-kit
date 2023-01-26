module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        use: [
          {
            loader: require.resolve("storybook-addon-package-json/loader")
          },
          {
            loader: require.resolve("@storybook/addon-storysource/loader")
          }
        ]
      }
    ]
  }
};