const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV == 'development'

const config = {
    target: 'web',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/')
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         sourceMap: true
                    //     }
                    // },
                    'stylus-loader'
                ]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new htmlWebpackPlugin({
            title: '三人行'
        })
    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors:true
        },
        hot: true
    }
    config.mode = process.env.NODE_ENV
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
}

module.exports = config