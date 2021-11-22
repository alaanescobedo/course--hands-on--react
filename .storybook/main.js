const path = require('path')

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,  
      alias: { "@": path.resolve(__dirname, "../src") },
    },
  })
};
