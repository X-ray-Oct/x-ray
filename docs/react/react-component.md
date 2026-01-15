## react 组件开发基础

- 组件分类与组件使用
- 组件传参
  - 父传子   【函数数据传值  实参 形参对应关系】
  - 子传父
  - 插槽  
  - 透传 useContext    上下文（作用域） 
  - 跨层级调用方法   通过子组件的实例对象useRef  直接调用子组件的方法 和数据

- 状态管理（非常多）  useReducer 
  - redux  
  - redux-toolkit  最佳实践 
  - mobx 
  - dva 

- 路由   react-router-dom 
  - 配置式 路由  router.jsx
  - 将路由的代码 直接写入到 父组件里面

- UI 库   ：antd 管理系统    antd mobile  移动端 app          nutUi+taro 小程序   





## 1.组件分类与组件使用

> 组件分类： 
>
> ​     页面级组件 
>
> ​     业务组件 
>
> ​     公共组件

> 组件使用步骤：  1创  2导  3使用 4传值、
>
> 组件名： 必须使用大驼峰

- 父组件

```jsx

import React from 'react'
// 导入
import AppHeader from '@/components/appHeader/AppHeader'
export default function App() {
  return (
    <>
      <AppHeader/>
      <AppHeader> </AppHeader>
    </>
  )
}

```

- 子组件

```jsx
import React from 'react'
import './index.less'
export default function AppHeader() {
  return (
    <div>AppHeader</div>
  )
}

```



## 2.组件通信【单向数据流】

### 1.父传子  子传父  

> react 的组件就是一个普通函数 
>
> 父传子 
>
> 组件使用：  父函数  调用 子函数
>
> 父组件 写入实参   
>
> 子组件 通过形参接受数据

- 父组件

> 父组件 写入实参：  通过 静态属性 或动态属性 传递

```jsx
import Child from '@/components/child/Child'

export default ()=>{
    
    
    return (
        <Child title="我是爸爸传递的数据" num={1000}   obj={name="张麻子"}> </Child>
    
    )
    
}


```

- 子组件 

> 子组件通过形参 props 全部一次性接收父组件传递的数据

```jsx
export default (props)=>{
    let {num,title,obj} = props;
    if(typeof num !='Number'){
       	return 'num的数据格式错误'
     }
    if(Object.prototype.toString.call(obj) !='[object Object]'){
       	return 'obj数据格式错误！'
    }
    
    return (
    	<>
          <div>我是儿子组件</div>
        	{props.num}
        	{obj.name}
        </>
    
    )
}
```



### 2.子传父       

> 将父组件的方法 传递给子组件  
>
> 子组件调用这个方法  直接修改父组件的数据  

- 父组件

```jsx
import Child from '@/components/child/Child'

export default ()=>{
    const [num,setNum] = useState(1000)
    const changeNum=(newNum)=>{
        setNum(newNum)
    }
    return (
        <Child title="我是爸爸传递的数据" num={num} changeNum={changeNum}   obj={name="张麻子"}> </Child>
    
    )
}
```

- 子组件

```jsx

export default (props)=>{
    const {num,title,obj,changeNum} = props;
    return (
    	<>
          <div>我是儿子组件</div>
        	{props.num}
        	{obj.name}  

        <button onclick={()=>changeNum(num+1) > +++</button>
        </>
    )
```

### 3.插槽  

> 父组件 将 html 代码 传递给子组件
>
> 父组件 传递给子组件的html代码 全部会自动的  放到 `props.children`
>
> props.children    值 
>
> 如果父组件没有传递html代码 ，children 的值 是 `undefined`
>
> 如果父组件只传递了  一行html代码 ，children 的值 就是一个对象（描述传递过来的html jsx ） 
>
> 如果父组件传递了  多行html代码，children的值  就是 一个数组（包含多个对象）

- 父组件 

```jsx
         <h1>我是爸爸组件的html代码</h1>
        <hr />
        <Son >
            <div>我是爸爸组件传递给儿子组件的 html代码</div>
            <table>
                <thead>
                  <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>成绩</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>嘻嘻嘻</td>
                        <td>22</td>
                        <td>88</td>
                    </tr>
                </tbody>
            </table>
        </Son>
```

- 子组件 

```jsx
import React from 'react'

export default function Son(props) {
    const {children} = props
  return (
    <>      
            {children[1]}
             <h1>我是儿子组件自己的html代码</h1>
            {children[0]}
    </>
  )
}

```

## 4.透传 useContext  createContext   上下文（作用域）

