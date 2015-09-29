var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './dist',
    filename: 'main.js'
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['./app']
      },
      files: ['./app/*.html']
    })
  ]
}