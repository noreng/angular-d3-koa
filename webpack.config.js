'use strict';

module.exports = {
  entry: './client/js/app.js',
  output: {
    path: './client/dist',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.json$/,
        loader: 'raw'
      }
    ]
  },
};