> 爷爷组件 可以直接传递数据 给孙子组件  
>
> 跨层级 不限制 

vue2 $bus   eventBus  中央事件总线

- 爷爷组件   

> 商品信息 传递  --商品列表  Goods.jsx

```jsx
import {createContext,useState} from 'react'
import Info from '@/components/info/Info'
//在顶级组件 暴露之前必须定义好 上下文
export const GoodsContext = createContext(null);

export default  ()=>{
    const [goodsInfo,setGoodsInfo] = useState({
        id:1122,
        title:'华为收集 mate6',
        price:5000
    })
    const changeGoodsInfo = ()=>{
        let goods = {...goodsInfo}
        goods.price++
        setGoodsInfo(goods)
    }
    
    return (
         <>
           <GoodsContext.Provider value={goodsInfo}>
        	<Info />
            </GoodsContext.Provider>

            <button onClick={changeGoodsInfo}>+</button>
        </>
    
    )
    
}

```

- 爸爸组件   Info.jsx

> 商品详情组件

```jsx
import Order from '@/components/order/Order'
export default ()=>{
    return (
    	<>
          <div>爸爸组件自己的内容</div>
          <Order />
        </>
    
    )
}
```

- 孙子组件   Order.jsx

> 下单组件

```jsx
import {useContext} from 'react'
import {GoodsContext} from '@/App2'
export default ()=>{
    const goodsInfo =  useContext(GoodsContext)
    
    return (
    	<>
           <div> 价格：{goodsInfo.price} </div>
        </>
    )
}
```



## 5.子组件的实例对象useRef   useImperativeHandle  

> 父组件 需要拿子组件的数据



- 父组件

```jsx
import Son1 from '@/components/son1/Son1'
import {useRef,useEffect} from 'react'
export default ()=>{
    const sonRef = useRef(null);
    useEffect(()=>{
       let res =  sonRef.current.getData()
       console.log(res);
        
    },[])
    
    
    return (
    	<>
          <div >爸爸组件自己的内容</div>
          <Son1 ref={sonRef} />
        </>
    
    )
}
```

- 子组件 

> useImperativeHandle ：  通过hoos 将子组件 想要暴露给 父组件的  方法和数据 暴露出去 

```jsx
import {useState,useImperativeHandle} from 'react'

export default ({ref})=>{
	 const [num,setNum] = useState(100)
     const getData = ()=>{
         return '我是子组件的方法，获取数据的方法'
     }
     const changeNum = ()=>{
         setNum(num+1)
     }
    //  需要子组件通脱
     useImperativeHandle(ref,()=>{
           return {
            num,
            getData,
           } 
     })

    return (
    	<>
           <div> 价格：{num} </div>
        <button onClick={changeNum}>+ </button>
        </>
    )
}
```

- localStorage   sessionStorage 





## 6.路由   react-router v7

> react 19 ===router v7
>
> react16.8--react 18   ====router v6
>
> react13-react16.8   ===reouterv5

> 1.创  2配 router.jsx    3.占位   4.测试

- 安装

```js
pnpm install react-router 
```

- 创建页面

- router/index.jsx

```jsx
import {createBrowserRouter} from "react-router";
import Home from '@/pages/home/Home'
import Coding from '@/pages/coding/Coding'
import Pins from '@/pages/pins/Pins'
import Course from '@/pages/course/Course'
import App from '@/App.jsx'
import Following from '@/pages/following/Following'
import Frontend from "@/pages/frontend/Frontend";
const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                Component:Home,
                children:[
                    {
                        index:true,
                        Component:Following
                    },
                    {
                        path:'frontend',
                        Component:Frontend
                    },
                ]
              },
              {
                  path: "coding",
                  Component:Coding
              },
              {
                  path: "pins",
                  Component:Pins
              },
              {
                  path: "course",
                  Component:Course
              }
        ]
    }
  ]);

  export default router
```

- main.jsx 

```jsx

import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider} from "react-router";
import router from './router'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}> </RouterProvider>
)

```

- 占位  

App.jsx  给所有一级路由占位

```jsx
import React from 'react'
import { Outlet } from 'react-router'
export default function App() {
  return (
    <>
      <div>我是顶部</div>
      <Outlet/>
    </>

  )
}

```

Home.jsx 给 home子页面占位

```jsx
import React from 'react'
import { Outlet } from 'react-router'
export default function Home() {
  return (
    <>
      <div className="left">
          左侧菜单
      </div>
      <div className="content">
          <Outlet></Outlet>
      </div>
      <div className="toplist">
        排行榜
      </div>
   
    </>
  )
}

```
