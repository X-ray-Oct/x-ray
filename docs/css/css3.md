# 前端基础CSS3

- css选择器
- flex布局

## 1.CSS选择器

### 1.1 基本选择器[了解]

| ***\*选择器\****    | ***\*类型\**** | ***\*功能简介\****                                   |
| ------------------- | -------------- | ---------------------------------------------------- |
| *                   | 通配选择器     | 选择文档中所有的HTML元素                             |
| Element             | 元素选择器     | 选择指定的类型的HTML元素                             |
| #id                 | ID选择器       | 选择指定ID属性值为“id”的任意类型元素                 |
| .class              | 类选择器       | 选择指定class属性值为“class”的任意类型的任意多个元素 |
| selector1,selectorN | 群组选择器     | 将每一个选择器匹配的元素集合并                       |

### 1.2 层次选择器

| **选择符** | **名称**                                | **版本** | **描述**                                                     |
| ---------- | --------------------------------------- | -------- | ------------------------------------------------------------ |
| E F        | 包含选择符(Descendant combinator)       | CSS1     | 选择所有被E元素包含的F元素。 递归遍历所有子元素孙子元素   【祖孙选择器】 |
| E>F        | 子选择符(Child combinator)              | CSS2     | 选择所有作为E元素的子元素F。遍历第一层子元素  【父子选择器】 |
| E+F        | 相邻选择符(Adjacent sibling combinator) | CSS2     | 选择***\*紧贴\****在E元素之后F元素。【后面一个兄弟F】        |
| E~F        | 兄弟选择符(General sibling combinator)  | CSS3     | 选择E元素之后所有兄弟元素F。【后面的所有兄弟F】              |

### 1.3 伪类选择器

#### 1.3.1 动态伪类选择器

| **选择符** | **版本** | **描述**                                                     |
| ---------- | -------- | ------------------------------------------------------------ |
| E:link     | CSS1     | 设置超链接a在**未被访问前**的样式。                          |
| E:visited  | CSS1     | 设置超链接a在其链接地址**已被访问过**时的样式。              |
| E:hover    | CSS1/2   | 设置元素在其鼠标**悬停**时的样式。                           |
| E:active   | CSS1/2   | 设置元素在被用户激活（在**鼠标点击**与释放之间发生的事件）时的样式。 |
| E:focus    | CSS1/2   | 设置元素在成为**输入焦点**（该元素的onfocus事件发生）时的样式。 |

#### 1.3.2 目标伪类选择器

> 页面锚点 

```css
        div {
            background: #ccc;
            width: 100%;
            height: 500px;
            /* none隐藏   block显示 */
            display: none; 
        }

        /* 当前 锚点 操作对应的盒子 */
        div:target {
            color: #f00;
            border: 1px solid #f00;
            display: block;
        }
```

```html

<a href="#box1">网站首页1</a><a href="#box2">网站首页2</a><a href="#box3">网站首页3</a>
<div id="box1">内容1</div>
<div id="box2">内容2</div>
<div id="box3">内容3</div>
```

#### 1.3.3 结构伪类选择器

| **选择符**            | **版本** | **描述**                                                     |
| --------------------- | -------- | ------------------------------------------------------------ |
| **E:first-child**     | CSS2     | 匹配父元素的第一个子元素E。E元素必须是某个元素的子元素，最高是body.first-child必须是兄弟中的第一个 |
| **E:last-child**      | CSS3     | 匹配父元素的最后一个子元素E。                                |
| E:only-child          | CSS3     | 匹配只有一个子节点的子元素。                                 |
| **E:nth-child(n)**    | CSS3     | 匹配父元素的第n个子元素E。  2n:匹配所有偶数E标签    2n+1:奇数 |
| E:nth-last-child(n)   | CSS3     | 匹配父元素的倒数第n个子元素E。                               |
| E:first-of-type       | CSS3     | 匹配同类型中的第一个同级兄弟元素E。                          |
| E:last-of-type        | CSS3     | 匹配同类型中的最后一个同级兄弟元素E。                        |
| E:only-of-type        | CSS3     | 匹配同类型中的唯一的一个同级兄弟元素E。                      |
| E:nth-of-type(n)      | CSS3     | 匹配同类型中的第n个同级兄弟元素E。                           |
| E:nth-last-of-type(n) | CSS3     | 匹配同类型中的倒数第n个同级兄弟元素E。                       |
| E:empty               | CSS3     | 匹配没有任何子元素（包括text节点）的元素E。如果选中的元素中有代码有换行在里面（换行带了文本节点），会选不中。 |

####  1.3.4 否定伪类选择器

> 除了S节点之外的E都选中

