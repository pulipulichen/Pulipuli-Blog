const path = require('path')
var glob = require("glob")

/**
 * 列出檔案清單
 * @author Pulipuli Chen 20190303
 **/
function getFilelist (dir) {
  let filelist = glob.sync(path.join(dir, '**/*.css'))
      .concat(glob.sync(path.join(dir, '**/*.js')))
      .concat(glob.sync(path.join(dir, '**/*.less')))
      .filter((file) => {
        return (!file.endsWith('entry.js') 
          && !file.endsWith('.mocha-test.js')
          && !file.endsWith('.mocha-test-skip.js')
          && !file.endsWith('.selenium-test.js')
          && !file.endsWith('.selenium-test-skip.js')
          && (file.indexOf('/tmp/') === -1)
          && (file.indexOf('/ignore/') === -1))
      })
      .map(item => './' + item)
  return filelist
}

let webpackConfig  = {
  //cache: true,
  devtool: 'source-map',
  entry: {
    'global-header': [
      './lib-for-link/src/global-header/breeze-theme/font-awesome.css',
      './lib-for-link/src/global-header/breeze-theme/googleapis-font-family-crete-round.css',
      './lib-for-link/src/global-header/breeze-theme/googleapis-font-family-lato.css',
      
      './lib-for-link/src/global-header/go-top/go-top.less',
      './lib-for-link/src/global-header/go-top/go-top.js',
      
      './lib-for-link/src/global-header/sidebar/sidebar.less',
      './lib-for-link/src/global-header/sidebar/sidebar.js',
      
      './lib-for-link/src/global-header/btn-navbar/nav-collapse.less',
      './lib-for-link/src/global-header/btn-navbar/btn-navbar.less',
      './lib-for-link/src/global-header/btn-navbar/btn-navbar.js',
      
      './lib-for-link/src/global-header/style/masthead.less',
      './lib-for-link/src/global-header/style/2_style.less',
      './lib-for-link/src/global-header/style/3_custom_style.less',
      './lib-for-link/src/global-header/style/header.less',
      './lib-for-link/src/global-header/style/addthis.css',
      './lib-for-link/src/global-header/style/navbar.less',
      //'./lib-for-link/src/global-header/style/search-bar.css',
      './lib-for-link/src/global-header/style/index.less',
      './lib-for-link/src/global-header/style/style.less',
      
      './lib-for-link/src/global-header/gsc-search/default.css',
      './lib-for-link/src/global-header/gsc-search/gsc-search-bar-placeholder.less',
      './lib-for-link/src/global-header/gsc-search/gsc-search-bar.less',
      './lib-for-link/src/global-header/gsc-search/gsc-search-result.less',
      './lib-for-link/src/global-header/gsc-search/gsc-search.js',
      
      './lib-for-link/src/global-header/modules/lscache/lscache.js',
      './lib-for-link/src/global-header/modules/lscache/lscacheHelper.js',
      
      './lib-for-link/src/global-header/breeze-theme/breeze.js',
      './lib-for-link/src/global-header/script/google-analytics.js',
      './lib-for-link/src/global-header/script/facebook.js',
      './lib-for-link/src/global-header/script/env-variables.js',
      './lib-for-link/src/global-header/script/back-button.js',
      './lib-for-link/src/global-header/script/script.js'
    ],
    'global-footer': [
      './lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.js',
      './lib-for-link/src/global-footer/puli-guest-book/puli-guest-book.css',
      './lib-for-link/src/global-footer/puli-guest-book/init.js',
      
      './lib-for-link/src/global-footer/blogger-feed-loader/random-posts.js',
      './lib-for-link/src/global-footer/blogger-feed-loader/recent-lib.js',
      './lib-for-link/src/global-footer/blogger-feed-loader/comment-lib.js',
      './lib-for-link/src/global-footer/blogger-feed-loader/init.js',
    ],
    'item-header': [
      './lib-for-link/src/item-header/style/article-meta.css',
      './lib-for-link/src/item-header/style/comment.css',
      './lib-for-link/src/item-header/style/go-top.less',
      './lib-for-link/src/item-header/style/image.less',
      './lib-for-link/src/item-header/style/backlinks.css',
      './lib-for-link/src/item-header/style/sidebar.css',
      './lib-for-link/src/item-header/style/comment-form-tool.less',
      './lib-for-link/src/item-header/style/style-item.css',
      
      './lib-for-link/src/item-header/script/script-item.js',
      './lib-for-link/src/item-header/modules/related-posts/related-posts.js',
      './lib-for-link/src/item-header/modules/related-posts/jQueryOwlCarousel.js',
      './lib-for-link/src/item-header/modules/related-posts/printRelatedLabels_thumbs.js',
      
      './lib-for-link/src/item-header/style-print/style-print.css',
      //'./lib-for-link/src/item-header/style-print/gutenberg.min.css'
    ],
    'item-footer': [
      './lib-for-link/src/item-footer/modules/highlight/default.css',
      './lib-for-link/src/item-footer/modules/highlight/highlight.js',
      './lib-for-link/src/item-footer/modules/highlight/init.js',
      
      //'./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/css/lightbox.css',
      //'./lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/js/lightbox.js',
      './lib-for-link/src/item-footer/modules/lightbox2-lokeshdhakar/init.js',
      
      './lib-for-link/src/item-footer/modules/disqus/disqus.css',
      './lib-for-link/src/item-footer/modules/disqus/disqus.js',
      './lib-for-link/src/item-footer/modules/disqus/blogger_item.js',
      
      './lib-for-link/src/item-footer/script/admin-tools.js',
    ],
    'admin-tools': [
      //'./lib-for-link/src/admin-tools/article-download/beautify.js',
      //'./lib-for-link/src/admin-tools/article-download/beautify-css.js',
      //'./lib-for-link/src/admin-tools/article-download/beautify-html.js',
      //'./lib-for-link/src/admin-tools/article-download/jszip.js',
      
      './lib-for-link/src/admin-tools/article-download/article-download.js',
    ],
    'item-owl': getFilelist('./lib-for-link/src/item-olw/'),
    'page': getFilelist('./lib-for-link/src/page/'),
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
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', // Step 3
          'css-loader', // Step 2再執行這個
          'less-loader' // Step 1 要先執行這個
        ],
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ],
      }
    ]
  }
}

module.exports = webpackConfig