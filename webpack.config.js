const webpack = require('webpack');

const config = {
  entry: [
    
  ],
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015']
      }
    }
  ]
};

module.exports = config;