| **选择符** | **版本** | **描述**                   |
| ---------- | -------- | -------------------------- |
| E:not(s)   | CSS3     | 匹配不含有s选择符的元素E。 |

#### 1.3.5 伪元素

> ### first-letter
>
> “::first-letter”用来选择文本块的第一个字母。
>
>  
>
> ### first-line
>
> “::first-line”用来匹配元素的第一行文本。
>
>  ***\*::before\* ***   ::after
>
> ### 	
>
> “::before”和“::after”不是指存在于标记中的内容，而是可以插入额外内容的位置。尽管生成的内容不会成为DOM的一部分，但它同样可以设置样式。
>
>  
>
> ### 	***\*::placeholder\****
>
> ::placeholder 伪元素用于控制表单输入框提示符的外观
>
>  
>
> 兼容语法：
>
> input::-webkit-input-placeholder  // chrome
>
> input:-ms-input-placeholder // IE10+
>
> input:-moz-placeholder  // Firefox4-18
>
> input::-moz-placeholder  // Firefox19+
>
>  
>
> ### 	***\*::selection\****
>
> “::selection”是用来匹配鼠标选中的文本。

### 1.4 属性选择器

| **选择符**     | **版本** | **描述**                                                     |
| -------------- | -------- | ------------------------------------------------------------ |
| E[att]         | CSS2     | 选择具有att属性的E元素。                                     |
| E[att="val"]   | CSS2     | 选择具有att属性且属性值等于val的E元素。                      |
| E[att~="val"]  | CSS2     | 选择具有att属性且属性值为一个用空格分隔的字词列表，其中一个等于val的E元素。 |
| E[att^="val"]  | CSS3     | 选择具有att属性且属性值为以val***\*开头\****的字符串的E元素。 |
| E[att$="val"]  | CSS3     | 选择具有att属性且属性值为以val***\*结尾\****的字符串的E元素。 |
| E[att*="val"]  | CSS3     | 选择具有att属性且属性值为包含val的字符串的E元素。            |
| E[att\|="val"] | CSS2     | 选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择。 |

 注意：所有的选择器都可以使用js获取dom的新语法中

```js
document.quarySelector('选择器')
document.quarySelectorAll('选择器')
```

## 2.flex布局

### 2.1flex概念基础

- 盒模型的分类

> 块级盒子  block
>
> 行内盒子  inline
>
> 行内块盒子  inline-block  具备一定属性的块和行内的盒子

css设置盒模型分类

```css
display:什么盒子类型；	none：不是盒子 什么都没有
```

### 2.2flex盒子的别称



## 3容器属性

> 设置到大盒子身上的css样式

### 3.1display设置父盒子为容器

```css
display:flex;
```

### 3.2flex-direction设置主轴及侧轴方向

> - row  从左至右水平线
> - row-reverse  从右至左水平线
> - column  从上至下垂直线
> - column-reverse  从下至上垂直线

### 3.4justify-content 主轴项目的排列方式

> - flex-start  主轴起点
> - flex-end  主轴终点
> - center  居中
> - space-between  两端对齐  项目之间间隔相等
> - space-around  每个项目两侧的间隔相等
> - space-evenly  每个盒子的左右间距都相同





### 3.5align-items单个侧轴对齐方式

> - flex-start  侧轴起点
> - flex-end  侧轴终点
> - center  居中
> - baseline  基线对齐
> - stretch  如果项目未设置高度或为auto 则将占满整个容器高度



### 3.6flex-wrap换行

> - wrap  换行
> - nowrap  不换行
> - wrap-reverse  逆序换行



### 3.7align-content  多个侧轴对齐方式

> - flex-start
> - flex-end
> - center
> - stretch（默认值）
> - space-around  环绕
> - space-between
> - space-evenly



## 4.项目属性

### 4.1order 设置项目的出场顺序

> 数字：默认值为0  出场顺序：由小到大 可以为负数

### 4.2flex-grow  放大比例

> 如果所有项目排列完成后 将剩余空间占据多少份分配给盒子
>
> 数字：可以是小数 也可以正整数

### 4.3flex-shrink  缩小倍数

> 数字：可以是小数 也可以正整数  默认值：1

### 4.4flex-basis固定大小

> 不放大不缩小
>
> 设置了高宽，但是受弹性布局的影响，高宽被更改，强制设置高宽的值
>
> 先设置放大缩小倍数为0

### 4.5flex设置放大 缩小 固定值

> 如果只需要放大值，就写一个参数
>
> 设置缩小值  前面两个

```css
flex:放大值 缩小值 固定值
```

### 4.6align-self  设置某个项目的侧轴对齐方式