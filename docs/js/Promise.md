# Promise 异步

> js核心代码在执行过程中，有的代码会跳过执行，等待一段时间后又会继续执行，打破从上至下，从左至右的执行顺序。为异步代码

- 定时器 延时器
- ajax
- 事件的监听和执行函数
- Promise 异步

## 1.基础语法

Primise状态：

> pending等待
>
> resolve  fulfilled  成功
>
> reject  rejected  失败

> Primise 状态永远只有一种结果 ；状态不可逆；

```js
//创建Promise的实例对象
let p1 = new Promise(function(resolve,reject){
    //resolve:等待一段时间后  成功执行之后的回调函数
    //reject:等待一段时间后  失败执行之后的回调函数
    //如果Promis的状态是既不成功也不失败  则等待...
    resolve()
    reject()
});
```

## 2.promise解决的问题

> 回调地狱问题
>
> 回调函数里有回调 里面还有回调
>
> 回调函数嵌套层级超过三级  则形成回调地狱

### 回调地狱

> 代码的可读性极低

## 3.promise解决回调地狱问题

> 三个状态

```js
p.then(function(res){})	//当promise里resolve执行了 自动执行then
p.catch(function(err){})	//当promise里为rejected执行了  自动执行catch
```

## 4.promise的then的链式调用

```js
p.then(res=>{}).then(res1=>{}).then(res2=>{})
```

## 5.axios

> promise+ajax

## 6.浏览器事件循环机制 event loop

> 同步 异步的深入研究
>
> 代码执行顺序

> 定时器 延时器
>
> ajax事件
>
> promise

## 7.异步转同步--【简化代码】

- 通过promise使用的异步

> 1. 通过async必须写在函数的小括号的前面
>
> 2. await必须搭配async使用  在函数体中的异步代码前
>
>    【作用：等待异步代码的结束并返回成功执行的结果】

## 8.try catch异常捕获

> 作用：解决await报错卡死的情况，并捕获错误信息返回

```js
const getData = async()=> {
    console.log(2);
    //错误值
    let res = await http.get('/xxxx');
    console.log(3);		//不执行
    console.log(res);	//不执行
}
getData();
```

try catch异常捕获：

```js
const getData = async()=> {
    console.log(2);
    //错误值
    try{
        let res = await axios.get('/xxxx');
        console.log(res);	
    }catch(err){
        console.log(err)
    }
    //跟await结果没有关系的代码放在try catch后面 照常执行
    console.log(3);		//不执行  
}
getData();
```

## 9.promise内置方法

- Promise.all

> 作用：将多个promise装到一起执行，都成功后一次性返回多个promise的执行结果

- 场景

> 接口1和接口2成功后(不分先后顺序)，就可以调用接口3

```js
Promise.all([axios.get(),axios.post(),axios.get()]).then(res=>{
    
})
```

>  没有promise.all方法 如何解决？

> 定义一个变量，接口1成功+1，接口2成功+1，当==2时，利用定时器实现调用接口3，最后消除定时器

- Promise.race

> 同时执行多个promise，返回res只有一个promise的结果，谁跑得快就是谁的结果

```js
Promise.race([axios.get(),axios.post(),axios.get()]).then(res=>{
    
})
```

