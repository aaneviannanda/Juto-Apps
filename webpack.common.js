const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/template_index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'src/public/images/logo/juto-resto-Apps.jpeg'),
        }),
    ],
};
