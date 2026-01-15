### 1.html基础

​	爬虫===前端网页的SEO(搜索引擎关键字优化)

#### 1.2标签分类

- 块级标签 一个标签独占一行

  ```html
  div
  h1—h6
  p(很少有其他子盒子)
  form(表单标签)
  header
  nav(导航栏)
  aside(侧边栏)
  ```

  

- 行内标签 多个标签放在一行

  ```html
a
  span 、text
img
  input(输入框)
button
  
  strong 、b(加粗字体)
  i(斜体文字)
  ```


### 2.css基础

css：修饰html标签的样式，美化默认的标签效果

- 盒模型
- 布局基础  浮动  定位
- 美化样式

#### 2.1盒模型

盒模型：页面中所有的盒子，每个盒子都是一个独立的盒模型，整个盒子有哪些东西组成

组成部分：定位信息、外边距、边框、内边距、内容的宽高

重置浏览器默认样式：

```html
html，body{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
}
```

子盒子相对父盒子定位：子绝（absolute）父相（relative）

css中计算所用函数calc(xxx - xxx)

#### 2.2布局基础  浮动  定位

浮动：父盒子确定宽高，所有的子盒子都可以进行浮动，浮动之后的子盒子会变成类似于行内标签样式，多个块级盒子可以放在一行上

float有左右浮动属性

### 3.JavaScript基础

#### 3.1.js使用方式

- 内嵌式

  将js代码写到html文件中

  可以在任何html代码的位置写`<script>`中写上js代码【js代码位置不同会造成以外的报错（dom节点获取出错）】

  推荐写在`</body>`的前面

- 外联式

  通过创建一个独立的js文件，将js文件引入html中

  `<script src='引入的js文件路径'>推荐写在</body>的前面`

./当前层文件中；../回退一层；

#### 3.2变量定义与使用规则

var：具有变量提升的特性

let：遵循先定义后使用，不可重复声明

```js
console.log(num);	//代码报错 提示num不能在定义的前面进行使用
let num =100;
console.log(num);
```



const：常量定义，遵循先定义后使用（不可重新赋值，不可更改【引用数据类型可更改属性值】），常量名规范大驼峰，全字母大写

变量命名规则：由字母、数字、_、$ 组成，由字母、_、$开头

```js
var 变量名=初始值;
```

#### 3.3常见的数据类型  5基1引

- 基本数据类型

  ```
  number 数字
  string 字符串 ''  ""
  boolean 布尔 true flase
  null 空  'null'
  undefined 未定义类型  'undefined'
  long 长整数
  ```

  

- 引用数据类型

  ```
  object 对象
  	object {key:value}
  	array数组  [元素]
  	function函数 'function 函数名(){函数体}'
  	RegExp正则  (校验某个字符串是否满足规则)  /^1[3-9][0-9]{9}/
  	date日期类型（格林威治日期格式）
  ```

  > 实例化定义  `new Object()`    `new Array()`     `new RegExp()`
  >
  > 字面量定义`{}``[]``function(){}``规则`

### 4.对象操作 object

> 对象：一个具象事务
>
> 类：具有相同属性的整体，抽象群体概念

> 对象特征：信息===对象的属性
>
> 行为动作===对象的方法

```js
let user = {
    name:'Bob',
    color:'黄色',
    sno:'22998',
    age:22,
    eat:function(){return '正在吃饭'},
    study:function(){return '正在学习'}
};
//通过对象.属性名进行取值
console.log(user.name)  //Bob
```

### 5.数组操作

> 数据列表

- 定义

```js
let arr = new Array(1,5,8,9,7)
let arr = [1,5,8,9,7]
let arr=[{name:'x'},{name:'y'}]
```

- 使用数据

> 数组名[下标|索引]

```js
console.log(arr[1].name)
```

- 数组属性 获取数组的长度

```
数组名.length
```

```
最大下标 = 数组名.length-1
```

#### 5.1**数组方法  sort排序**

```js
arr.sort(function(a,b){
    return a - b;   //从小到大
})
```

数字排序必须传入function，字母排序直接用sort()

#### 5.2**数组方法  增删改**

