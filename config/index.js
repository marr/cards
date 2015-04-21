var path = require('path');
var ROOT_PATH = path.resolve(__dirname, '..');
module.exports = {
    entry: [path.join(ROOT_PATH, 'app/main.jsx')],
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
        }],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
}
