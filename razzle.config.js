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
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faAngleDown'] = path.resolve(__dirname, 'src/media/faIcons/faAngleDown')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faChartLine'] = path.resolve(__dirname, 'src/media/faIcons/faChartLine')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faChartPie'] = path.resolve(__dirname, 'src/media/faIcons/faChartPie')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faDollarSign'] = path.resolve(__dirname, 'src/media/faIcons/faDollarSign')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faExclamationCircle'] = path.resolve(__dirname, 'src/media/faIcons/faExclamationCircle')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faFlask'] = path.resolve(__dirname, 'src/media/faIcons/faFlask')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faGift'] = path.resolve(__dirname, 'src/media/faIcons/faGift')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faListUl'] = path.resolve(__dirname, 'src/media/faIcons/faListUl')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faNewspaper'] = path.resolve(__dirname, 'src/media/faIcons/faNewspaper')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faQuestionCircle'] = path.resolve(__dirname, 'src/media/faIcons/faQuestionCircle')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faSignInAlt'] = path.resolve(__dirname, 'src/media/faIcons/faSignInAlt')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faSignOutAlt'] = path.resolve(__dirname, 'src/media/faIcons/faSignOutAlt')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faSpinnerThird'] = path.resolve(__dirname, 'src/media/faIcons/faSpinnerThird')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faTachometer'] = path.resolve(__dirname, 'src/media/faIcons/faTachometer')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faTasks'] = path.resolve(__dirname, 'src/media/faIcons/faTasks')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faUser'] = path.resolve(__dirname, 'src/media/faIcons/faUser')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faUsers'] = path.resolve(__dirname, 'src/media/faIcons/faUsers')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faHourGlassHalf'] = path.resolve(__dirname, 'src/media/faIcons/faHourGlassHalf')
        config.resolve.alias['@fortawesome/fontawesome-pro-solid/faHourGlassEnd'] = path.resolve(__dirname, 'src/media/faIcons/faHourGlassEnd')
        config.resolve.alias['@fortawesome/fontawesome-pro-regular/faTimes'] = path.resolve(__dirname, 'src/media/faIcons/faTimes')
    
        //plugins
        // config.plugins.push(new BundleAnalyzerPlugin())

        return config
    },
}