const path = require('path')
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');

var config = {
  entry: path.resolve(__dirname, 'tests/average.js'),
  output: {
    path: path.resolve(__dirname, 'tests/dist'),
    filename: 'testBundle.js'
  },
  
  target: 'node',
  //externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },

  plugins: [
    new WebpackShellPlugin({
      onBuildExit: "mocha tests/dist/testBundle.js"
    })
  ]
};

module.exports = config;