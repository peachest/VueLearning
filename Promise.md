# promise

es6，异步编程

```js
new Promise((resolve, reject)=>{
    //异步请求
    setTimeout((data,error)=>{
        resolve(data)//请求成功
        reject(error)//请求失败时
    }
    , 1000)
}).then((data)=>{
    //data process
}).cath((err)=>{
    //err msg process
})
```

