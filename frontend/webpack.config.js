const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new MiniCssExtractPlugin('app.css'),
      ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['@babel/preset-es2015', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-async-to-generator']
            }
        }, {
            test: /\.css$/,
            loader: MiniCssExtractPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}