- push  末尾添加元素
- pop末尾删除元素
- unshift  头部添加一个元素
- shift  头部删除一个元素
- splice  任意位置增、删、替换

```js
arr.splice(起始索引，删除的元素个数，新的的元素，新增...)
```

```
新增元素，起始索引为新增元素的索引
```

### 6.常见运算符

- 比较运算符

> ===全等   数值相等  类型相同
>
> ==等于  数值相同

```js
'100' == 100   //true
'100' === 100    //false
```

- 逻辑运算符

  > &&	都为真
  >
  > ​			如果左侧表达式为假，右侧表达式不会执行，整个表达式结果为假
  >
  > ​			如果左侧表达式为真，整个表达式结果为右侧表达式结果
  >
  > ||	有一个为真  结果就为真
  >
  > ​			如果左侧表达式为真，右侧表达式不会执行，整个表达式结果为真
  >
  > ​			如果左侧表达式为假，整个表达式结果为右侧表达式结果
  >
  > !		取反

  > 真：非0值  非空值

```js
'' && 100;	//''
-100 && 100	//100
```

```js
let a = 0
let b = 1
let s = a++ && --b
//a		1
//b		1
//s		0
```

- 运算符优先级

  > ()	[]
  >
  > !
  >
  > ++	--
  >
  > '*	/	%'
  >
  > '+	-'
  >
  > ==	!=	>	>=	<	<=	===	!==
  >
  > &&
  >
  > ||
  >
  > =	+=	-=	/=	%=

### 7.数字的内置方法

- toFixed(3)  保留小数位数  四舍五入  会将结果自动转化为字符串
- parseInt(‘3.55’)  截取整数部分  3
- parseFloat('3.55')  将其他数据类型的数字转换为小数  3.55
- Number('3.55')  强制转换为数字  3.55

### 8.数学方法  Math

- floor(3.55)  向下取整  3

- ceil(3.001)  向上取整  4
- PI  获取圆周率

### 9.流程控制语句

#### 9.1判断语句

- 单分支语句

  ```js
  if(条件){	//非0值  非空值
     		表达式1；
     }else{
         	表达式2
     }
  ```

  

- 多分支语句

  ```js
  switch(a){
         	case1: 表达式1;
          break;
          case2: 表达式2;
          break;
          ...
          default:表达式;
         }
  ```

  

#### 2.2循环语句

- for

  > 循环三要素：循环中间变量	循环条件  变量更新  循环体

- while

- do...while

- for...in

- for...all

### 10.数据类型转换

> 隐式转换：在数据参与运算过程中  数据自动发生类型转换

> 强制转换：通过调用方法  强制将某个数据转换为其他的数据类型 parseInt  parseFloat  Number

- 数字和字符串一起

> 1.字符串与数字 相加  加号===字符串的拼接  数字转换为字符串
>
> 2.字符串与数字 非加法运算 字符串自动转换为数字

```js
10 + '10' = 1010
'10' + 10 = 1010
```

- 数字和布尔

> 1.布尔转换为数字

```js
true + 1 = 2
```

- 特殊隐式转换

```js
0 == '0'	//true
'' == null	//false
'' == undefined	//false
null == undefined	//true   说明null和undefined值相等
```

### 11.事件

> 用户行为
>
> 事件源：哪个DOM节点触发了这个事件
>
> 事件类型：
>
> ​	鼠标：click单击、dbclick双击、mouseover移入、mouseleave移出、scroll滚动
>
> ​	键盘：keydown按下、keyup抬起、keypress长按
>
> ​	input：input输入、change改变
>
> ​	焦点：获得焦点focus、失去焦点blur
>
> ​	document：resize改宽高  load页面资源加载完成了
>
> 事件的执行函数  如果触发了事件 需要做什么

- 通过监听器addEventListener

```js
事件源dom节点.addEventListener('事件类型',function(){
    //触发了事件之后的  执行函数
    //this===事件源dom节点
})
```



### 12.DOM操作

#### 12.1DOM树

> 当前节点获取父节点：  parentElement
>
> 获取当前节点的所有子节点  。children

#### 12.2获取DOM

> 通过id
>
> 通过类名
>
> 通过标签名
>
> 通过name

```html
<div id='box' class='box1' name='box2'></div>
```

