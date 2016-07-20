/*
 * This is the 'development' config for webpack
 * The command 'npm start' will use this config and will
 * allow for hot reloading and set up local server
 *
 */


var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    base: ['webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/index']
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'video-browser.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'js')
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { 
        test: /\.(png|jpg|svg)$/, 
        loader: 'url-loader?limit=8192' 
      }
    ]
  }
};