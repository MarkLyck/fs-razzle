const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  modify: (defaultConfig, { target, dev }, webpack) => {
    const config = defaultConfig // stay immutable here

    //plugins
    // config.plugins.push(new BundleAnalyzerPlugin())

    return config
  },
}
