const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill'/*,
    './client/main.js'*/
  ],
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "bundle.js"
  },
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel-loader', 'react-hot'], // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
};