# 

配置一个项目

[toc]

## 开始

* 新建项目文件夹，进入
  * 新建index.html
  * 建立文件夹src， dist
  * src中新建项目入口

## 配置

* 回到项目文件夹

* 新建webpack.config.js文件

* 输入以下代码

	```javascript
  const path = require('path')
  
  module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
    }
  }
  ```

## 初始化

* 执行命令“npm init”，根据提示进行下一步，生成package.json

## 安装本地局部包

* 执行指令“npm install webpack‘
* 执行指令"npm install"

## loader的使用

### 样式loader

### 图片loader

### 编译loader

## 使用vue

### 安装vue：

* npm install vue --save  将vue安装到项目的node-module中
* 不用--save-dev因为不仅在开发环境中需要依赖



### 使用vue：

* js文件中，import Vue from 'vue'
* 该文件中编写vue实例
* html中挂在vue实例



### 配置正确的发布版本：

* webpack.config.js中导出新属性

* ```javascript
    resolve:{
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      },
    }
  ```

### 版本问题

vue-loader，版本在14以上需要安装vueloaderplugin。

```javascript
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  plugins: [   //配置插件的节点，所有插件都要在这里配置
    new VueLoaderPlugin()
  ]
}
```

如果仍然出错，可能是webpack版本过高

```
npm uninstall webpack -g  删除全局的webpack
npm uninstall webpack		删除项目中局部依赖的webpack
npm install webpack@^4.44.2 -g  全局安装较低版本的webpack
npm install webpack@^4.44.2
```

较低版本的webpack可能无法打包其他高版本的loader，如less-loader。因此需要使用npm卸载并重新安装低版本的loader





出现，’tap‘错误，html-webpack-plugin版本可能过高，用4.0.0

出现’es6‘错误，babel-loader版本可能过高，用7.0.0

 this.getOptions is not a function
    at Object.lessLoader ，lessloader版本过高



### 使用html-webpack-plugin

目的：将整个项目的入口放到dist发布文件夹中

``` 
npm install --save-dev html-webpack-plugin
```




```js
//正确配置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    //注释以前写的该行代码 
    //publicPath: 'dist/',
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
```



使用项目文件夹中的index.html作为模板，生成dist/index.html的文件



### 配置本地服务器

``` js
npm install --save-dev webpack-dev-server
```

```
//配置webpack.config.js，仅用于开发阶段，
//可以抽离出来，开发完成后打包时不需要该配置
module.exports = {
    devServer: {
        contentBase: './dist',
        inline: true,
        port: 8080,
        // historyApiFallback:, //依赖html5的history模式，和路由有关系
      }
}
```

```
//配置package.json
//设置npm script
"scripts": {
    "dev": "webpack-dev-server"
},
```

以后可以使用npm run dev

注意和webpack，webpack-cli版本有对应关系

Error: Cannot find module 'webpack/bin/config-yargs' 报错，一下版本搭配有效

```
npm uninstall webpack webpack-cli webpack-dev-server
npm i -D webpack@4.32.2  webpack-cli@3.3.2  webpack-dev-server@3.5.1  
```



开发阶段如果使用dev-server，最好关闭uglifijs-webpack-plugin

### 配置分离

使用多个config.js文件区分开发与产品的配置。

1. 项目文件夹下，新建build文件夹
2. 新建base.config.js     dev.config.js     prod.config.js
3. base中存放共同的配置
4. dev中放webpack-dev-server的配置
5. prod中放uglifijs，与 webpack-merge的配置

```cmd
npm install webpack-merge --save-dev
```



```javascript
const webpackMerge = require('webpack-merge') //作为对象导入
const baseConfig = require('./base.config')	//将base.config导入
module.exports = webpackMerge.merge(baseConfig, {	//使用merge方法
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8080,
  }
})
```

prod.config.js同理


```json
//配置修改package.json文件中的脚本，手动决定使用哪个config文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./build/prod.config.js",	//build打包时使用prod(uction).config.js
    "dev": "webpack-dev-server --config ./build/dev.config.js"	//开发时使用dev(velop).config.js
  },
```



由于将base.config放到低一层的文件夹中，因此需要修改导出路径

```javascript
module.exports = {
  output: {
    path: filepath.resolve(__dirname, '../dist'),
   }
}
```

### 打包即可

```
//终端执行
webpack
//或者使用事先定义脚本（package.json script）
npm run build
```

