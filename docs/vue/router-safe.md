## vue3 外卖管理系统

- 路由配置 404页面
- 路由-前置路由守卫
- pinia 数据持久化     ----vuex数据持久化
- vite 服务器代理-解决跨域处理   【面试高频】



## 1.路由配置 404页面

- 创建 404 页面       Error.vue
- 配置404 路由         
- 测试

```js
const routes = [
    {},
    {},
    
    //数组最后，配置404路由  
    // * 所有的访问的路径都可以加载 配置，
    {
        path:'/:pathMatch(.*)*',
        component: () => import('@/views/error/Error.vue')
    }
]

```



```vue
<template>
  <div class="error" @click="back">   
      <h1>错误页面，将会在 {{num}}秒后自动返回....</h1>
    <el-button type="primary" @click="back"> 返回上一页</el-button>
  </div>
</template>

<script setup>
import {ref,onBeforeUnmount}    from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const num =ref(5)

const back = () => {
  router.go(-1)

}

const timer = setInterval(() => {
  num.value--
  if(num.value == 0){
    router.go(-1)
  }
}, 1000)

onBeforeUnmount(() => {
  clearInterval(timer)
})


</script>

<style scoped lang="scss">
.error{
    width: 100%;
    height: 100%;
    background: url('@/assets/img/404.jpg') no-repeat center center;
    background-size: 100%;
}
</style>
```

## 2.路由前置守卫

```js

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由前置守卫
// 如果用户没有登录  不能够访问 除（/login）之外的所有页面  
// 否则  用户已经登录 ，可以访问所有页面
router.beforeEach((to, from) => {
    // 排除 不需要登录的页面，如果是不需要登录的页面  直接去
    let noLogin = ['/login', '/register', '/404', '/resetPwd']
    if (noLogin.includes(to.path)) {
        return true;
    }
    if (sessionStorage.getItem('user')) {
        // 放行
        return true;
    }
    return false

    //to: 要去的页面的信息
    //from: 从哪个页面来的信息
    // next: 放行函数   如果能够去这个页面  next()  如果不能去这个页面  next('/login')
    //next 是可选的  可以通过return true === next()     return false === next('/login')
})



export default router

```

## 3.pinia数据持久化    ---vuex

> 为什么做数据持久化
>
> 刷新页面关于pinia存储数据，都会自动变为默认值

