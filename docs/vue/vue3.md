# vue3基础

**声明式渲染**：有自己独立模版语法  template

**响应式渲染**：不再需要操作dom，只要数据发生改变（使用了这个数据的dom）页面就会刷新

**单页应用（SPA）**：整个项目只有一个html文件（多页面的实现思路，借助hash锚点---页面路由）

**服务端渲染（SSR）**：SSR为了SEO关键字搜索引擎优化

开发桌面端、移动端、WebGL，甚至是命令行终端中的界面

## 1.vite创建vue3

```js
npm create vite xxx -- --template vue
```

## 2.单文件组件SFC single File component

- vue-official
- vue 3 snippets

> 就是一个.vue文件中能写什么内容

```vue
<template>
	//html
</template>

<script setup>
    //js
</script>

//scoped只能在当前文件使用
<style lang="less|scss|stylus" scoped>
    //css
</style>
```



## 3.响应式数据 hooks-mustach语法{{}}【双向绑定】

> 数据改页面自动改
>
> 页面改数据自动改
>
> {{}}其中可以写表达式|拼接

- ref定义响应式数据

```vue
<template>
	{{a}}
</template>

<script setup>
	import {ref} from 'vue'
    
    const a =ref(初始值)
    
    //js中通过a.value获取值
</script>
```

- reactive

```vue
<template>
	{{data.a}}
</template>

<script setup>
	import {reactive} from 'vue'
    
    const data =reactive({
        a:''
    })
    
    //js中通过data.a获取值
</script>
```



## 4.vue指令

```js
<标签 v-xxx="zzz"></标签>
xxx指令名
zzz指令触发后做的事情
```

- ###### v-on

```vue
<div v-on:事件类="事件的执行函数"></div>
```

- ###### v-text  v-html  节点渲染

> v-html：
>
> 将带有标签的字符串渲染到页面dom中。可以输出带有标签的字符串并解析
>
> v-text：
>
> 将纯文本渲染到页面dom中。只是纯文本

- ###### v-show  v-if  显隐

> true：显示   false：隐藏
>
> v-show：条件不满足 操作style`display:none`
>
> v-if：条件满足则创建该标签
>
> 性能区别：

```vue
<div v-show="表达式"></div>
<div v-show="表达式"></div>
```

- ###### v-if   v-else-if  v-else判断

```vue
<div v-if="条件1"></div>
<div v-else-if="条件2"></div>
<div v-else></div>
```

- ###### v-model  form双向绑定

> 获取表单数据

```vue
<input v-model="formData.account">
<input v-model="formData.password">

<script setup>
	import {reactive} from 'vue'
    
    const formData = reactive({
        account:'',
        password:''
    })
</script>
```

- ###### v-bind  动态属性绑定	:

> 可以操作样式

```vue
<div v-bind:属性名="表达式">    </div>
<div :属性名="表达式">    </div>

<标签 v-bind:id="idName"  v-bind:class="条件1?表达式1:表达式2" v-bind:style="{background:xx;}">
```

- ###### v-for  循环

```vue
<template>
    <div v-for="(item,index) in userList" :key="index">
        <p>姓名：{{ item.name }}</p>
        <p>年龄：{{ item.age }}</p>
        <p>性别：{{ item.sex }}</p>
    </div>
</template>

<script setup>
    const userList = [{
        name: '张三',
        age:18,
        sex: '男'
    },{
        name: '李四',
        age:19,
        sex: '女'
    },
    {
        name: '王五',
        age:20,
        sex: '男'
    }]
</script>
```

- v-pre

> {{   }}

```vue
<div v-pre>{{ 从你的全世界路过 }}</div>
```

- v-cloak

> 等待页面数据拿到后 再渲染页面

- v-once

> 只渲染一次

## 5.组件化开发

> 优点：
>
> 1.可维护性高
>
> 2.复用性高

- 子组件

> 子组件命名大驼峰
>
> 子组件自己不发送axios或请求后端
>
> 创建子组件`src/components/子组件.vue`

- 父组件 App.vue

```vue
<template>
	<子组件名 />
</template>

<script setup>
	import 子组件名 from './components/子组件.vue'
</script>

<style scoped></style>
```

### 1.css预处理器

> 支持变量定义 和变量取值
>
> 层级嵌套语法
>
> 内置函数和内置处理语句

- less

```js
npm install less -D
```

```css
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

```css
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

- sass

```js
npm install sass
```

```css
$nav-color:#f90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}

//编译后

nav {
  width: 100px;
  color: #F90;
}
```

```css
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
```

## 6.vue四大周期 八大钩子函数

> 四大周期：一个vue文件运行从载入一直到销毁
>
> 钩子函数：到了某个周期自动去触发的函数

四大周期：创建周期  挂载周期  更新周期  销毁周期

- 创建周期

> 实例化vue的对象，可以在页面获取到所有的数据和方法

- 挂载周期

> 可以获取到所有的真是DOM

- 更新周期

> 只要有响应式数据发生改变，就会触发

- 销毁周期

> 组件被销毁--关闭

### vue2周期hooks函数

创建周期：beforeCreate()		created()

挂载周期：beforeMount()		mounted()

更新周期：beforeUpdate()		updated()

销毁周期：beforeDestory()		destoryed()

### vue3周期hooks函数

创建周期：onBeforeCreate()		onCreated()		[创建周期被setup代替]

挂载周期：onBeforeMount()		onMounted()

挂载周期：beforeMount()		mounted()

更新周期：onBeforeUpdate()		onUpdated()

销毁周期：onBeforeUnmount()		onUnmounted()