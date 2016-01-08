const
  // Modules
  path = require('path'),

  // Webpack plugins
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanPlugin = require('clean-webpack-plugin');

  // Constans
  APP_DIR = path.resolve(__dirname, 'app'),
  DIST_DIR = path.resolve(__dirname, 'dist');

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
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(2)?$/,
        loader: "file-loader"
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
