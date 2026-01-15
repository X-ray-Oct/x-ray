# vue3组件通信与内置hooks

## 1.组件通信

> 组件和组件之间传值
>
> 遵循单向数据流
>
> 父组件：通过动态属性（可以传递任何数据类型）或静态属性（只能传递字符串）传递
>
> 子组件：顶级hooks不需要进行导入，直接使用defineProps
>
> ```vue
> const props = defineProps({
> 	data:{
> 		type:Number,
> 		//设置默认值（如果父组件没有传递 就使用默认值）
> 		default:0
> 	},
> 	str:{
> 		type:String,
> 		//设置默认值（如果父组件没有传递 就使用默认值）
> 		default:''
> 	},
> 	arr:{
> 		type:Array,
> 		//设置默认值（如果父组件没有传递 就使用默认值）
> 		default:()=>[]
> 	},
> 	obj:{
> 		type:Object,
> 		//设置默认值（如果父组件没有传递 就使用默认值）
> 		default:()=>({})
> 	}
> })
> ```
>
> 

- ###### 父传子

> 父组件传递数据给子组件

- ###### 子传父

> 子组件传递数据给父组件
>
> 通过自定义事件 将子组件的数据传递给父组件的事件执行函数

- ###### 乱传	状态管理   vuex  pinia

> 每个组件都可以传递给任意一个组件数据
>
> 需要传递数据出去，把数据放到公共空间
>
> 获取数据时，通过公共空间进行获取

- 下载pinia

```vue
npm i pinia
```

- 定义状态仓库	/src/stores/模块文件名.js

```js
//导入defineStore方法 创建实例对象 暴露
import {definrStore} from 'pinia'

//函数式编程 只要是函数 以usexxx开头
//defineStore  参数1:唯一的模块标记。不同的stores中的模块文件，不能重复
export const useMusic = defineStore('参数1',{
    //状态
    state:()=>({
        playMusic:'默认歌曲'
    }),
    //装饰器
    getters:{
        
    },
    //行为：修改状态方法的定义
    actions:{
        
    },
    //插件:数据持久化【关闭浏览器后，再次打开有之前的数据】
    Plugins:{
        
    }
})
```

- 全局挂载main.js

- 使用仓库中的状态

1. 获取数据

```js
import {useMusic} from '@/stores/music'
const musicStore = useMusic()

musicStore.playMusic
```

   2.修改数据

```js
import {useMusic} from '@/stores/music'
const musicStore = useMusic()

musicStore.playMusic='新数据'
musicStore.$patch({playMusic;'新数据'})
//推荐
musicStore.changeMusic('新数据')
```

## 2.插槽

> 传递html vue代码

> 在部分情况下，将父组件的template代码传递给子组件，调用方高度自定义

> 在父组件调用子组件时，传递html代码到子组件，提前定好位置

#### 2.1匿名插槽

- 父组件

```vue
<template>
	<子组件标签>
    	
    </子组件标签>
</template>

<script setup></script>
```

#### 2.2具名插槽

```vue
<子组件>
    <template  v-slot:title>
         <div>111</div>    
     </template>
      <div>2222</div>  
</子组件>
```

```vue
<template>
       <slot name="title"> </slot>
		<div>子组件自己的代码 </div>
       <slot> </slot>
</template>
```

#### 2.3作用域插槽

> 作用域插槽：将父组件的html传递给子组件的slot后，并可以使用子组件的数据

```vue
<子组件>
    <template  v-slot:title="scope">
         <div>{{scope.xxx}}</div>    
     </template>
      <div>2222</div>  
</子组件>
```

```vue
<template>
       <slot name="title"> </slot>
		<div>子组件自己的代码 </div>
       <slot> </slot>
</template>


<script>
    const xxx = ref(10000)

</script>
```

```vue
<子组件>
    <template  #title="scope">
         <div>{{scope.xxx}}</div>    
     </template>
      <div>2222</div>  
</子组件>
```

## 3.watch  侦听器  监听器

> 1.监听普通数据和引用数据有区别，引用数据类型需要深度监听
>
> ​	如果监听的引用数据类型层级太多，深度监听可以加上第三个参数`{deep:true}`
>
> 2.只有监听的数据发生变化，才会执行函数体，不会默认执行
>
> 加入属性`{immediate: true}`

> 代替声明周期 `onBeforeUpdate`  `onUpdated`
>
> 监听某一个变量的值发生改变，处理一些业务
>
> 地址栏发生变化，可以根据地址看添加导航

## 4.computed计算属性

> 监听某个变量发生改变后----只要参与computed函数体中的任意一个变量，发生改变都会重新执行整个函数，得出一个新的结果值
>
> - 必须有return
> - 进入页面自动执行一次
> - 依赖缓存

```js
<template>{{xxx}}</template>

import {computed} from 'vue'

const xxx = computed(()=>{
    //业务代码中 如果有多个响应式数据  某个数据发送改变 整个函数体重新执行
    return 计算完成的数据;
})
```

