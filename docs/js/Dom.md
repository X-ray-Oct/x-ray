# 对象操作-正则表达式-事件进阶

## 1.对象操作方法

- Object.keys(对象)

> 获取所有属性9（可迭代|非原型属性），并返回属性组成的新数组



- Object.values(对象)

> 获取对象所有值 并返回新数组



- Object.assign(对象1，对象2，对象3...)

> 将后面的对象合并到对象1中，返回被修改之后的对象1
>
> 不影响对象的值  可以Object.assign({}，对象1，对象2，对象3...)
>
> 合并对象出现重复属性，后面的属性值会覆盖前面的属性



- 取值

```js
let obj = {
    key:'value'
    key1:'value1'
}

obj.key		//'value'
obj['key']	//'value'
```



- 循环  for in  	for of

> for in
>
>  对象-->拿到对象的属性
>
> 字符串/数组-->拿到对应的索引
>
> 不支持数字

> for  
>
> 数组的length-->获取索引
>
> 字符串的length-->获取索引
>
> 支持数字

> for of  （拿值）
>
> 数组-->拿到数组的元素
>
> 字符串-->获得单个字符
>
> 不支持对象、数字



## 2.正则表达式

> 检查某个字符串是否满足预定的规则

### 2.1定义

- 实例化方式

```js
let reg = new RegExp(/规则/)
```

- 字面量方式

```js
let reg = /规则/
```

### 2.2使用

```js
let tell = 13100000001
let tellReg=/规则/
    
//检测
tellReg.test(tell)
```

### 2.3规则的定义

- `^`以xx开头
- `$` 以xx结尾

- `[]``()`表示取一位
- xxx-xxx   从xxx到xxx
- {数字,数字}  前面一位重复的次数  {最少次数，最多次数}
- |  或者

> [0-9]   \d：0-9取一位数字
>
> [0-9|a-z]：a-z或0-9取一个
>
> [\u4e00-\u9fa5]取一个汉字

> /规则/标识符

- i  不区分大小写
- g  全局匹配  一般用于字符串的替换

## 3.事件进阶-第四要素 event对象

> 事件源  事件触发对象
>
> 事件类型
>
> 事件执行函数
>
> 事件对象 event ：描述事件从触发到执行函数结束 整个过程的记录本

> click
>
> （clientX、clientY）、（layerX、layerY）、（pageX、pageY）当前触发事件的位置  相对于整个页面
>
> offsetX、offsetY  当前触发事件的位置  相对于盒子
>
> screenX、screenY  当前触发事件的位置  相对于电脑屏幕
>
> - target  事件源
> - type  事件触发类型

> KeyBoard
>
> key  键盘按下的键位
>
> keyCode  键码值 
>
> - target  事件源
> - type  事件类型

> 键码值：
>
> a|A(中英文键盘值不一样，英文状态)：65
>
> 0:  96（右侧键盘）||48
>
> 回车：13
>
> shift：16
>
> ctrl：17
>
> alt：18
>
> 空格：32
>
> F1:112   F12:123

### 获取滚动条距离顶部的位置

```js
//获取滚动条距离顶部的位置
let top = document.documentElement.scrollTop || document.body.scrollTop
```

### 3.2event 进阶事件-阻止冒泡

```js
//阻止事件冒泡，多个盒子点击相同部位时，只执行当前函数
event.stopPropagation();

//阻止浏览器的默认事件/默认事件	a、input、focus
event.preventDefault();
```

### 3.3event应用场景-未来元素事件监听

> 通过js生成的html代码

### 事件委派【委托 代理】

> 将子盒子的事件交给父盒子监听  （自己的事件委派给父盒子监听），根据事件流 事件冒泡实现
>
> 通过event.target触发事件的dom对象  判断是否是需要监听的子盒子，再进行相关事件的处理
>
> 优点：
>
> 1.提升性能（将很多子节点的循环事件交给一个父盒子监听）
>
> 2.给未来元素做事件绑定

## 4.事件触发流程-事件流

> 1.事件捕获
>
> 2.当前dom触发
>
> 3.事件冒泡（当前开始 一层一层往上）

```js
document.xx.addEventListener('click',function(){
    
},true)	//true显示捕获顺序	flase显示，冒泡顺序
```

## 5.Date操作  日期

- 实例化定义

```js
let date = new Date()	//格林威治标准格式
```

- 日期转换

北京时间转为格林威治

```js
let date = new Date('北京时间')
```

- 时间戳获取方法

> 格林威治 标准时间.getTime()   13位毫秒级时间戳

```js
let date = new Date()
let date1 = date.getTime()
```