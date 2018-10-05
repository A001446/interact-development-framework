const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { getIfUtils, removeEmpty } = require('webpack-config-utils')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
    const { ifProd, ifNotProd } = getIfUtils(env);
    return {
        entry: {
            "agent-app": './src/apps/agent/agent-app.ts',
            "mobile-app": './src/apps/mobile/mobile-app.ts',
            "web-app": './src/apps/web/web-app.ts'
        },
        mode: ifProd('production', 'development'),
        devtool: ifProd('source-map', 'inline-source-map'),
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new VueLoaderPlugin()
        ],
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        output: {
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
    }
};