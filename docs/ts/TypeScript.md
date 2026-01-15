# TypeScript基础

### 类型总览

- js数据类型

> srting
>
> number
>
> boolean
>
> null
>
> undefined
>
> bigint
>
> symbol
>
> object（Array\function\date\error）

- ts数据类型	

> 上述所有
>
> 六个新类型：
>
> any
>
> unknown
>
> never
>
> void
>
> tuple
>
> enum
>
> 两个用于自定义类型的方式
>
> type
>
> interface

### 定义类型时的大小写区别

> string：字符串原生类型
>
> String：字符串原生类型+字符串包装对象【对内存不友好】
>
> Number、String、Boolean内置构造函数，用于创建对应的包装对象
>
> ```tsx
> let str: String
> str = 'hello'				//string类型
> str = new String('world')	//object类型
> ```

#### 自动装箱

> js在必要时会自动将原始类型包装成对象，以便调用方法或访问属性

```js
let str = 'hello'
str.length  //在js中为字符串却能使用该方法
```

### 常用类型

#### any

> 任意类型，一旦将变量类型限制为any，就意味放弃了对该变量的类型检查

```tsx
let a:any
a=100
a='hello'
a=false

//隐式的any类型
let b
```

> any类型的变量，可以赋值给任何类型的变量

```tsx
let c:any
c=9

let x: string
x=c		//无警告
```



#### unknown

> 未知类型
>
> ​	类型安全的any，适用于：不确定数据的具体类型

```tsx
let a:unknown
a=9
a='hello'
a=false
console.log(a)	//a为string类型

let x: string
x=c		//报错不可以

//第一种
if(typeof a === 'string'){
    x=a
}

//第二种（断言）
x = a as string
x= <string>a
```



#### never

> 任何值都不是  undefined、null、' '、0都不行
>
> 适用于：限制函数的返回值
>
> ```tsx
> function throwError(str: string): never{
>     throw new Error("程序运行异常"+str)
> }
> ```



#### void

> 通常用于函数返回值声明【函数返回值为空，调用者也不应依赖其返回值进行任何操作】

```tsx
function logMessage(msg:string): void{
    console.log(msg)	//undefined
}
logMessage('你好')
```

> 注意：编码者没有编写return去指定函数的返回值，所以logMessage函数是没有显式返回值的，但会有一个隐式返回值，就是undefined；即：虽然函数返回类型为void，但也是可以接受undefined的，简单记：undefined是void可以接受的一种“空”。

> - 理解 void 与 undefined
>   - void是一个广泛的概念，用来表达“空”，而undefined则是这种“空”的具体实现之一。
>   - 因此可以说undefined是void能接受的“空”状态的一种具体形式。
>   - 换句话说：void包含undefined，但void表达的语义超越了单纯的undefined，它是一种意图上的约定，而不仅仅是特定值的限制。
> - 总结：若函数返回类型为void，那么
>   1. 从语法上讲：函数是可以返回undefined的，至于显示返回，还是隐式返回，这无所谓！
>   2. 从语义上讲：函数调用者不应关心函数返回的值，也不应依赖返回值进行任何操作！即使返回了undefined值。



#### object

> 只能存储非原始类型

#### Object

> 除了null和undefined

```tsx
let a: object
let b: Object

//以下是非原始类型均可
a={}
a=[1,4,6,2]
a=function(){}
a=new String('123')
a=new Preson()

//以下不可，是原始类型
a=1
a=true
a='hello'
a=null
a=undefined

//对于b以下均可
b={}
b=[1,4,6,2]
b=function(){}
b=new String('123')
b=new Preson()
b=1
b=true
b='hello'

//以下不可
b=null
b=undefined
```

##### 声明对象类型

###### 限制对象

```tsx
//限制person1对象必须有name属性，age为可选属性（字面量方式）
let person1:{name:string,age?:number}

//含义同上，也能用分号做分隔
let person2:{name:string;age?:number}

//含义同上，也能用换行做分隔
let person3:{
    name:string
    age?:number
}
```

###### 索引签名

> 允许定义对象可以具有任意数量的属性，这些属性的键和类型是可变的
>
> 常用于：具有动态属性的对象

```tsx
let person:{
    name:string
    age?:number
    [key:string]:any
}

person={name:'tom',age:22,gender:'男',city:"北京"}
```

