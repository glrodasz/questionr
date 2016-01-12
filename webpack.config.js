// Modules
const path = require('path');

// Webpack plugins
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

// Constans
const APP_DIR = path.resolve(__dirname, 'app');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  context: APP_DIR,
  entry: './main',
  output: {
    path: DIST_DIR,
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: APP_DIR
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          minetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)(2)?$/,
        loader: "file"
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new CleanPlugin(['dist']),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['.'] },
      files: ['./*.html']
    })
  ]
}
