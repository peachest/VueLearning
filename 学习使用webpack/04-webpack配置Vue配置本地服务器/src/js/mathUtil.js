function sum(num1, num2) {
  return num1 + num2 ;
}
function sub(num1, num2){
  return num1 - num2 ;
}
function mul(num1, num2){
  return num1 * num2 ;
}
// function mul(num1, num2) {
//   return num1 * num2 ;
// }
let flag = true

//不能同时使用module.exports 和 export
// module.exports = {
//   sum,
//   mul,
// }
//
// //导出方式 1
export {
  sum, sub, mul,
}

//导出变量, 导出的名字不能和原来的名字相同
export var fflag = flag ;
//
// //导出函数和类
// export function mul(num1, num2) {
//   return num1 * num2 ;
// }