##### 声明函数类型

```tsx
let count:(a:number,b:number) => number
count = (x,y) => {
    return x+y
}
```

> 备注：
>
> - TypeScript 中的=>在函数类型声明时表示函数类型，描述其参数类型和返回类型。
> - JavaScript中的=>是一种定义函数的语法，是具体的函数实现。
> - 函数类型声明还可以使用：接口、自定义类型等方式。

##### 声明数组类型

```tsx
let arr1: string[]
//泛型
let arr2: Array<number>
    
arr1 = ['a','b']
arr2 = [100,200]
```



#### tuple

> 是一种特殊的数组类型，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同。
>
> 元祖用于精确描述一组值的类型，?表示可选元素
>
> 不是关键字

```tsx
let arr1:[string,number]
let arr2:[string,boolean?]
//...string[]表示可以有任意个(0-n个)
let arr3:[number,...string[]]

arr1 = ['hello',12]
arr2 = ['world',false]
arr3 = [22,'d','w','h']
```



#### enum

> 枚举（enum）可以定义一组命名常量，增强代码可读性和维护性

##### 数字枚举

```tsx
//可以直接给变量赋值，按照值依次递增
enum Direction{
    Up,
    Down,
    Left,
    Right
}

function walk(data:Direction){
    if(data === Direction.Up){
       		console.log('向上走')
       }else if(data === Direction.Down){
                console.log('向下走')
                }else if(data === Direction.Left){
                         console.log('向左走')
                         }else if(data === Direction.Right){
                                  console.log('向右走')
                                  }else{
                                      console.log('未知')
                                  }
}

walk(Direction.Up)
```

##### 字符串枚举

```tsx
enum Direction{
    Up="up",
    Down="down",
    Left="left",
    Right="right"
}

let dir:Direction = Direction.Up;
console.log(dir)	//输出：Up
```

##### 常量枚举

```tsx
//ts
const enum Direction{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);

//编译后的js
"use strict"
console.log(0);
```

> 官方描述
>
> 常量枚举是一种特殊枚举类型，它使用const关键字定义，在编译时会被内联，避免生成一些额外的代码。
>
> 何为编译时内联？
> 所谓“内联”其实就是TypeScript在编译时，会将枚举成员引用替换为它们的实际值，而不是生成额外的枚举对象。这可以减少生成的JavaScript代码量，并提高运行时性能。



#### type

> 可以为任意类型创建别名

##### 联合类型

```tsx
type Status = number | string

function printStatus(data:Status):void{
    console.log(data)
}
printStatus(404)
printStatus('404')

type Gender = '男' | '女'

function printGender(data:Gender):void{
    console.log(data)
}
printGender('男')
printGender('女')
```

##### 交叉类型

```tsx
//面积
type Area = {
    height:number;
    width:number
};

//地址
type Address = {
    num:number	//楼号
    cell:number	//单元号
    room:string	//房间号
}

type House = Area & Address

const houst:House = {
    height:100,
    width:200,
    num:3,		//楼号
    cell:4,	//单元号
    room:'702',	//房间号
}
```

##### 特殊情况

```tsx
type LogFunc = () => void

const f1:LogFinc = function(){
    return 999;
}	//允许返回非空值
```

解释：

```tsx
const src = [1,2,3];
const dst = [0]

src.forEach((el)=>dst.push(el))
```



#### 类

##### public修饰符

> 可被类内部、子类、类外部访问

```tsx
//简写前
class Person {
    public name:string,
    public age: number
    constructor(name: string,age: number){
        this.name=name
        this.age=age
    }
}

//简写后
class Person {
    constructor(public name: string,public age: number){}
}
```

##### protected修饰符

> 可被类内部、子类访问

##### private修饰符

> 可被类内部访问

##### readonly只读修饰符

```tsx
class Person {
    constructor(
    	public name: string,
    	public readonly age: number
    ){}
}

const p1 = new Person('tom',18)
p1.age = 20	//改不了 因为age前有readonly修饰符
```



#### 抽象类

> - 概述：抽象类是一种无法被实例化的类，专门用来定义类的结构和行为，类中可以写抽象方法，也可以写具体实现。抽象类主要用来为其派生类提供一个基础结构，要求其派生类必须实现其中的抽象方法。
> - 简记：抽象类不能实例化，其意义是可以被继承，抽象类里可以有普通方法、也可以有抽象方法。

