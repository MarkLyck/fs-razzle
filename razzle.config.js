const path = require('path')
const BrotliPlugin = require('brotli-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  modify: (defaultConfig, { target, dev }, webpack) => {
    const config = defaultConfig // stay immutable here'

    console.log(config)

    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      loader: 'responsive-loader',
      options: {
        adapter: require('responsive-loader/sharp'),
      },
    })

    if (target === 'web') {
      // modify filenaming to account for multiple entry files
      config.output.filename = dev ? 'static/js/[name].js' : 'static/js/[name].[hash:8].js'

      // add another entry point called vendor
      config.entry.vendor = [
        // will not know where the entry is without this.
        require.resolve('razzle/polyfills'),
      ]

      config.optimization.splitChunks = {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
        // Chunk splitting optimiztion
        chunks: 'all',
        // Switch off name generation, otherwise files would be invalidated
        // when more chunks with the same vendors are added
        name: false,
      }
    }

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
    }
    return config
  },
}
