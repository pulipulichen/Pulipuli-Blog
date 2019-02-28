const path = require('path')

module.exports = {
  entry: {
    'global-footer': [
      './lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.js',
      './lib-for-link/src/global-footer/modules/puli-guest-book/puli-guest-book.css',
      './lib-for-link/src/global-footer/modules/puli-guest-book/init.js',
      
      './lib-for-link/src/global-footer/modules/puli-handle-function/puli-handle-function.js',
      './lib-for-link/src/global-footer/modules/puli-handle-function/init-recent.js',
      './lib-for-link/src/global-footer/modules/puli-handle-function/init-comment.js',
      
      './lib-for-link/src/global-footer/script/gsc-search.js'
    ],
    'global-header': [
      './lib-for-link/src/global-header/style/style.css',
      './lib-for-link/src/global-header/style/2_style.css',
      './lib-for-link/src/global-header/style/3_custom_style.css',
      './lib-for-link/src/global-header/style/header.css',
      './lib-for-link/src/global-header/style/search-bar.css',
      
      './lib-for-link/src/global-header/breeze-theme/breeze.js',
      './lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css',
      './lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css',
      './lib-for-link/src/global-header/script/google-analytics.js',
      './lib-for-link/src/global-header/script/script.js',
      './lib-for-link/src/global-header/script/facebook.js'
    ],
    'item-header': [
      './lib-for-link/src/item-header/style/style-item.css',
      
      './lib-for-link/src/item-header/script/script-item.js',
      './lib-for-link/src/item-header/modules/related-posts/printRelatedLabels_thumbs.js',
      './lib-for-link/src/item-header/modules/related-posts/related-posts.js',
    ],
    'item-print': [
      './lib-for-link/src/item-print/style/style-print.css',
      //'./lib-for-link/src/item-print/style/gutenberg.min.css'
    ],
    'item-owl': [
      './lib-for-link/src/item-olw/style/style-olw.css'
    ],
    'page': [
      './lib-for-link/src/page/style/style-page.css'
    ],
    'item-footer': [
      './lib-for-link/src/item-footer/modules/highlight/default.min.css',
      './lib-for-link/src/item-footer/modules/highlight/highlight.min.js',
      './lib-for-link/src/item-footer/modules/highlight/init.js',
      
      './lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css',
      //'./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js',
      './lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js'
    ],
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