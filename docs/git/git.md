## git命令

```js
mkdir sell-admin       #创建文件夹 项目的根目录   【X】
cd sell-admin          #移动到项目根目录中[X]

git init              #初始化 本地仓库      
touch README.md       #创建一个项目说明文件 markdown   [vite创建的项目已经有了，就不需要了]
  #提交流程 4步骤
git add README.md             #将本地的redame.md 文件 提交到 本地暂存区
git commit -m "first commit"     #将本地暂存区的 文件  提交到  本地仓库【并生成对应版本号】
git remote add origin https://gitee.com/cometang/sell-admin.git    #建立本地仓库和 远程仓库的链接
git push origin "master"     #将本地仓库的代码 推送到 远程仓库的 master分支
```

```cmd
#查看自己的代码更改项
git status

#拉去远程仓库的最新代码
git pull origin master

#将修改的代码添加到暂存区
git add .

#将修改的暂存区的代码提交到本地仓库
git commit -m "备注信息"

#将本地仓库的代码推送到远程仓库
git push origin master

#克隆远程仓库代码
git clone 仓库地址
```

备注信息：单词：中文备注

> feat：新增模块或文件
>
> fix：修复bug
>
> style：写了样式