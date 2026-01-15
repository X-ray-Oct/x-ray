# Axios使用和封装-js进阶

> 基于promise的网络请求库 进行封装（ajax+promise）

> axios使用

- 页面中引入js文件
- 在自己的js文件中使用axios

- 通过axios发送get

```js
axios.get('请求地址?请求参数').then(function(res){
    //res：后端返回给前端的数据 且已完成json格式的转换
}).catch(function(err){
    //err：请求失败之后的信息
})
```

- 通过axios发送post

```js
axios.post('请求地址',formData).then(function(res){
    //res：后端返回给前端的数据 且已完成json格式的转换
}).catch(function(err){
    //err：请求失败之后的信息
})
```

- 通过axios发送文件

```js
let fd = new FormData()
fd.append('file',file)
axios.post('请求地址',fd).then(function(res){
    //res：后端返回给前端的数据 且已完成json格式的转换
}).catch(function(err){
    //err：请求失败之后的信息
})
```

## Axios回调函数封装

### 关于window顶级对象

> 1.window顶级对象 装了所有的关于BOM操作 DOM操作的代码
>
> 2.window是整个浏览器的顶级对象
>
> 3.window可以新增属性（挂载属性）或修改window原属性值【禁用】