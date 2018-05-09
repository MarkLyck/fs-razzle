const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    modify: (config, { target, dev }, webpack) => {
    
        // aliases
        config.resolve.alias.media = path.resolve(__dirname, 'src/media')
        config.resolve.alias.common = path.resolve(__dirname, 'src/common')
        config.resolve.alias.components = path.resolve(__dirname, 'src/components')
        config.resolve.alias.pages = path.resolve(__dirname, 'src/pages')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid$'] = '@fortawesome/fontawesome-free-solid/shakable.es.js'

        //plugins
        // config.plugins.push(new BundleAnalyzerPlugin())

        return config
    },
}