# HTML5基础&&CSS3

2014年更新

### 1.H5语义化标签

块级元素

```html
 	<header>
        1        
    </header>
    <main>
        2
    </main>
    <aside>
        3
    </aside>
    <footer>
        4
    </footer>
```

### 2.表单新增属性或input type值

> text 文本
>
> date日期
>
> number 数字
>
> datetime-local 日期时间
>
> color颜色选择器
>
> month、week、range、search、email、tel、url
>
> submit【x】

### 3.新增的标签属性

#### 3.1aria-*  盲人辅助

```html
<div aria-lable="我是盒子">我是盒子</div>
```

#### 3.2data-*  自定义数据

> 给标签添加数据  获取数据

> 设置数据

```html
<标签名 data-属性名=“属性值” >
```

```js
//获取数据
dom.dataset['属性名']
dom.dataset.属性名

//修改数据
dom.dataset['属性名']='新属性值'
dom.dataset.属性名='新属性值'
```

#### 3.3contenteditable  可编辑区域

```html
<div contenteditable> </div>
```

#### 3.4tabIndex  光标顺序

> 更改tab键  切换光标顺序  【提升用户的体验感】
>
> 没有设置tabIndex默认值为0
>
> 顺序 从0开始 依次通过tab切换

### 4.web存储  本地存储

#### 4.1本地永久存储  localStorage

> 数据一旦存储，永远存在
>
> 数据删除 只能通过  手动/代码清除【数据不会因为浏览器关闭 电脑关闭而清除】

- 增 删 改 查

  > 数据具体值 只能是字符串

```js
//添加数据到本地存储
localStorage。setItem('key','数据具体值')

//获取本地数据
localStorage.getItem('key')

//删除数据根据key删除对应的数据
localStorage.removeItem('key')
//清除所有的本地存储中的数据
localStorage.clear()
```

#### 4.2会话级存储  sessionStorage

> 会话存在 数据存在，会话关闭 数据自动清除
>
> 网页打开时 会话存在 数据存在，浏览器一旦关闭/网站别关闭 数据自动清除

- 增 删 改 查

```js
//增加
sessionStorage.setItem('key','数据')

//获取
sessionStorage.getItem('key')

//删除
sessionStorage.removeItem('key')
sessionStorage.clear()
```

#### 4.3批量数据存储  数组/对象存储

> 数字-->字符串  （存进自动转换为字符串）
>
> 布尔-->字符串  （存进自动转换为字符串 且false数据出错）
>
> null-->字符串  （且数据出错）
>
> undefined-->字符串（且数据出错）
>
> 
>
> Object-->字符串  （自动转换失败，数据丢失[object Object]）
>
> Array-->字符串  （自动转换失败，数据出错）
>
> function-->字符串  （自动转换失败，数据出错）

- JSON字符串

```js
//json对象
{
    "key":"value",
    "key1":"value1"
}

//json数组
"["1","2","3"]"
```

#### 4.5JSON的转换方法

> 先转json再存  先取再转

- 将js数据类型转换为json字符串

```js
JSON.stringify(变量|数据)
```

- 将json字符串转换为js对应的数据类型

```js
JSON.parse(变量|json字符串)
```



```js
let arr=[154,32,{name:'占山'}]
let arr1=JSON.stringify(arr)
```



```js
let users=[{name:'张三',age:40,like:null},{name:'李四',age:15,like:'打麻将'}]

//先转json再存
localStorage.setItem('user',JSON.stringify(users))

//先取再转
let users3=JSON.parse(localStorage.getItem('user'))
```

### 5.新增的DOM获取API

```js
//根据标签选择器 匹配满足条件的第一个dom
document.querySelector()

//根据标签选择器 匹配所有条件的dom
document.querySelectorAll()
```

### 6.视频标签 video

> 播放视频
>
> 摄像头 实时视频展示
>
> h5 video 游戏

#### 6.1video基本使用

