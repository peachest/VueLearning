# 学习vue-router

[toc]

## 安装vue-router

```
npm install --save vue-router
```

程序运行时需要依赖路由，因此不放在dev下



## 基础使用方法

1. src文件夹下创建router文件夹
2. router文件夹中创建index.js配置router

```js
./src/router/index.js
//作为vue的插件导入
import VueRouter from 'vue-router'
vue.use('router')

//创建路由对象
const routes = [
]
const router = new VueRouter({
 routes
})

//将VueRouter对象传入Vue对象
export default router
```



```js
./src/main.js
import Vue from 'vue'
import router from './router'	//导入一个路径式默认导出index.js
new Vue({
    router
})
```

## 配置路由的映射关系

1. 常见路由组件
2. 将组件和路由绑定

```js
import Home from '../components/Home'
import About from '../components/About'
const routes = [
    {
      path: '/home',
      component: Home
    },
    {      
      path: '/about',
      component: About
    },
]
```

## 