const svgr = require('@svgr/rollup');

module.exports = {
  // ...
  rollup(config, options) {
    // Add the SVGR plugin to the Rollup configuration
    config.plugins.push(
      svgr({
        include: ['**/*.svg'],
        // You can customize the options for the SVGR plugin here
        // For example, you can set `dimensions` to 'svg' to include width and height attributes in the SVG output
        // dimensions: 'svg',
      }),
    );

    return config;
  },
};
