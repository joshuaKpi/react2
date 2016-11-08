var webpack = require('webpack');

module.exports = {
  entry: "./client/main.js",
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx$/,
        loader: "react-hot-loader/webpack!babel-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
}








/*
const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill'/!*,
    './client/main.js'*!/
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
};*/
