## react 状态管理库   14:20

- react 路由（补充） `数据路由`

- 路由hooks 

  - 路由跳转  （方法 标签/内置方法）
  - 获取路由地址栏信息  
  - 动态路由实现（多角色权限路由）

- redux   redux-toolkit  状态管理

- antd  组件使用 

  

## 1.react 路由   声明式路由 

> v7:  数据式路由【推荐】  声明式路由
>
> v6: 约定式路由【推荐】      配置式路由

main.js

```jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '@/pages/home/Home'
import Coding from '@/pages/coding/Coding'
import Pins from '@/pages/pins/Pins'
import Course from '@/pages/course/Course'

import Following from '@/pages/following/Following'
import Frontend from "@/pages/frontend/Frontend";

createRoot(document.getElementById('root')).render(
        <BrowserRouter>
                <Routes>
                        <Route path="/" element={<App />}>
                         <Route   element={<Home/>}>
                                <Route index element={<Following/>}></Route>
                                <Route path="frontend" element={<Frontend/>}></Route>
                         </Route>                
                        </Route>
                </Routes>
        </BrowserRouter>
       
)
```



## 2.路由hooks 

#### 2.1 跳转页面

- 通过组件跳转      原理 重新封装了a 标签

  ```jsx
<NavLink to="跳转路径" >
        Home
</NavLink>
  ```

- 函数式编程 跳转    hooks 跳转

```jsx
import { useNavigate } from "react-router";


  let navigate = useNavigate();

navigate(数字)  //前进几页  后退几页
navigate('/goods')   //直接跟路径
```



## 2.2 获取路由地址栏信息  

```jsx
import { useLocation } from 'react-router'

let location = useLocation()   //{path:'/xxx',hash:'/#/xxx'}


```



## 3.外卖管理系统 -项目搭建

- 技术栈

> vite 
>
> react19 
>
> react-router v7
>
> less  [新知识点：模块化css] 
>
> axios || Fetch [新知识点：fetch代替axios]
>
> antd [新知识点]
>
> antd charts [新：图表插件]



- 路由配置

1.创建所有的页面 

2.创建路由配置文件 src/router/index.jsx

> 注意 layout 页面需要反复多次使用

```jsx
import { createBrowserRouter } from "react-router";

import App from '@/App'
import Login from '@/pages/login/Login'
import Layout from '@/pages/layout/Layout'
import Home from '@/pages/home/Home'
import AccountList from '@/pages/account/List'
import AccountEdit from '@/pages/account/Edit'
import AccountAdd from '@/pages/account/Add'
import AccountCenter from '@/pages/account/Center'
import Order from "@/pages/order/Order";
const router = createBrowserRouter([
    {
        path: "/",
        Component:App,
        children:[
            {
                index:true,
                Component:Login
            },
            {
                path:"home",
                Component:Layout,
                children:[
                        {
                            index:true,
                            Component:Home
                        },
                       
                ]
            },
            {
                path:'account',
                Component:Layout,
                children:[
                    {
                        path:'list',
                        Component:AccountList
                        
                    },
                    {
                        path:'add',
                        Component:AccountAdd
                        
                    },
                    {
                        path:'center',
                        Component:AccountCenter
                        
                    },
                    {
                        path:'edit',
                        Component:AccountEdit
                        
                    }
                ]
            },
            {
                path:'order',
                Component:Layout,
                children:[
                    {
                        index:true,
                        Component:Order
                    }
                ]
            }
        ]
    },
   



])


export default router
```

3.修改main.jsx 的配置 

> 全局注入 路由配置

```jsx

import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router'
import router from '@/router'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)

```

4.根页面和 一级页面需要进行占位 

- app.jsx

```jsx
import React from 'react'
import { Outlet } from 'react-router'
export default function App() {
  return (
    <>
      <Outlet />
    </>
  )
}

```

- layout.jsx

```jsx
import React from 'react'
import { Outlet } from 'react-router'
export default function Layout() {
  return (
    <>
      <div>顶部</div>
      <div>左侧菜单</div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  )
}

```





## 4.antd 使用

- 下载安装

```jsx
pnpm install antd
```

- 使用

```jsx
import React from 'react'
import { Button , Form, Input } from 'antd';
import './index.less'
export default function Login() {

  const onFinish = values => {
    console.log('Success:', values);
  };


  return (
    <>
      <div className="login">
        <div className="form-box">

          <Form
            onFinish={onFinish}
          >

            <Form.Item
              label="账号"
              name="account"
              rules={[{ required: true, message: '请输入您的账号' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
          </Form.Item>



          </Form>


        </div>
      </div>
    </>
  )
}
```
