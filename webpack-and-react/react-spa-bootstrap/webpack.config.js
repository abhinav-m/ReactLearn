const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname,'src/client/app');
var APP_DIR = path.resolve(__dirname,'src/dist/');

module.exports = {

entry:  BUILD_DIR + '/index.jsx',
output: {
filename: 'bundle.js',
path: APP_DIR
},
module: {
loaders: [
{test: /\.jsx?/,
include:BUILD_DIR,
loader:'babel-loader'} 
]
},
plugins : [
new webpack.optimize.UglifyJsPlugin(),
new HtmlWebpackPlugin()
]



};

