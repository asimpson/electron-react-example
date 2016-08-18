const webpack = require('webpack');
module.exports = {
  entry: [
    './components/Root.js'
  ],
  output: {
    path: __dirname,
    filename: "app.js"
  },
  target: 'electron',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
