const path = require('path')

module.exports = {
  entry: {
    'global-footer': [
      './lib-for-link/src/global-footer/modules/puliGuestBook/puliGuestBook.js',
      './lib-for-link/src/global-footer/modules/puliGuestBook/init.js',
      './lib-for-link/src/global-footer/modules/puliHandleRecentFunction/puliHandleRecentFunction.js',
      './lib-for-link/src/global-footer/modules/puliHandleRecentFunction/init.js'
    ],
    'global-header': [
      './lib-for-link/src/global-header/script/google-analytics.js',
      './lib-for-link/src/global-header/script/script.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'lib-for-link/dist'),
    filename: '[name].js'
  }
}