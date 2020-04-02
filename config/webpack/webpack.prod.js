const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DIST = path.resolve(__dirname, '../../dist');

const config = {
    mode: 'production',
    output: {
        path: DIST,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: '/',
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 10,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `vendor~${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
};

if (process.env.BUNDLE_ANALYZE) config.plugins = [new BundleAnalyzerPlugin()];

module.exports = merge(common, config);
