var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var APP = path.resolve(__dirname, 'app');
var DIST = path.resolve(__dirname, 'dist');

module.exports = {
  context: APP,
  entry: './main.js',
  output: {
    path: DIST,
    filename: 'main.js'
  },
  plugins: [
    new CleanPlugin(['dist']),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['.']
      },
      files: ['./*.html']
    })
  ]
}