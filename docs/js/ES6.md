# ES6语法糖

## 1.ES6解构赋值

- 对象的解构赋值

```js
let user = {
    id:1000,
    name:'zs',
    age:30,
    like:'sleep'
}
let {name,age} = user;
```

- 数组的解构赋值

```js
let arr = [100,200,3000];
let [a,b,c] = arr;
```

- 函数的解构赋值

```js
function sum = (arr) => {
    let [a,b,c] = arr
}
sum([100,200,300])
```

## 2.展开运算符 扩展运算符 `...`

> 将一个数组或伪数组展开

```js
let arr = [10,2,53,56,23,46,6]
console.log(...arr)		//拆开
console.log([...arr])	//转成真数组
```

- 合并多数组 concat

```js
let arr = [2,56,3]
let arr1 = [4,62,42]

let arr2 = [...arr,...arr1]
```

- 伪数组转真数组

```js
function fn(){
        console.log([...arguments]);
     }
fn(2,4,5,56);
```

- 字符串转数组

```js
let arr = '沙发上快乐风男是否能'
let arr2 = [...arr]
```

## 3.变量类型检测

#### 3.1typeof

> 只能区分基本数据类型和引用数据类型
>
> 可以区分 数字number、字符串string、布尔boolean、undefined、function
>
> 不可以区分null、数组、对象（Object）

```js
typeof 'aaa'	//string类型
typeof 123	//number类型
```

#### 3.2instanceof

- 一般只用于区分 该变量是否为引用数据类型
- 基本数据类型 只能通过实例化的方式赋值的变量new 才可以检测
- 可以区分数组

```js
变量 instanceof Object	//判断是否为引用数据类型	
```

#### 3.3万能的数据检测方法【重点】

> 要加call、apply   因为toString方法中在获取this做数据类型的判断
>
> 不加则永远指向Object.prototype
>
> 如果需要检测其他类型，需要将this指向更改为数据变量

```js
Object.prototype.toString.call(检测变量)
```

#### 3.4Array.isArray 专业检测数组的方法

```js
Array.isArray([1,2,3])
```

## 4.深浅拷贝

> 引用数据类型 数据因为地址共享问题 导致赋值变量和原变量共享了地址，只要有一个变量的值发生改变，另一个就会改变

```js
let arr = [{name:'张三'},{name:'李四'}]
let arr1 = arr;		//赋值的是arr的地址
arr1[0].name = '王麻子'
```

#### 4.1浅拷贝

> 如果引用数据类型只有一层，确保赋值给新变量后不会影响原变量的值

```js
let arr = [12,45,234,34]
let arr1 = [d];
```

- 循环得到每一次的元素/属性,新增到空对象或空数组中

- 所有的数组内置方法都是浅拷贝

> map、filter、concat

- 对象的合并方法也是浅拷贝

- ES6的展开运算符也是浅拷贝

#### 4.2深拷贝

> 数据量太大，会造成栈溢出卡死
>
> 栈内存的性能要求很高，不能存大批量数据
>
> JSON格式都是存有效数据，函数体 undefined被JSON转换后，会自动丢失，不止值丢失了，属性也没了