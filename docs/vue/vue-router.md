# vue3路由 vue-router

## 1.快捷生成SFC的方法

自己配置代码片段

## 2.路由概念

> 路由：页面和页面之间的关系和实现多页面之间的相互跳转

> 作用：在路由中需要声明页面和页面的关系
>
> 通过路由的内置方法可以实现页面和页面之间的跳转切换

## 3.组件分类

- 页面级组件【页面】
- 业务级组件【某个页面中的一个功能模块封装起来 在页面中可以调用】
- 公共组件【某个页面中的一个功能模块封装起来 在多个页面中可以调用】 通用性更强，甚至跨项目使用

#### 定义组件的规范：

- 命名规范：大驼峰.vue
- 页面级组件【页面】  `src/pages/About.vue`  ` src/views/About.vue`

- 业务级组件  ` src/views/about/About.vue`==>  `src/views/about/components/子组件名称.vue`

- 公共组件``src/components/组件名称.vue``

## 4.vue-router基础使用

> 1创（页面组件）	2配置（配置路由）  3占位（想要将当前父页面的哪些位置给子页面显示）  4测试（修改访问url观察是否切换到对应的页面）

###### 2.配置

> 在src/router/index.js

```js
//导入router的两个方法  hash||history
import {createWebHashHistory,createRouter} from 'vue-router'

//配置声明 页面间的关系  数组
//先将所有页面导入至文件中
import A from '../...'
import B from '../...'

const routes = [
    //一个对象就是一个页面的配置
    {
        path:'/a',		//访问的url地址
        component:A		//访问url对应的组件
    },
    {
        path:'/b',		//访问的url地址
        component:B		//访问url对应的组件
    }
]

//通过关系的数组  初始化一个路由实例对象
const router = createRouter({
    history:createWebHashHistory(),	//	路由模式选择hash(利用锚点跳转页面,url地址栏多一个#)|history(历史记录栈，没有#)
    routes
})

//将实例对象暴露出去  在main.js中导入实例对象，挂载到整个项目中
export default router;
```

> main.js导入实例对象，挂载到整个项目中

```js
//导入
import router from './router/index.js'

//挂载
createApp(App).use(router).mount('#app')
```

###### 3.占位

> 将父页面中的地方给子页面显示
>
> 通过占位符，访问子页面的路由时，会加载组件替换占位符

```vue
<router-view> </router-view>
```

###### 4.测试

## 5.路由重定向

> 当访问

```js
const routes = [
    //重定向
    {
      path:'/'
      redirect:'/a'
    },
    //一个对象就是一个页面的配置
    {
        path:'/a',		//访问的url地址
        component:A		//访问url对应的组件
    },
    {
        path:'/b',		//访问的url地址
        component:B		//访问url对应的组件
    }
]
```

## 6.路由的两个顶级对象 useRouter useRoute

- 通过标签【原生】

```html
<a href="/#/b">b页面</a>
```

- vue router  对a标签进行了二次封装

```html
<router-link to="/b">b页面</router-link>
```

- 通过js跳转【原生】

```js
location.href='/#/b'
```

- vue-router对location和history进行二次封装

```js
import {useRouter} from 'vue-router'

const router = useRouter();

//函数式跳转页面
router.push('/b')
router.go(-1)//返回上一页
```

## 7.vite配置 快捷访问 src别名配置

> 在vite.config中

```js
在plugin下添加
resolve:{
    alias:{
        '@':'/src'
    }
}
```

