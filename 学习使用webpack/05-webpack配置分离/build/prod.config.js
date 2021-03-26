const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge.merge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin(),//压缩打包后生成的bundle.js
  ]
})