const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: pathTo('js'),
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
                test: /\.(png|svg)$/,
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
            template: path.resolve(pathTo('html'), 'index.html')
        }),
        new HtmlWebpackInlineSVGPlugin({
            runPreEmit: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    resolve: {
        alias: {
            styles: pathTo('styles'),
            images: pathTo('images'),
            js: pathTo('js')
        }
    }
};

function pathTo(front_folder) {
    return path.resolve(__dirname, 'front/src', front_folder);
}
