# ES5类与对象-面向对象编程

> 面向过程：更注重事情发展的顺序 一步一步流水线实现一个功能【逻辑性】
>
> 面向对象：更注重结果 将不同事物封装为一个个独立函数，最终通过调用方式来实现一个功能【复用性】

> 面向对象的开发：封装 继承  多态

## ES5原型和原型链

## 1.构造函数

> - 函数名 必须使用大驼峰
> - 没有return
> - j将所有的属性、方法的值都直接挂载到`this`
> - 通过new关键字调用

## 2.构造函数问题-方法过载

> 通过构造函数创建的对象
>
> 每创建一个对象，就会将对象里所有方法 function重新创建一次
>
> 性能问题：当构造函数不断实例化对象后，会在内存中不断新增相同代码函数，直到内存溢出

> 解决思路：将所有方法放到一个公共空间，原型空间

## 3.原型

> - 每个构造函数都有一个原型空间 显式原型（prototype）
> - prototype本身是一个对象   constructor属性，指向构造函数本身
> - 每个实例对象都有隐式原型（`__proto__`） 指的是自己的构造函数的显式原型（prototype）

## 4.原型链

> 实例对象的方法或属性值的查找规则
>
> 首先在自己本身对象中查找是否有这个属性和方法，有就直接使用
>
> 如果没有，会自动去原型空间找
>
> 规则：（根据`__proto__`）逐级向上，就近原则
>
> 所有的构造函数默认情况，都属于Object的子类

## 5.解决方法过载

> 将构造函数的方法都挂载到原型上

```js
 function CreatePc(brand, pricr, color, system) {
        this.brand = brand;
        this.pricr = pricr;
        this.color = color;
        this.system = system;
     
     //当原型空间
     CreatePc.prototype.start = function(){
         return '已经开机'
     }
    }
```

## 6.new关键字的作用

> 实例化创建对象

> - 自动创建了一个空对象  {}
> - 将空对象指向this    this={}
> - 将this return返回出来

## 7.this指向问题-6个

- 全局的this    window

- 函数中的this-->谁调用 指向谁
  - 对象.函数()-->对象
  - 一般函数-->window
- 箭头函数没有this  -->上一级作用域的this
- 事件中的this-->事件源==事件监听的dom对象

- 构造函数的this-->实例对象
- 定时器/延时器中的this-->window

## 8.手写数组方法

```js
Array.prototype.push = null;
```

## 9.this借用

- 立即

  - call

  - apply

```js
let user = {
    name:'张麻子',
    eat:function(food){
        return this.name+'正在吃'+food;
    }
}

let user1 = {
    name:'黄四郎'
}

user.eat.call(user1,'冰激凌');
user.eat.apply(user1,['冰激凌']);
```

- 永久
  - bind

```js
let user = {
    name:'张麻子',
    eat:function(food){
        return this.name+'正在吃'+food;
    }
}

let fn = user.eat.bind(user1,'冰激凌');
fn();
```

## 10.ES5继承

- ### 属性继承

```js
父类.call(this,参数1,参数2,......)
父类.apply(this,[参数1,参数2,......])
```

- ### 原型方法继承

##### 原型链继承

###### 1.【完美】

```js
子类.prototype.__proto__ = 父类.prototype;
```

###### 2.通过父类的实例化对象，修改子类的隐式原型指向【原型链原理】

```js
子类.prototype.__proto__ = new 父类()
```

> 原型里放了所有父类属性，性能低

###### 3.直接将父类的原型赋值给子类原型【错误】

```js
//继承原型空间
子类.prototype = 父类.prototype
//修改子类的原型
子类.prototype.constructor = 子类;
```

> 1.需要写在父类和子类定义完后。全局写
>
> 2.修改了子类的constructor的指向为自己
>
> 3.会造成地址共享问题

###### 4.组合式继承。将子类的prototype指向父类的实例对象

```js
//组合继承
子类.prototype = new 父类()
//需要重新指定constructor指向子类自己
子类.prototype.constructor = 子类
```

> 全局写

###### 5.对象合并继承【掌握】

```js
Object.assign(子类.prototype,父类.prototype)
```

###### 6.组合寄生继承  Object.create()【掌握】

```js
子类.prototype = Object.create(父类.prototype)
子类.prototype.constructor = 子类
```

> 将父类prototype和子类prototype合并到空对象中，再赋值给子类的prototype

## 11.ES6类的继承

#### 11.1类的语法

> 类名：构造函数一致  大驼峰

```js
class 类名{
    //构造器
    constructor(参数1,参数2,...){
        this.参数1 = 参数1;
    }
    
    //原型空间的方法和属性
    方法名1(){
        return xxx;
    }
}
```

#### 11.2类的继承

```js
class 子类 extends 父类 {
    constructor(参数1,参数2,参数3...){
        super(参数2,参数3);//继承父类的属性
        this.参数1 = 参数1;
    }
}
```

