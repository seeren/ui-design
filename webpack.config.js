const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './src/index.scss',
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'ui-design.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    watchOptions: {
        ignored: [
            /node_modules/,
            /resources/,
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'ui-design.css' }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['index.html'],
            server: {
                baseDir: './',
            },
        }),
    ],
};
