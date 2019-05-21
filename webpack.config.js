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
function getFilelist(dir) {
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


module.exports = (env, argv) => {
  if (argv.mode === undefined) {
    argv.mode = 'development'
  }
  if (argv.watch === undefined) {
    argv.watch = false
  }

  //console.log(argv.mode)


  let webpackConfig = {
    mode: argv.mode,
    cache: true,
    devtool: 'source-map',
    entry: {
      'global-header': './lib-for-link/src/global-header/global-header.js',
      'global-footer': './lib-for-link/src/global-footer/global-footer.js',
      'item-header': './lib-for-link/src/item-header/item-header.js',
      'item-footer': './lib-for-link/src/item-footer/item-footer.js',
      'admin-tools': './lib-for-link/src/item-footer/item-footer.js',
      'page': getFilelist('./lib-for-link/src/page/'),
    },
    output: {
      path: path.resolve('./lib-for-link/dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/, // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
          use: [
            'style-loader', // 這個會後執行 (順序很重要)
            'css-loader?sourceMap', // 這個會先執行
            'postcss-loader?sourceMap',
          ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader', // Step 3
            'css-loader?sourceMap', // Step 2再執行這個
            'postcss-loader?sourceMap',
            'less-loader?sourceMap' // Step 1 要先執行這個
          ]
        },
        {
          test: /\.(eot|woff|woff2|svg|png|ttf)([\?]?.*)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'asset',
                publicPath: '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/asset'
              }
            }
          ]
        },
      ]
    }, // module: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
  }


  if (argv.mode === 'production') {
    webpackConfig.devtool = false

    webpackConfig.module.rules[0] = {
      test: /\.css$/, // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
      use: [
        'style-loader', // 這個會後執行 (順序很重要)
        'css-loader', // 這個會先執行
        'postcss-loader',
      ]
    }
    webpackConfig.module.rules[1] = {
      test: /\.less$/,
      use: [
        'style-loader', // Step 3
        'css-loader', // Step 2再執行這個
        'postcss-loader',
        'less-loader' // Step 1 要先執行這個
      ]
    }
    webpackConfig.module.rules.push({
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    })

    if (typeof (webpackConfig.optimization) !== 'object') {
      webpackConfig.optimization = {}
    }

    webpackConfig.optimization.minimizer = [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      })
    ]
  }
  
  // ----------------------------------------
  
  if (argv.mode === 'development') {

  }

  return webpackConfig
}