```js
let dom = document.getElementById('box');	//一个dom节点
let dom = document.getElementsByClassName('box1');	//所有class=box1的节点的集合
let dom = document.getElementsByTagName('div');	//所有div标签的节点的集合
let dom = document.getElementsByName('box2');	//所有name=box2的节点的集合
```

#### 12.3新增DOM

- appendChild	createElement

  ```js
    		// 获取的dom是一个列表 有一个元素就是box2 
          let box2Dom = document.getElementsByClassName('box2')[0]     
          //1.创建一个div节点 
          let addBox = document.createElement('div')
          //2.给这个新增的节点 添加属性 （id  class style....）
          addBox.id = 'addBox'
          addBox.className = 'box10'
          addBox.style.background='red'
          //3.给这个新增的节点 添加内容（文本 子标签|节点  ....）
          addBox.innerHTML = '我是新增的盒子'
          //4.将新增节点追加到 父节点中
          box2Dom.appendChild(addBox)
          console.log(addBox);
  ```

- innerHTML  获取当前节点的所有内容  (涵盖所有的子节点)

  ```js
  父节点.innerHTML += 'html代码片段'
  ```

  ```js
    		// 获取的dom是一个列表 有一个元素就是box2 
          let box2Dom = document.getElementsByClassName('box2')[0]     
          // 在盒子的内容中 加上新增的节点
          box2Dom.innerHTML +=   '<div id="addBox" class="box10" style="background:red">我是新增的盒子</div>';
  ```

#### 12.4删除DOM

```js
节点Dom.remove()
```

#### 12.5dom样式操作

- 通过style属性操作

```js
dom.style = "color:#fff;..."
```

- 通过类名操作

```js
dom.className = "box list"	//替换赋值
//新增删除
dom.classList.add('list')	//在原有基础上添加一个list类名
dom.classList.remove('list')	//删除dom的每个类名
```

### 13.DOM操作-表单数据获取

```js
表单元素dom.value	//input  select
表单元素dom.checked	//选中状态  选中：true  未选择：false
```



```html
<input type="text"  />	//文本输入框
<input type="number"  />	//数字输入框
<textarea   />	//多行文本框
//多个单选框 通过相同的name属性 构成一组单选
<input type="radio" name="gender" value="1" />男
<input type="radio" name="gender" value="0" />女

<form action="将数据发送给谁  后端的接口地址">
    <submit type="button">提交</submit>
</form>
```

### 14.其他内置方法

#### 14.1字符串的内置方法

- substr(起始索引，个数)

> 截取字符串 

- substring(起始索引，终点索引)

> 截取字符串  左闭右开

- slice(起始索引，终点索引)

> 截取字符串
>
> 索引  支持负数（倒数第几个）

- toLowerCase

> 将所有的字母转换为小写字母

- toUpperCase

> 将所有的字母转换为大写字母、

- split

> 将字符串转换为数组  并将一个某个字符进行分割

- charAt

> 根据索引 获取对应的字符

- includes

> 判断某个字符串是否  包含在某个字符串中  包含：true  不包含：false

- indexOf

> 查找某个字符|某个字符串的位置  如果找到返回第一次

- trim

> 取消字符串两边的空格

#### 14.2Math数学方法

- random

> 取0-1的随机数 不包含0 1

```js
//包含 最小值 最大值
parseInt(Math.random()*(最大值+1))

//任意两个数字之间的值  最大值 最小值
parseInt(Math.random()*(最大值-最小值+1)+最小值)
```

- abs

> 绝对值

- round

> 四舍五入取整

- max

> 数据列表中的最大值

- min

> 数据列表中的最小值

#### 14.3window内置顶级方法

- 定时器 setInterval

> 每间隔x时间就执行【代码一直重复执行】

```js
window.setInterval(function(){},时间)	//ms
```

- 延时器 setTimeout

> 等待x时间 代码只执行一次

```js
window.setTimeout(function(){},时间)	//ms
```

- 定时器清除

```js
let timeNum=window.setInterval(function(){},1500)

window.clearInterval(timeNum)
```

- 延时器清除

```js
let timeNum=window.setTimeout(function(){},1500)

window.clearTimeout(timeNum)
```

