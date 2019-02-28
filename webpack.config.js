const path = require('path')

module.exports = {
  entry: {
    'global-footer': [
      './lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.js',
      './lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css',
      './lib-for-link/src/global-footer/modules/puli-guest-book/init.js',
      './lib-for-link/src/global-footer/modules/puli-handle-function/puli-handle-function.js',
      './lib-for-link/src/global-footer/modules/puli-handle-function/init-recent.js',
      './lib-for-link/src/global-footer/modules/puli-handle-function/init-comment.js'
    ],
    'global-header': [
      './lib-for-link/src/global-header/breeze-theme/breeze.js',
      './lib-for-link/src/global-header/script/google-analytics.js',
      './lib-for-link/src/global-header/script/script.js',
      './lib-for-link/src/global-header/style/style.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'lib-for-link/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
        use: [
          'style-loader', // 這個會後執行 (順序很重要)
          'css-loader' // 這個會先執行
        ]
      }
    ]
  }
}