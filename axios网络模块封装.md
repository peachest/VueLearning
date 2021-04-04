# axios

[toc]

## 安装

npm install axios --save



## 基本使用

使用httpbin.org

```js
//.vue
import axios from 'axios'

axios({
    url: 'http://123.207.32.32:8000/home/multidata'
}).then(res =>{
    console.log(res)
})
```



## 