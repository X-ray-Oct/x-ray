## CSS3变形  动画

## 1.CSS3渐变

### 1.1线性渐变

> 方向值：通过点位 
>
> ​	通过角度 deg

```css
background:linear-gradient(方向值,颜色值1,颜色2...)
background:inear-gradient(to 点位值,颜色值1,颜色2...)
background:linear-gradient(点位值（左上角这种多个值不用to）,颜色值1,颜色2...)
```

### 1.2径向渐变

> 由内而外的渐变

```css
background:radial-gradient(颜色值1，颜色值2...)
```

### 1.3重复渐变

> 一个颜色设置占比后重复多次

- 重复线性渐变

```css
background:linear-gradient(方向值,颜色值1 10%,颜色2 15%...)
background:inear-gradient(to 点位值,颜色值1 10%,颜色2 10%...)
```

### 1.4文字渐变

```css
background:linear-gradient(方向值,颜色值1,颜色2...
background-clip:text;	//以文字区域进行截取
//文字颜色透明  css3最新浏览器支持度不高  浏览器的内核声明
-webkit-text-fill-color:transparent	//文字区域  清除默认填充色
```

## 2.变形  transform

### 2.1平移  translate

```css
transform:translate(x坐标值,y坐标值)
```

### 2.2缩放  scale

```css
transform:scale(x轴缩放倍数,y轴缩放倍数)
```

### 2.3旋转  rotate

```css
transform:rotate(旋转角度deg)
transform:rotateX(翻转角度deg)
transform:rotateY(翻转角度deg)
```

- 旋转原点

```css
transform-origin:(top/px/%)
```

### 2.4斜切  skew

```css
transform:skew(角度值)
```

## 3.动画定义与使用

### 3.1关键帧的定义  动画定义

```css
@keyframes  关键帧名字/动画名{
    //起始帧
    from{
        //css样式
    }
    //结束帧
    to{
        //css样式
    }  
}
```

- 多个关键帧的定义

```css
@keyframes  关键帧名字/动画名{
    //起始帧
    0%{
        //css样式
    }
    20%{
        
    }
    //结束帧
    100%{
        //css样式
    }  
}
```



### 3.2使用关键帧/动画

```css
.box{
    animation:动画名 动画执行时长 等待时长...;
}
```

## 4.动画属性

- 动画名  animation-name
- 动画执行时长  animation-duration
- 动画等待时长  animation-delay
- 快慢曲线（贝塞尔曲线）animation-timing-function
  - linear  线性
  - ease  平滑
  - ease-in  由慢到快
  - ease-out  由快到慢
  - ease-in-out  慢快慢

- 循环次数  animation-iteration-count
  - infinite
  - 具体次数
- 是否反向运动  animation-direction
  - normal  不反向
  - alternate  反向运动  也占据循环次数

- 动画持续时间  结束瞬间状态  animation-fill-mode
  - forwards：设置对象状态为动画结束时的状态
  - backwards：设置对象状态为开始时的状态

- 动画默认的运行状态  animation-play-state
  - 开始运行  running
  - 暂停运行  paused

## 5.js操作动画

```js
dom.style.属性名=''
```

## 6.三方动画  animation.css