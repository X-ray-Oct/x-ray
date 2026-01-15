## react 模块化样式与状态管理

- 状态管理  redux  redux-toolkit
- 模块化样式

## 1.状态管理库 redux redux-toolkit

安装 

```jsx
pnpm install @reduxjs/toolkit react-redux
```



> 乱传，整个项目 进行数据的共享   

- 创建状态的模块文件  store/userSlice.jsx

```jsx
// 只是 用户模块的共享数据的Slice 

import { createSlice } from '@reduxjs/toolkit'

// 整个模块暴露给store仓库 进行配置使用
export const userSlice = createSlice({
        name:'user',
        // 数据
        initialState:{
            num:1000,
            userInfo:{
                id:1000,
                name:'John',
                email:'john@gmail.com',
                tell:'16231565844',
                nickName:'葬爱家族',
                address:'中国北京'
            }
        },
        // 方法
        reducers:{
            changeUserInfo(state,{payload}){
                state.userInfo = {...payload}
            },
            // 页面传递给修改方法的数据  放在了 {type:'xxx',payload:页面传递实参} 中的payload中
            changeUserInfoTell(state,{payload}){
                state.userInfo.tell = payload
            }
        }
})

// 将所有的修改方法 暴露给页面 进行使用
export const {changeUserInfo,changeUserInfoTell} = userSlice.actions

```

2.创建 整个仓库的配置文件  store/index.jsx  

```jsx
// 整个store仓库的配置文件 
import {  configureStore } from '@reduxjs/toolkit'
import {userSlice} from './userSclie'

const store = configureStore({
    reducer:{
        // 模块化
        // user: userReducer
        userSlice:userSlice.reducer
    }
})

// 将store仓库整体配置暴露给main.jsx  全局注入使用（整个项目生效）
export default store;
```

3.全局注入 store配置  main.jsx

```jsx

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 全局注入store  redux toolkit
import {Provider} from 'react-redux'
import  store from './store'
createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <App /> 
 </Provider>
   
)

```

4.页面使用 获取数据useSelector   修改数据 useDispatch

```jsx

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 全局注入store  redux toolkit
import {Provider} from 'react-redux'
import  store from './store'
createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <App /> 
 </Provider>
   
)

```

## 2.模块化CSS   有作用域的CSS    

> 在react 中所有的 样式文件  写的样式 默认都是 全局样式

- 修改less 文件后缀 

```jsx
index.modules.less 
```

```less
.login{
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    display: flex;
    justify-content: center;
    align-items: center;

}
.form-box{
    width: 400px;
}
```



- 页面使用

```jsx
import style from './index.module.less'
```

```jsx
  <div className={style.login}>
        <div className={style['form-box']}>
```
