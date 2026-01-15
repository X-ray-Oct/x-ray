# JS进阶-数组进阶

## 1.变量定义关键字

> var：变量提升 先使用后定义
>
> let：先定义后使用  不可重复定义
>
> const：先定义后使用  定义常量（数组和对象仍然可以修改）

- 为什么数组和对象的值 通过const定义的可以修改

> 这个常量的值是一个堆内存的地址，地址从头到尾没改变

## 2.引用数据类型存储特性

> 1.所有的基本数据类型都是存在  栈内存中
>
> 2.引用数据类型的数据都是存在  堆内存中
>
> 栈内存 存储 堆内存的地址/指针

## 3.数组操作方法

### 3.1修改原数组的值

- push  pop  尾部新增和删除
- unshift  shift  头部新增和删除
- splice  任意位置的增删改
- sort  排序

#### 1.concat  合并数组

> 合并多个数组为一个数组
>
> 不会修改参与合并的数组

```js
let arr=[1,2,3]
let arr1=[4,5,6]
let arr2=arr.concat(arr1)	//arr=123  arr1=456  arr2=123456
```

#### 2.every  每一个

> 判断数组的每一个元素都满足条件  返回true

```js
let arr=[1,3,5,7,10]
//item:每个元素	index:元素对应的索引  arr:整个数组
let bool = arr.every(function(item,index,arr){
    return item%2==1;
})
```

#### 3.some一些

> 判断数组元素  只要有一个满足 则返回true

```js
let arr=[1,3,5,7,10]
//item:每个元素	index:元素对应的索引  arr:整个数组
let bool = arr.some(function(item,index,arr){
    return item%2==1;
})
```

#### 4.filter过滤

> 将所有满足条件的元素组成一个新数组

```js
let arr=[1,5,7,-4,8]
let arr1=arr.filter(function(item,index){
    return item>0;
})
```

#### 5.find  查找满足条件的第一个元素

```js
let num=arr.find(function(){
    return 条件;
})
```

#### 6.findIndex  查找满足条件的元素  返回第一个满足条件的元素索引



#### 7.findLast  查找满足条件的最后一个元素



#### 8.findLastIndex  查找满足条件的元素  返回最后一个满足条件的元素索引



#### 9.flat  拉平多维数组  多维数组降维

```js
arr.flat(维度数字/Infinity)
```

```js
let arr=[[1,23,46,3],[[[[[],500]]]]]

arr.flat(Infinity)
```

#### 10.forEach循环

> 循环数组  没有返回值  ==for循环

```js
arr.forEach(function(item,index){
    
})
```

#### 11.includes  包含

> 判断该元素是否被数组包含  包含返回true

#### 12.indexOf

> 查找数组中相等的第一个元素
>
> 找到返回索引值
>
> 找不到返回-1

#### 13.lastIndexOf

> 查找数组中相等的最后一个元素
>
> 找不到返回-1

#### 14.map  循环数组 并返回新数组

```js
arr.map(function(item,index){
    //可以对item进行二次处理
    return    ;
})
```

#### 15.join  将数组转换为字符串  并以分隔符进行分割

> split  将字符串转换为数组  并以分隔符进行分割

#### 16.reduce  求和 求平均

```js
//pre：上一次的结果  next：下一个元素  index：索引
let nums = arr.reduce(function(pre,next,index){
    return    ;
},默认起始值)   //求和0
```

#### 17.reverse  反向输出数组



#### 18.slice  数组截取  【左闭右开】

> 支持负数  起点比终点小

```js
let arr=['张三','李四','王五']
let minArr=arr.slice(1,2)   //['李四']
```

#### 19.copyWithin  将数组元素复制到某个位置

```js
arr.copyWithin(放置的索引，需要复制元素的起点，终点)
```

```js
let arr = [100,200,400,54,966]
arr.copyWithin(0,2,4)  //[400,54,400,54,966]
```

#### 20.entries  迭代器

```js
let arr=[1,56,45,45]
let obj= arr.entries();
console.log(obj.next().value)	//[0,1]
console.log(obj.next().value)	//[1,46]
console.log(obj.next().value)	//[2,45]
console.log(obj.next().value)
console.log(obj.next().done)	//true:迭代完成
```

#### 21.fill  填充

> 根据起点 终点 填充数组

```js
arr.fill(新数据,起点,终点)
```

## 4.函数基础

> 将一段 独立的代码功能装起来  使用时 调用

- 函数的定义方式

```js
//声明式
function  函数名(){
    
}

//表达式
const  函数名 = function(){
    
}
```

- 函数使用-调用方式

  - 直接调用

  ```js
  函数名()
  ```

  - 对调

  ```
  对象.方法名()
  ```

  - 回调

  > 在函数调用时 传入一个新函数  新函数就是回调函数

  ```js
  sum(function(){})
  ```

  - 递归

  > 函数体内部调用自己

  ```js
  function A(){
      A()
  }
  ```

  - IIFE 立即执行  函数

  ```js
  (function(){})()
  ```

- 函数参数

> 实参：具体数据
>
> 形参：接收实际参数的变量
>
> 一般情况下 要求形参和实参一一对应

```js
function sum(a,b,c){
    return a+b+c;
}

sum(1,45,6);
```

- 函数返回值

> 一般情况下，函数必须有返回值 return  返回值
>
> 没有return 函数自动返回 undefined

## 5.函数封装

> 先定义出函数结构，形参 实参确定  返回值确定

## 6.关于函数的参数 -arguments形参列表

> 封装函数实现 任意个数字之后
>
> arguments  直接获取到  实参的所有参数列表  并组装为伪数组

```js
function sum(){
    console.log(arguments);
    let num = 0;
    for(let i =0;i<arguments.length;i++){
        num+=arguments[i]
    }
    return num;
    
}
console.log(sum(1,54,51,51,21,21,5,45,2,15,15,1,125,45,4));
```



## 7.参数默认值设置

## 8.特殊场景的回调函数

> js代码执行顺序
>
> 一般从上至下 从左至右
>
> 但异步代码（需要等待时间 才可以执行的代码）
>
> 异步是在最后执行
>
> 所有的异步：延时器 定时器都需要等待执行  不能写return  返回数据

> 回调函数   语法特征：在调用函数时，传入一个新函数，定义大函数，就可以接受，并找机会执行这个函数

```js
function strFn(callback){
    window.setTimeout(function(){
        callback('hello world')
    },1000)
}

setFn(function(res){
    console.log(res);
})
```

## 9.特殊场景的递归  自调函数

> 阶乘
>
> 要有结束条件

```js
//求10的阶乘
function sum(n){
    if(n==1){
       	return 1;
       }
    return n*sum(n-1);
}

let num=sum(10);
console.log(num);
```

