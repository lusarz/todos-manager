var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/frontend-semantic-ui-react/app',
  entry: './js/app.js',
  output: {
    path: __dirname + '/frontend-semantic-ui-react/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  },
};
