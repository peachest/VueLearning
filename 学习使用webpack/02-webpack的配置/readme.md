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

