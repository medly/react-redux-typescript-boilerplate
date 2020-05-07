const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const SRC = path.resolve(__dirname, '../../src');
const DIST = path.resolve(__dirname, '../../dist');
const ENTRY = path.resolve(__dirname, '../../src/index');
const STATIC = path.resolve(__dirname, '../../public/static');
const INDEX_HTML = path.resolve(__dirname, '../../public/index.html');

module.exports = {
    entry: [ENTRY],
    performance: {
        maxAssetSize: 500000,
        maxEntrypointSize: 500000
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        symlinks: false,
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            icon: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                include: SRC,
                exclude: [/node_modules/, /\.spec.tsx?$/, /\.test.tsx?$/, /__snapshots__/, /__tests__/],
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 2,
                            workerParallelJobs: 50
                        }
                    },
                    'babel-loader',
                    'stylelint-custom-processor-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: INDEX_HTML,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new CopyPlugin([{ from: STATIC, to: DIST }]),
        new ForkTsCheckerWebpackPlugin(),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new webpack.HashedModuleIdsPlugin(),
        new CompressionPlugin()
    ]
};
