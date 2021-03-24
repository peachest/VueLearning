//导入顺序不唯一

//第一种导入方式
// const {sum, fflag, mul} = require('./mathUtil.js')
// 第二种导入方式
import {sum, mul, fflag} from './mathUtil.js'

console.log(sum(20, 40));
console.log(mul(1, 3)) ;
console.log(fflag);

//第三种导入方式 统一全部导入
// import * as util from './mathUtil.js'
// console.log(util.sum(20, 40));
// console.log(util.mul(1, 3)) ;
// console.log(util.fflag);

require('.css/style.css')