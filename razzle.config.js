const path = require('path')
const BrotliPlugin = require('brotli-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  modify: (defaultConfig, { target, dev }, webpack) => {
    const config = defaultConfig // stay immutable here'

    console.log('!!! target', target)
    // console.log('!!! config', config)

    //plugins
    if (!dev) {
      config.devtool = ''
      config.plugins.push(
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|jsx|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
        })
      )
      // config.plugins.push(new BundleAnalyzerPlugin())

      config.optimization = {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }
    return config
  },
}
