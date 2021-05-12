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
import router from 'vue-router'
vue.use('router') //调用了router.install

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

## 配置路由标签



在APP.vue内的根页面模板使用路由标签。

《router-link》默认最终渲染成《a》标签，利用浏览器的**哈希模式**决定url跳转

```html
//app.vue
<template>
	<div id = "app">
        <router-link to="\home">首页</router-link>
        <router-link to="\about">关于</router-link>
    </div>
</template>
```



《router-view》标签起到占位的作用，决定子组件显示的位置

```html
//app.vue
<template>
	<div id = "app">
        <router-link to="\home">首页</router-link>
        <router-link to="\about">关于</router-link>
        <router-view></router-view>
    </div>
</template>
```

、

## 路由重定向

默认显示首页

```javascript
const routes = [
	{
		path: '/',// path: '',
		redirect: '/home'
	},
    {
		path: '/home',
		component: Home
	}
]
```

## html5的history

``` javascript
const router = new VueRouter({
 routes,
 mode: 'history'   
})
```

## router-link的属性补充

to属性用作跳转的路径

```html
<router-link to='/home'></router-link>
```

tag改变渲染的结果， 

```html
<router-link to='/home' tag="button"></router-link>
```



使用replace属性，浏览器使用replaceState方法改变url，不能后退前进

```html
<router-link to='/home' tag="button" replace></router-link>
```



被渲染成按钮的router-link标签，在点击时会新增两个class属性。 router-link-active方便用来修改一些样式，router-link-exact-active和路由嵌套有关

```html
<button class="router-link-exact-active router-link-active">
    首页
</button>
```



可以修改新增class属性的名字

```html
<router-link to='/home' tag="button" replace active-class="active"></router-link>
```

``` js
//修改路由的方式
const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active',
})
```



## 不使用router-link标签

监听两个按钮并调用方法。

vuerouter 往所有组件里面（其实是向Vue的原型里添加一个新的属性\$router，那么所有组件都会继承该属性）添加一个新的属性$router

```javascript
methods:{
    homeClick(){
        this.$router.push('/home') ;	//浏览器可以后退前进
        //this.$router.replace('/home') ; //浏览器不能后退
    },        
    aboutClick(){
        this.$router.push('/about') ;
        //this.$router.replace('/about') ;
    }
}
```

$router获取上文定义的VueRouter对象

## 动态路由

例用户界面的url与用户的id有关

```js
import user from '../components/User'
const routes = [
    {
        path: '/user/:id',
        component: user,
    }
]

```

静态数据

```html
//routes自动匹配'/user/:id'
<router-link to='/user/张三' ></router-link>
```

动态数据

```html
//单引号内是字符串，userid可以是Vue实例的data属性，使用Vue的动态绑定
<router-link :to="'/user/' + userid"></router-link>
```



子组件获取url中的数据

```html
<template>
	<h2>
        {{this.$route.params.userid}}	     
        //获取当前正在活跃的路由映射的对象
        //path: '/user/:userid', 注意变量名要对应
    </h2>
</template>
```

## 路由懒加载

### 最早期-异步组件

### AMD

``` js
const About = resolve => require(['../components/About.vue'], resolve)
```



### webpack与Vue

```js
const About = () => import('../components/About') ;//推荐这种写法，全部在开头import方便管理
const routes = [
    {
        path: '/home',
        component: () => import('../components/Home')
    },
    {
        path: '/about',
        component: About ;
    },
]
```





## 嵌套路由

大路径里面嵌套子路径

```js
const Home = ()=>import('../components/Home.vue')
const HomeNews = ()=>import('../components/HomeNews.vue')
const routes = [
    {
        path:'/home',
        component: Home,
        children:[
            {//嵌套路由也可以重定向，
               path:'',
               redirect: 'news'
            }，
        	{
        		path:'news',//不能加斜杠，渲染时自动添加
        		component: HomeNews ;
		    }
        ]        
    },
]
```

