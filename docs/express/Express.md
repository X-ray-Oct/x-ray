# express搭建后端服务

- 全局安装

```cmd
npm install express-generator -g
```

- 创建新项目

```cmd
express 项目名
```

- 进入根目录安装三方包

```cmd
pnpm i
```

- 运行项目

```cmd
pnpm run start
```

- 测试项目访问

```cmd
http://localhost:3000
```



#### express修改服务器端口 app.js

```js
//修改端口号		8000-9999
app.listen(8099, ()=>{
  console.log("服务器启动成功,端口号：8099");
})

module.exports = app;
```



#### 关于路由---接口

- routes/goods.js

```js
var express = require('express');
var router = express.Router();

/* GET goods list. */
router.get('/list', function (req, res, next) {
    let list = [
        {
            id: 1,
            name: '商品1',
            price: 100
        },
        {
            id: 2,
            name: '商品2',
            price: 200
        }
    ];

    res.json(list);
});

module.exports = router;
```

- app.js

```js
var usersRouter = require('./routes/goods');
app.use('/goods', usersRouter);
```

- 通过apifox测试工具调试