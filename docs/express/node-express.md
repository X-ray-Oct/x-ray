## node express 开发后端

- mysql   
- node 如何开发后端  
- express 使用 
  - 路由  （接口地址）
  - 请求参数(get 参数  post参数  ) 和 返回参数 
  - 数据库操作  nosql  mongoDB     

## 1.后端环境和软件安装

- phpStudy    自带mysql服务
- navicat    mysql图形化链接工具 

#### 步骤:

1.安装 phpStudy     [注意：通过 超级管理员安装]

2.安装navicat       【注意：第一次使用时 填写注册码，以后使用时直接点击试用】

3.启动phpstudy ----mysql服务  【观察启动之后 按钮从红色 改为蓝色三角形】

4.建立数据库连接

​	 navicat

​      -- 连接---mysql--新建连接

> 连接名：    随便写
>
> 主机：localhost   127.0.0.1
>
> 端口：3306
>
> 用户名： root
>
> 密码：root

5.测试连接是否成功，双击连接  检查是否可以打开数据库 

## 2.后端框架

> express  
>
> koa 
>
> egg.js      企业级 阿里
>
> nest    难度系数高    最新



## 3.express 搭建后端服务

文章链接： `http://gotang.cn/pages/fbb16b/#%E5%89%8D%E7%BD%AE%E7%8E%AF%E5%A2%83`

### 3.1 初始化项目

- 全局安装express 项目脚手架工具 

```js
npm install express-generator -g 
```

- 创建新项目 

```js
express 项目名
```

- 进入项目根目录 运行 安装所有的三方包

```js
pnpm install 
```

- 运行项目

```js
pnpm run start 
```

- 测试项目是否启动  浏览器访问

```js
http://localhost:3000
```



### 4.express 修改服务器端口  app.js

```js

// 修改服务器的端口  8000-9999    
app.listen(8099,()=>{
  //  提示服务已启动
  console.log('服务已启动,端口号：8099');
  
})

module.exports = app;

```

## 5.关于路由-接口

- 1.创建接口模块文件    routes/goods.js

```js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    let list = [
        {
            id: 1,
            name: '商品1',
            price: 100,
        }
    ]
	//将数据返回给前端
    res.send(list)
});

// 接口地址？  http://localhost:8099/users/xxx
module.exports = router;

```

- 2.在app.js  使用这个模块文件 

```js

var app = express();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter = require('./routes/goods');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods', goodsRouter)


```

- 通过apifox 或其他的接口测试工具 进行测试 



- 练习

>  牲畜模块   livestock.js 
>
> 接口：
>
> get  列表      
>
> get  详情      
>
> post 删除单个牲畜 id     
>
> post 新增牲畜   
>
> 
>
> 接口的返回值随便写   
>
> 效果： 能够通过接口测试工具   请求通 这几个接口 拿到返回数据即可 



## 6.node代码 热更新插件  nodemon 

- 全局安装 代码热更新插件

```js
npm install nodemon -g 
```

- 修改package.json 的 项目启动命令  通过热更新方式启动

```js
  "scripts": {
    "start": "nodemon ./bin/www"
  },
```

- 重新启动项目 就实现了热更新

```js
pnpm run start
```



## 6.如何接收前端传递的数据

```js
router.get('/info',(req,res,next)=>{
    //request   前端请求的 请求体 
    //response  后端响应的数据  
    
})
```

- 接收前端传递的get 数据  `?id=100&age=25`

```js
router.get('/info',(req,res,next)=>{
  			let {id,age}= req.query;      
})
```

- 接收前端传递的post数据 

```js
router.post('/info',(req,res,next)=>{
           //x-www-form-urlencoded   json   都通过body 获取
    let {uuid,xxx} = req.body
    res.send('xxxxxxx')
})
```









## 7.如何处理正确处理返回数据

```js


router.post('/info',(req,res,next)=>{
    let {uuid,xxx} = req.body;
    // 校验前端传递给后端的数据 是否传递正确 
    if(!uuid || !xxx){
        res.send({code:0,msg:"请将数据传输完整！！uuid，xxx"})
        return;
    }  

  const list = []
   //返回数据需要满足 返回的规范
  res.send({code:200,msg:"提示信息",data:list})
})





```



## 8.如何操作数据库







## 9.数据库常见操作   增删改查 

```js
//查goods goods_id=10000 的商品 的 goods_name  goods_id   goods_price  
select goods_name,goods_id,goods_price from goods where goods_id=1000

//新增  
```