在Home.vue总的模板部分使用routerlink标签，注意to属性中的第一个"/"不能少

```html
<router-link to="/home/news"></router-link>
//一定不能遗漏第一个斜杠/，否则路由跳转会出错
//to路径一定需要包含父组件的路径，不能只写'/news'。因为to本质上执行了$router.push()，见下12.2
```



## 路由时传递参数

### $route.params

动态路由时传递path中的参数

### $route.query

```html
<router-link :to="{
                  path: '/profile',
                  query: {
                  	name: 'why',
                  	age: 18,
                  }}">
</router-link>
```

模板中使用$route.query获取对象[name:'why',	 age:18]。



不使用标签，使用监听按钮实现

```js
{
    this.$router.push({
        path:'',
        query:{
            name:'',
            age:,
        }
    })
}
```



## 导航守卫

本质是生命周期中的钩子。专注于

### 全局

原理，组件中的$router是全局属性。



监听路由跳转。

```js
//router/index.js
routes=[
    {
        path:'',
        components:,
        meta: {
        	title: msg 
    	}
    }
]
```



没有路由嵌套

```js
//router/index.js
router.beforeEach((to, from, next)=>{
    //to和from都是一个route
    document.title = to.meta.title ;
    
    //next是一个函数，必须调用，否则出错
    next() ;
    //进入管道中下一个钩子
    //next(false),	next('/login')
})
```



**新版本不需要特殊处理下列情况，直接从meta里取数据就可以了**

路由嵌套时meta数据在matche属性里，

```js
//router/index.js
router.beforeEach((to, from, next)=>{
    //to和from都是一个route
    document.title = to.matched[0].meta.title ;//永远在第0个数据中获取
    
    //next是一个函数，必须调用，否则出错
    next() ;
})
```

前置守卫（钩子 ）



后置守卫，路由跳转完就没有后续操作，因此不需要调用next()

```js
//router/index.js
router.afterEach((to, from)=>{
    //要做的事情
})
```



### 路由独享



```js
//router/index.js
routes=[
    {
        path:'/foo',
        components: foo,
        beforeEnter: (to, from, next)=>{
            //foo
            next() ;//necessary
        }        
    }
]
```



### 组件内的守卫

```js
const foo = {
	template：
	data(){
        return{            
        }
    }
    beforeRouteEnter(to, from, next){        
    }
    beforeRouteUpdate(to, from, next){        
    }
    beforeRouteLeave(to, from, next){        
    }
    

}
```









## keep-alive 与 vue-router

问题，每次路由都进行一次销毁旧组件和创建新组件

目的，保留组件内部状态，不想每次都创建一个新的组件

原理：route-vie是vue-router的组件。keep-alive是Vue内置的组件，使组件保留状态或避免重新渲染。



使用《keep-alive》标签，可以不断重复创建与销毁

```js
//vue组件
<template>
    <keep-alive>
    	<router-view/>
    </keep-alive>
</template>
```



如果有路由嵌套，需要在回到该组件时，显示离开该组件时进入的子组件而不是默认的子组件

```vue
//vue组件
<script>
   export default{
	data(){
        return{
            pathState://保存离开前是哪个子组件
        }
    },
     
            
//只有在该组件被keep-alive标签包括时才起作用。
//很好理解，因为只有不销毁该组件，组件才有不活跃的状态。            
    activated(){
            this.$router.push(this.path);
            //this.$router.replace(this.path);
        }
    deactivated(){}
        
        
        
    boforeRouteLeave(to, from, next){
        this.path = this.$route.path ;
		next() ;
    }
}
</script>
```





```js
//vue组件
<template>
    //keep-alive 的属性 exclude, include
    <keep-alive exclude="Profile[,foo]">//使用组件的name属性定位,逗号分割，并且不能加空格
    	<router-view/>
    </keep-alive>
</template>
```

















































