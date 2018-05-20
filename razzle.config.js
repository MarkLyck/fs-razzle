const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    modify: (config, { target, dev }, webpack) => {
    
        // aliases
        config.resolve.alias.media = path.resolve(__dirname, 'src/media')
        config.resolve.alias.common = path.resolve(__dirname, 'src/common')
        config.resolve.alias.components = path.resolve(__dirname, 'src/components')
        config.resolve.alias.pages = path.resolve(__dirname, 'src/pages')


        // alias fontawesome icons while now doesn't have proper support for third party npm registries.
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faSignInAlt'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faSignInAlt')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faSignOutAlt'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faSignOutAlt')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faChartLine'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faChartLine')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faChartPie'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faChartPie')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faFlask'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faFlask')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faGift'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faGift')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faTasks'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faTasks')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faListUl'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faListUl')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faNewsPaper'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faNewsPaper')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faTachoMeter'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faTachoMeter')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faUser'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faUser')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faQuestionCircle'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faQuestionCircle')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faDollarSign'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faDollarSign')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faAngleDown'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faAngleDown')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faExclamationCircle'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faExclamationCircle')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faSpinnerThird'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-solid/faSpinnerThird')
        config.resolve.alias['@fortawesome/fontawesome-pro-regular/faTimes'] = path.resolve(__dirname, 'src/media/faIcons/fontawesome-pro-regular/faTimes')

        //plugins
        // config.plugins.push(new BundleAnalyzerPlugin())

        return config
    },
}