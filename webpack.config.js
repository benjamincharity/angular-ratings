var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var path = require('path');

var libraryName = 'angular-ratings';


var config = {
    entry: {
        "angular-ratings": "./src/index.js",
        "angular-ratings.min": "./src/index.js",
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: "[name].js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'ng-annotate',
                    'babel?presets[]=es2015'
                ],
                exclude: /bower_components/
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate!html'
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};

module.exports = config;

