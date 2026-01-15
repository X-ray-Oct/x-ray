## node管理

```js
nvm list 	#查看当前nvm

nvm install node版本号	#安装

nvm uninstall node版本号	#卸载

nvm use node版本号	#使用
```



## node模块化

nodejs模块化规范：commonJS模块化规范

JS模块化规范：ESmodule规范



- 实现暴露和导入

```js
let data = 1000;

module.exports = 暴露的对象
```



## 扩展Es6模块化语法ESMoudle

- 单个暴露 a.js

```js
export let a = 100;
export let b = 200;
```

- 单个导入 b.js

```js
import{a,b} from './b.js'
```

- 批量暴露 a.js

```js
let a = 100;
let b = 200;

export default {a,b}
```

- 批量导入 b.js

```js
//xxx用变量接
import xxx from './a.js'
//再结构
let {a,b} = xxx
```

> 注意：页面html引入js时 告诉浏览器这个文件使用了最新的模块化语法

```html
<script src='./b.js' type="module" />
```



- 将多个单个暴露放一起

> 不知道js库中暴露了什么的时候使用

```js
import * as xxx from './a.js'
```



## npm使用

> node只要安装自带一个三方包管理工具  三方包增删改改更新

- 项目根目录下使用的三方包管理工具npm 自动创建的说明文件`package.json`

#### 常见命令

```js
npm install 三方包名
npm uninstall 三方包名
npm install 三方包名@版本号
npm install 三方包名 -D		//--dev-save。开发环境的包
npm install 三方包名 -g		//-golbal。全局的包
```

> 开发环境：项目中有些三方包只会在开发过程中使用，上线后不需要该三方包
>
> 生产环境：
>
> 测试环境：

> 编译：
>
> index.less  ind直接编写的代码，不能够直接通过浏览器进行解析和运行
>
> index.scss  index.stylus【css的预处理语言 预处理器】
>
> 为了编译vue react anglur【只要使用了node环境的项目地需要编译】
>
> 编译后在本地运行的代码：开发环境
>
> 前端项目打包|构建：编译后在服务器运行的代码：生产环境（只可能出现浏览器认识的文件）
>
> 开发环境中的特殊情况（单元测试）  单元--集成（软件测试）--灰度测试

#### 安装三方包

> package-lock.json  版本锁定器
>
> npm install  #安装package.json中的包