# 新建一个 vue 项目

## 安装 node

## 检测 node 版本

node -v

## 安装淘宝镜像

npm install -g cnpm --registry=https://registry.npm.taobao.org

## 安装 vue-cli

cnpm install vue-cli -g //全局安装 vue-cli

## 检测 vue-cli 是否成功

vue list

## 控制台调整到项目路径下，新建 vue 项目

vue init webpack "项目名称"
cnpm install
cnpm run dev

## 参考链家：https://www.cnblogs.com/hellman/p/10985377.html

# 将本地项目上传到 Github

## 安装 git

## 右击打开 Git bash 命令行窗口通过命令来创建

## 跳转到项目路径下，把这个文件夹变成 Git 可管理的仓库，成功则里面多了个.git 文件夹

git init

## "."代表这个 test 这个文件夹下的目录全部都提交。你也可以通过 git add 文件名 提交指定的文件)把文件添加到缓存区

git add .

## 查看下现在的状态

git status

## 把文件提交的本地仓库

git commit -m "这里面写你的注释"

## 先创建 SSH KEY，没有就，然后在用户下的.ssh 目录里找到 id_rsa 和 id_rsa.pub 这两个文件 ， 把刚才 id_rsa.pub 里面的内容复制到 Github-Settings-SSH and GPG KEYS 的 Title 下面的 Key 内容框里面

ssh-keygen -t rsa -C "youremail@example.com"

## 在 Github 上创建一个 Git 仓库，直接点 New repository 来创建

## 远程仓库与本地仓库关联

git remote add origin git@github.com:smfx1314/test2.git

如存在：
git remote rm origin
git remote add origin git@github.com:smfx1314/test2.git
git push origin master

## 把本地库的所有内容推送到远程仓库

git push -u origin master // 由于新建的远程仓库是空的，所以要加上-u 这个参数。

## 若 git 上的仓库不是空的，则需要先合并然后上传

git pull --rebase origin master
git push origin master

## 参考路径:https://blog.csdn.net/generallizhong/article/details/94014779
