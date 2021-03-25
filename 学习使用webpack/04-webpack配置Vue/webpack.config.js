const filepath = require('path')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: filepath.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: 'dist/',//涉及到url的调用都会在相对地址前拼接上该字符串，index.html放到dist；后就不需要该属性
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },//vue-loader，很多版本。14开始需要另外配置插件
      {
        // test: [/\.css$/, /\.less$/], //第二种导入，所有样式文件都链式调用三种loader
        test: [/\.(css|less)$/],//第三种导入
        use: ['style-loader', 'css-loader', "less-loader"]
      },//样式loader
      // { //第三种分开导入less-loader
      //   test: /\.less$/,
      //   use: [{
      //     loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //     loader: "css-loader" // translates CSS into CommonJS
      //   }, {
      //     loader: "less-loader" // compiles Less to CSS
      //   }]
      // }
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              //图片大小小于该limit时，图片会被编译成base64字符串形式，不需要打包
              //大于limit时，需要使用file-loader进行加载，需要进行
              name: 'img/[name].[hash:16].[ext]',//配置到dist/img/文件夹下，以固定格式命名
            },
          },
          // { //file-loader和url-loader存在冲突，file-loader安装后不要配置，否则publicpath无法正确加载图片
          //   loader: 'file-loader'
          // }
        ]
      },//图片loader
      {
        test: /\.js$/,
        //排除编译以下包内的js文件的es6语法
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', //将es6语法转换为es5
          options: {
            // presets: ['@babel/preset-env']
            presets: ["es2015"],
          }
        }
      },//语法loader

    ] //end of rule
  },
  resolve:{//一般用来解决路径问题
    extensions: ['.vue', '.js', '.css'],  //导入时省略后缀名
    alias:{
      'vue$': 'vue/dist/vue.esm.js',
    },
  }
}