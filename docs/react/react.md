# react语法基础

react组成部分：

- react核心语法`react`
- react操作dom节点的库`react-dom`
  - react跨端原生开发(安卓ios小程序): `react native`  RN

vite初始化项目

```cmd
npm create vite 项目名 -- --template react
```

 

## 单文件组件

> 文件后缀   .js   .jsx  .tsx    
>
> 一个函数  return 一段html 代码（被渲染到页面上   根据挂载的根节点确定渲染位置



## 响应式数据 useState

```js
 const [变量,修改变量函数] = useState(初始值);
//修改变量函数： 调用函数时，
//1.首先修改变量的值
//2.通过diff算法（递归）  比对 所有的dom节点（只是比对虚拟dom），找出使用了这个变量的dom节点
//3.根据render函数，重新渲染涉及到的 真实 dom节点
```



## react合成事件

```jsx
<div  on事件类型={事件的执行函数}>
```

```jsx
const ()=>{
    const changeNum = ()=>{}
    return (<div  onclick={changeNum}>)
}
```

```jsx
const ()=>{
    return (<div  onclick={()=>{}}>)
}
```

```jsx
const ()=>{
        const changeNum = (num)=>{}
    return (<div  onclick={()=>changeNum(1000)}>)
}
```

```jsx
const ()=>{
        const changeNum = (event,num)=>{}
    return (<div  onclick={(event)=>changeNum(event,1000)}>)
}
```



## useEffect副作用函数 hooks

> useEffect  代替生命周期    （挂载完成，卸载之前）
>
> ​    <16.8版本  完整的生命周期（类组件为主 没有函数式组件）
>
> useEffect  代替数据的监听（vue:watch  computed）

```jsx
import {useEffect} from 'react'
export default  ()=>{
    //副作用：watch computed  监听的变量
    useEffect(()=>{},[副作用])
}
```

生命周期 ：    

- 初始化周期   init  
- 挂载周期   mounting
  - componentWillMount   组件挂载之前
  - componentDidMount  组件挂载之后  ----mounted
- 更新周期   updation
- 卸载周期    unMounting
  - componentWillUnmount   卸载之前  销毁之前



## useEffect代替生命周期

> 不监听任何数据的改变 就代表的是  挂载完成周期

```jsx
import {useEffect} from 'react'
export default  ()=>{
   useEffect(()=>{
       //函数体：挂载完成执行的代码   componentDidMount
       return ()=>{
           //销毁周期的代码
       }
   },[])
}
```



## useEffect 监听某个数据的改变

```jsx
//变量1  变量2 任意1个变量的值发生改变 函数题就会自动执行一次
import {useEffect} from 'react'
export default  ()=>{
    
   useEffect(()=>{
       //函数体：挂载完成执行的代码   componentDidMount
       return ()=>{
           //销毁周期的代码
       }
   },[监听的变量1,监听的变量2...])
}
```

```jsx
//变量1  变量2 任意1个变量的值发生改变 函数题就会自动执行一次
import {useEffect,useState} from 'react'
export default  ()=>{
    const [a,setA] = useState(0)
   useEffect(()=>{
       //函数体：挂载完成执行的代码   componentDidMount
     	setA(a+1)
   },[a])
     useEffect(()=>{
       //函数体：挂载完成执行的代码   componentDidMount
     
   },[监听的变量2])
}
```



## useRef 获取dom || 获取子组件的实例对象

```jsx
import {useRef,useEffect} from 'react'

export default ()=>{
    const boxRef = useRef(null); 
    
    useEffect(()=>{
        console.log(boxRef.current)   // <div ref={boxRef}> xxx </div>
    },[])
    
    return <div ref={boxRef}> xxx </div>
}
```



## 判断    三目运算

> 三目运算  使用场景：  显示隐藏 dom节点        动态样式 display:none   动态类名

```jsx
import React from 'react'

export default function App2() {
    const [gedner,setGender] = useState(0)
  return (
    <div>
          {gender%2==0?<span>男</span>:<span>女</span>}	
     </div>
  )
}
```

```jsx
import React,{useState} from 'react'

// 子组件
const getGender = (gender) => {
    return gender%2==0?<span>男</span>:<span>女</span>
}

// 导出一个默认的函数组件App2
export default function App2() {
    // 使用useState钩子，初始化gender为0，并设置setGender函数用于更新gender的值
    const [gedner,setGender] = useState(0)
  return (
    <div>
          {getGender(gedner)}		
          <button onClick={()=>setGender(gedner+1)}>++++</button> 
     </div>
  )
}
```

- 动态样式操作

```jsx
import React ,{useState} from 'react'

export default function App5() {
    const [gender,setGender] = useState(0)
  return (
    <div>
        {/* 动态样式 */}
        <h1 style={{display:gender%2==0?'block':'none',background:'red'  } }>男</h1>
        <h1 style={{display:gender%2==1?'block':'none',background:'red'  } }>女</h1>

            <button onClick={()=>setGender(gender+1)}>+++</button>
    </div>
  )
}
```



## 循环 map

> 循环数组 ||对象 
>
> 最终目的： 必须要有 return 出来的 html代码到 页面上  

```jsx
import React,{useState } from 'react'

export default function App8() {
    
const [userList,setUserList] = useState([
    {name:'张麻子',age:40},
     {name:'黄四郎',age:35},
     {name:'马邦德',age:42},
])

const add = ()=>{
 const obj = {name:'胡桂源',age:20}
//  const list = [...userList]
//  list.push(obj)
// // setUserList(userList)  //地址没有发生改变 ，所以不会重新渲染
// // 需要临时的空的数组 有新的地址  装所有的新数据，再调用修改变量的值 set方法 才可以有响应式数据的特征
//  setUserList(list)

userList.push(obj)
setUserList([...userList])  //地址没有发生改变 ，所以不会重新渲染
// 需要临时的空的数组 有新的地址  装所有的新数据，再调用修改变量的值 set方法 才可以有响应式数据的特征

}

  return (
    <>
    <button onClick={add}>添加数据</button>
        {
            userList.map((item,index)=>{
                return <p key={index}>姓名：{item.name};年龄:{item.age}</p>
            })
        }

    </>
  )
}
```



## 受控组件 与 非受控组件|表单 获取数据

> 非受控组件  ：   通过 useRef 获取到dom ,再通过dom节点获取表单数据   antd 
>
> 受控组件：  通过useState 做数据的绑定  加上 onChange 事件 useState=e.target.value 

```jsx
import React,{useRef} from 'react'

export default function App9() {
    // 非受控组件  useRef
    const accountRef = useRef(null);
    const passwordRef = useRef(null);

    const saveBtn = () => {
        console.log(accountRef.current.value);
        console.log(passwordRef.current.value);
    }
    
  return (
    <>
        账号: <input type="text" ref={accountRef} />
        密码: <input type="password" ref={passwordRef}/>
        <button onClick={saveBtn}>提交</button>
    </>
  )
}
```

```jsx
import React,{useState} from 'react'

export default function App9() {
    const [formData,setFormData] = useState({account:'',password:''})

    const saveBtn = () => {
       console.log(formData);
       
    }
    const change = (data)=>{
        setFormData(data)
    }

  return (
    <>
        账号: <input type="text"  onChange={(e)=>change({account:e.target.value, password:formData.password})}/>
        密码: <input type="password" onChange={(e)=>change({account:formData.account, password:e.target.value})} />
        <button onClick={saveBtn}>提交</button>
    </>
  )
}
```