```tsx
abstract class Package{
    //构造方法
	constructor(public weight: number){}
    //抽象方法
    abstract calculate(): number
	//具体方法
    printPackage(){
        console.log(`包裹重量${this.weight},所需运费为:${this.calculate()}元`)
    }
}

class StandardPackage extends Package{
    constructor(
    	weight:number,
        public unitPrice: number
    ){super(weight)}
    calculate(): number{
        return this.weight * this.unitPrice
    }
}

const s1 = new StandardPackage(10,5)
s1.printPackage()
```

> 总结：何时使用抽象类？
>
> 1. 定义通用接口：为一组相关的类定义通用的行为（方法或属性）时。
> 2. 提供基础实现：在抽象类中提供某些方法或为其提供基础实现，这样派生类就可以继承这些实现。
> 3. 确保关键实现：强制派生类实现一些关键行为。
> 4. 共享代码和逻辑：当多个类需要共享部分代码时，抽象类可以避免代码重复。



#### interface（接口）

##### 定义类结构

```tsx
interface PersonInterface{
    name:string
    age:number
    speak(n:number):void
}

class Person implements PersonInterface{
    constructor(
    	public name:string,
        public age:number,
    ){}
    speak(n:number):void{
        for(let i =0,i<n,i++){
            console.log(`我叫${this.name},今年${this.age}`)
        }
    }
}
```

##### 定义对象结构

```tsx
interface UserInterface{
    name:string
    readonly gender:string
    age?:number
    run:(n:number)=>void
}

const user:UserInterface={
    name:"张三",
    gender:"男"
    age:18,
    run(n){
        console.log(`奔跑了${n}米`)
    }
}
```

##### 定义函数结构

```tsx
interface CountInterface{
    (a:number,b:number): number;
}

const count:CountInterface=(x,y)=>{
    return x+y
}
```

> 总结：何时使用接口？
>
> 1. 定义对象的格式：描述数据模型、API响应格式、配置对象…….等等，是开发中用的最多的场景。
> 2. 类的契约：规定一个类需要实现哪些属性和方法。
> 3. 自动合并：一般用于扩展第三方库的类型，这种特性在大型项目中可能会用到。



#### interface和type的区别

> - 相同点：
>
>   interface和type都可以用于定义对象结构，两者在许多场景中是可以互换的。
>
> - 不同点：
>   interface：更专注于定义对象和类的结构，支持继承、合并。
>   type：可以定义类型别名、联合类型、交叉类型，但不支持继承和自动合并。

#### interface和抽象类的区别

> - 相同点：都用于定义一个类的格式（应该遵循的契约)
>
> - 不相同：
>   接口：只能描述结构，不能有任何实现代码，一个类可以实现多个接口。
>   抽象类：既可以包含抽象方法，也可以包含具体方法，一个类只能继一个抽象类。

#### 泛型

> 泛型允许我们在定义函数、类或接口时，使用类型参数来表示未指定的类型，这些参数在具体使用时，才被指定具体的类型，泛型能让同一段代码适用于多种类型，同时仍然保持类型的安全性。

##### 泛型函数

```tsx
function logData<T>(data1:T,data2:U):T|U{
    //console.log(data1,data2)
    return Date.now()%2?console.log(data1):console.log(data2)
}
logData<number,string>(100,'jello')
```



```tsx
interface PersonInterface<T>{
    name:string,
    age:number,
    extraInfo:T
}

type JobInfo={
    title:string;
    company:string;
}

let p :PersonInterface<JobInfo>{
    name:"tom",
    age:18,
    extraInfo:{
            title:'高级';
    		company:'有限公司';
    }
}
```



#### 声明函数约束

demo.js

```js
export function add(a,b){
    return a+b;
}

export function mul(a,b){
    return a*b;
}
```

demo.d.ts

```tsx
declare function add(a:number,b:number):number;
declare function mul(a:number,b:number):number;

export {add,mul}
```



index.ts

```tsx
import {add,mul} from './demo.js'

add(1,2)
mul(2,4)
```

index.html

```html
<script type="module" src="./index.js"></script>
```

