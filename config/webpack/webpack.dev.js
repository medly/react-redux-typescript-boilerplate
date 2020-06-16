const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DIST = path.resolve(__dirname, '../../dist');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: DIST,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        hot: true,
        inline: true,
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        stats: { children: false },
    },
    devtool: 'eval-cheap-module-source-map',
});
