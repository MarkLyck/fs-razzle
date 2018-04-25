const path = require('path')

module.exports = {
    modify: (config, { target, dev }, webpack) => {

        // aliases
        config.resolve.alias.common = path.resolve(__dirname, 'src/common')
        config.resolve.alias.components = path.resolve(__dirname, 'src/components')
        config.resolve.alias.pages = path.resolve(__dirname, 'src/pages')

        return config
    },
}