const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill'/*,
    './client/main.js'*/
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "bundle.js"
  },
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel-loader'],  // 'babel-loader' is also a valid name to reference
      include: [
          path.resolve(__dirname, '')
      ],
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
};