const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'app.js',
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
        }, ],
    },
    plugins: [
        new NodemonPlugin()
    ],
    externals: [nodeExternals()],
    target: 'node',
};