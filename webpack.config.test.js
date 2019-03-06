const path = require('path')
var glob = require("glob")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
//const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const WebpackShellPlugin = require('webpack-shell-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

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
  //devtool: 'source-map',
  entry: {
    'test': path.resolve(__dirname, './test/src/test.css'),
  },
  output: {
    path: path.resolve(__dirname, './test/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
        use: [
          /*
          {
            loader: 'style-loader',
            options: {
              transform: path.resolve(__dirname, './css-minify.js'),
            }
          }, // 這個會後執行 (順序很重要)
          */
          'style-loader',
          'css-loader', // 這個會先執行
          'postcss-loader',
        ]
      }
    ]
  },
  /*
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true,
        },
      },
    }),
  ],
  */
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
    ],

  },
}

module.exports = [webpackConfig]
//module.exports = [webpackConfig, webpackConfigCSS]