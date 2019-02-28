const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'lib-for-link/global/src/index.js'),
  output: {
    filename: 'global.js',
    path: path.resolve(__dirname, 'lib-for-link/global/dist')
  }
};