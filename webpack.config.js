let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'phyloviewer/static/scripts/js');
let APP_DIR = path.resolve(__dirname, 'phyloviewer/static/scripts/');

let config = {
    entry: {
        phyloviewer: APP_DIR + '/phyloviewer.jsx',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};

module.exports = config;
