var path = require('path');
var ROOT_PATH = path.resolve(__dirname, '..');
var webpack = require('webpack');

var bower_dir = ROOT_PATH + '/bower_components';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    bail: true,
    entry: {
        app: './app/main.js',
        vendors: ['react']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            // test for both js and jsx
            test: /\.jsx?$/,

            // use babel loader
            loader: 'babel',

            // operate only on our app directory
            include: path.join(ROOT_PATH, 'app'),
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css'],
        },
        {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        }],
        noParse: [],
    },
    resolve: {
        alias: {},
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        quiet: false
    }
};

//config.addVendor('react', bower_dir + '/react/react.min.js');
config.addVendor('react', bower_dir + '/react/react.js');

module.exports = config;
