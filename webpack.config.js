const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'lib-for-link/src/global-header/global-header.js'),
  output: {
    filename: 'global-header.js',
    path: path.resolve(__dirname, 'lib-for-link/dist')
  }
}