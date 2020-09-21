const baseConfig = require('./webpack.common')
const {merge} = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        contentBase: ['public','src/assets']
    },
    plugins: [
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('http://localhost:8080/')
        })
    ]


})