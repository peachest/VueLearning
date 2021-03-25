//导入顺序不唯一

//第一种导入方式
// const {sum, fflag, mul} = require('./mathUtil.js')
// 第二种导入方式
import {sum, mul, sub, fflag} from './mathUtil.js'

console.log(sum(20, 40));
console.log(mul(1, 3)) ;
console.log(sub(2, 10));
console.log(fflag);

//第三种导入方式 统一全部导入
// import * as util from './mathUtil.js'
// console.log(util.sum(20, 40));
// console.log(util.mul(1, 3)) ;
// console.log(util.fflag);

require('../css/style.css')
require('../css/special.less')
document.writeln("<h3>hello world</h3>")

import Vue from 'vue'
// const app = new Vue({
//   el: "#app",
//    //将vue挂载到html中的html语句全部抽离到vue实例的template属性
//   //template 整个内部替换到html文件中被挂在的元素
//   template: `
//     <div>
//       <h1>以下是vue实例</h1>
//       <h2>{{message}}</h2>
//     </div>
//   `,
//   data: {
//     message: 'hello vue',
//   },
// })

//语法糖形式
//将vue实例的template,data,methods抽出来作为一个单独的组件，并注册到对应的vue实例中
// const templateComponent = {
//   template:`
//     <div>
//       <h1>以下是vue实例</h1>
//       <h2>{{message}}</h2>
//     </div>
//   `,
//   data(){
//     return {
//       message: 'hello vue in main.js'
//     }
//   },
//   methods:{
//     btnclick(){
//     }
//   }
// }
// import templateComponent from '../vue/app.js'
import templateComponent from '../vue/App.vue'
new Vue({
  el: '#app',
  template: '<templateComponent></templateComponent>',
  components:{
    templateComponent,
  }
})