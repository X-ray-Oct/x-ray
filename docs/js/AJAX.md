# AJAX应用

## 1.通过ajax发送get请求  XMLHttpRequest()

```js
//1.创建ajax对象
let xhr = new XMLHttpRequest();

//2.设置请求的方式 及 请求地址
xhr.open('get','请求的接口地址?请求参数');

//3.发送请求
xhr.send()

//4.监听后端返回的数据
xhr.onreadystatechange = function(){
    //判断步骤是否到了最后一步(1-5) 且 网络是畅通的（网络的状态码）
    //第4步：后端已经把数据返回前端  一般情况200-299表示成功
    if(xhr.readyState == 4 && xhr.status == 200){
        //获取后端的返回数据
        console.log(xhr.responseText)
    }
}
```

### 1.1请求方式

> 前后端共同约定 这个接口通过什么请求模式 进行数据的交换
>
> 常见：

> - get 前端获取后端的数据
> - post 前端主动传输数据给后端
> - put 上传 前端主动传输数据给后端
> - patch 前端获取后端的数据（传输数据格式和get不一样）
> - delete 删除

### 1.2请求地址

> 后端提供的接口地址
>
> 接口说明文档

> 21：ftp 文件传输协议
>
> 80：http
>
> 443：https
>
> 3306：MySQL
>
> 22：ssh链接
>
> 53：DNS服务器
>
> 25：SMTP

```js
协议://服务器地址:端口号/接口地址
```

### 1.3网络状态码

- 404 找不到 一般情况 请求地址和请求方式出错
- 500 服务器异常（跟前端无关）
- 501 权限验证出错
- 200 成功
- 304 重定向（服务器提供了其他第三方的地址 跳转其他地方）

## 2.post请求

```js
//1.实例化ajax
let xhr = new XMLHttpRequest();
//2.设置请求方式 和 请求地址【不能写请求参数】
xhr.open('post','请求的接口地址')
//3.设置请求头【设置前后端通信的数据格式】
xhr.setRequestHeader('content-type','application/json');
xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
//4.发送（请求数据 要求：必须和请求要求的一致）
xhr.send("{'name'='张麻子'}")
xhr.send("name=张麻子&&age==18")
//5.监听返回数据
xhr.onreadystatechange = function(){
    //判断步骤是否到了最后一步(1-5) 且 网络是畅通的（网络的状态码）
    //第6步：后端已经把数据返回前端  一般情况200-299表示成功
    if(xhr.readyState == 4 && xhr.status == 200){
        //获取后端的返回数据
        console.log(xhr.responseText)
    }
}
```

## 3.上传文件

```js
//1.实例化ajax
//2.设置请求方式+地址
//3.发送数据 二进制文件必须装到formData 对象中【通过js虚拟创建了form表单】
//4.发送数据
//5.监听返回
```

```html
<!-- 文件上传的input type ===file  -->
    <input type="file" class="upload">
    <button>上传</button>
    <img src="" alt="">
    <script>


        //获取file对象
        let uploadInp = document.querySelector('.upload');
        let btn = document.querySelector('button');

        let img = document.querySelector('img')
        btn.addEventListener('click', function () {
            //文件对象 【和input取值是不同的 。value】
            // file对象获取
            let file = uploadInp.files[0];

            //3.组装数据 二进制文件必须装到 formData 对象中【通过js虚拟创建了 form表单】
            //3.1 创建formData 模拟表单
            let fd = new FormData();
            //3.2 给formData追加数据  字段后端决定 值 就是file对象
            fd.append('file', file)

            //1.实例化ajax
            let xhr = new XMLHttpRequest();

            //2.设置请求方式+地址
            xhr.open('post', 'http://8.137.157.16:8099/test/upload')

            //4.发送数据
            xhr.send(fd)

            //5.监听返回
            xhr.onreadystatechange = function () {
                //判断 步骤 4  网络畅通
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);//json对象 json字符串
                    let res = JSON.parse(xhr.responseText)
                    console.log(res);
                    //图片回显
                    img.src = 'http://8.137.157.16:8099' + res.imgUrl
                }
            }

        })
    </script>
</body>

```

## 4.前后端联调工具

> 可以在软件中测试后端接口

## 5.报错排错

> 请求地址【和后端文档一致 代理服务器】
>
> 请求方式和请求参数
>
> 请求状态码
>
> 后端返回值