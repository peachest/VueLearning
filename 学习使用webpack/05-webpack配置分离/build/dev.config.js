const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = webpackMerge.merge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8080,
    // historyApiFallback:, //依赖html5的history模式，和路由有关系
  }
})