const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './front/src',
    output: {
        path: path.resolve('./dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: '[name].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './front/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};
