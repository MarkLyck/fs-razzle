const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  modify: (defaultConfig, { target, dev }, webpack) => {
    const config = defaultConfig // stay immutable here

    // aliases
    config.resolve.alias = {
      media: path.resolve(__dirname, 'src/media'),
      common: path.resolve(__dirname, 'src/common'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      // alias fontawesome icons while now doesn't have proper support for third party npm registries.
      '@fortawesome/fontawesome-pro-solid/faAngleDown': path.resolve(__dirname, 'src/media/faIcons/faAngleDown'),
      '@fortawesome/fontawesome-pro-solid/faChartLine': path.resolve(__dirname, 'src/media/faIcons/faChartLine'),
      '@fortawesome/fontawesome-pro-solid/faChartPie': path.resolve(__dirname, 'src/media/faIcons/faChartPie'),
      '@fortawesome/fontawesome-pro-solid/faDollarSign': path.resolve(__dirname, 'src/media/faIcons/faDollarSign'),
      '@fortawesome/fontawesome-pro-solid/faExclamationCircle': path.resolve(
        __dirname,
        'src/media/faIcons/faExclamationCircle'
      ),
      '@fortawesome/fontawesome-pro-solid/faFlask': path.resolve(__dirname, 'src/media/faIcons/faFlask'),
      '@fortawesome/fontawesome-pro-solid/faGift': path.resolve(__dirname, 'src/media/faIcons/faGift'),
      '@fortawesome/fontawesome-pro-solid/faListUl': path.resolve(__dirname, 'src/media/faIcons/faListUl'),
      '@fortawesome/fontawesome-pro-solid/faNewspaper': path.resolve(__dirname, 'src/media/faIcons/faNewspaper'),
      '@fortawesome/fontawesome-pro-solid/faQuestionCircle': path.resolve(
        __dirname,
        'src/media/faIcons/faQuestionCircle'
      ),
      '@fortawesome/fontawesome-pro-solid/faSignInAlt': path.resolve(__dirname, 'src/media/faIcons/faSignInAlt'),
      '@fortawesome/fontawesome-pro-solid/faSignOutAlt': path.resolve(__dirname, 'src/media/faIcons/faSignOutAlt'),
      '@fortawesome/fontawesome-pro-solid/faSpinnerThird': path.resolve(__dirname, 'src/media/faIcons/faSpinnerThird'),
      '@fortawesome/fontawesome-pro-solid/faTachometer': path.resolve(__dirname, 'src/media/faIcons/faTachometer'),
      '@fortawesome/fontawesome-pro-solid/faTasks': path.resolve(__dirname, 'src/media/faIcons/faTasks'),
      '@fortawesome/fontawesome-pro-solid/faUser': path.resolve(__dirname, 'src/media/faIcons/faUser'),
      '@fortawesome/fontawesome-pro-solid/faUsers': path.resolve(__dirname, 'src/media/faIcons/faUsers'),
      '@fortawesome/fontawesome-pro-solid/faHourglassHalf': path.resolve(
        __dirname,
        'src/media/faIcons/faHourglassHalf'
      ),
      '@fortawesome/fontawesome-pro-solid/faHourglassEnd': path.resolve(__dirname, 'src/media/faIcons/faHourglassEnd'),
      '@fortawesome/fontawesome-pro-regular/faTimes': path.resolve(__dirname, 'src/media/faIcons/faTimes'),
    }

    //plugins
    // config.plugins.push(new BundleAnalyzerPlugin())

    return config
  },
}