```html
<video src="" controls width="300" height="400">  </video>
```

#### 6.2video的属性与方法

- 属性

> src   路径
>
> controls   控制台显示
>
> loop   自动循环播放
>
> autoplay   自动播放（必须要添加静音属性才可用）
>
> muted  静音

- js操作视频的方法

> load()  重新播放
>
> pause()  停止播放
>
> play()  开始播放

> currentTime  当前播放时间
>
> duration  总时长

### 7.音频标签 audio

```html
<audio src="" controls></audio>
```

- 属性

> src   路径
>
> controls   控制台显示
>
> loop   自动循环播放
>
> autoplay   自动播放（必须要添加静音属性才可用）
>
> muted  静音

- 方法

> load()  重新播放
>
> pause()  停止播放
>
> play()  开始播放

> currentTime  当前播放时间
>
> duration  总时长

### 8.svg  canvas及字体图标

> svg：引入矢量图形（不会随着网页的缩放而模糊）
>
> canvas：网页画布（画图）（用户可以 点 线 面）

- 字体图标  iconfont

> 既是图 又是文字 ===特殊的矢量图

- 字体格式

> .eot  IE浏览器兼容
>
> .ttf  windows  ios系统兼容
>
> .woff 网页浏览器的兼容字体格式
>
> .woff2  网页浏览器的兼容字体格式  升级版
>
> .svg  矢量图的文字
>
> .otf  老版本的浏览器兼容的字体

### 9.字体图标使用方式

###### 1.在线使用

> 直接引用iconfont提供的三方url地址【不稳定性】
>
> 在自己的网站使用

- unicode

> 复制链接的代码到style中

页面中使用图标

```html
<span>图标的唯一编码</span>
```

- font class

> 复制链接的代码到link href中

页面中使用图标

````html
<span class="iconfont 图标类名"></span>
````

##### css相同样式生效的排序

> 在样式的代码后加'!important'
>
> 标签style里面
>
> 通过id和类名设置
>
> 通过标签名设置



###### 2.本地使用

> 将所有的字体图标文件下载到本地【优点：稳定不需要外网  缺点：开发过程中 图标更新后需要重新下载】
>
> 需要留下的文件：iconfont.css  +所有的字体图标文件（woff|woff2|ttf|svg|eot|otf）
>
> 在html文件中引入iconfont.css

###### 3.代码习惯

> 使用i标签来显示字体图标

### 10.BOM对象-定位与三方定位

> 浏览器对象模型：操作浏览器内置好的功能

#### 10.1navigator【浏览器版本信息】

> 查用户的浏览器版本、操作系统的位数  操作系统版本 用户的位置
>
> 经纬度失真  只能获取到当前的城市  具体街道位置不准确

- 高级定位与三方地图的使用

> 高德地图使用
>
> - 开放平台官网
>
> - 添加应用     JS-API
>
> - 应用key 秘钥
>
> - 通过秘钥实现地图功能  
>
>   - 定位
>
>   - 路径规划
>
>   - 天气查询
>
> 高德地图：
>
> key：d5af10db9d5819782135b07a781c5c1e
>
> 安全秘钥：a4584420a494194e241e2aad9dc3e01c

#### 10.2history【浏览器的历史记录】

> history.forward()  	前进一页
>
> history.back()		后退一页
>
> history.go(数字)		前进/后退任意页数	==0刷新

#### 10.3location【浏览器的地址栏信息】

> 地址栏信息

> 完整的网址：协议://域名(IP地址):端口号/访问的落地页?key=value&&key1=value1

> href	url的全路径
>
> port	端口号
>
> protocol	协议
>
> search	地址?后面的数据

```js
location.href="跳转的页面地址"
```

#### 10.4screen【浏览器的屏幕信息】

> availHeight	可用高度（一般情况下 可用高度比总高度少40px 被windows底部任务栏占据）
>
> availWidth	可用宽度
>
> height	总高度
>
> width	总宽度

