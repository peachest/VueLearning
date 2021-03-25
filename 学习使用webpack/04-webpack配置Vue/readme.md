# 配置一个项目

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

* 执行命令“webpack init”，根据提示进行下一步，生成package.json

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

### webpack打包即可

