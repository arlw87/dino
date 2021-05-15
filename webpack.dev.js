const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 8181
    },
    module:{
        rules: [
            {
                test: '/\.js$',
                exclude: '/node_modules',
                loader: 'babel-loader'
            },
            //images
            {
                test: /\.jpg$/,
                type: 'asset/resource',
            },
            {
                test: /\.png$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                    }
                }]
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/views/index.html',
            filename: './index.html'
        })
    ]
}