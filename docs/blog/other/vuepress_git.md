---
title: vuepress的创建项目和git上线
date: 2020-02-24
type: 3
blog: true
tags:
    - JavaScript
---


## 博客的应用（vuepress,markdown）
```
git checkout master(切换主分支)
npm run build
git add .
git commit -m '添加Blogs'
git push -f origin master

git checkout gh-pages(切换到线上分支)
1. 先删除 除了.git文件夹 ， node_module文件夹 ， docs文件夹， .gitignore之外的文件
2. 再把docs/.vuepress/dist文件夹下的所有文件剪切到根目录
3. 再删除docs文件夹
4. git add -A
5. git commit -m 'deploy'
6. git push( git push -f origin gh-pages)

git log（查看日志）
git branch -a（查看所有分支）
git branch -f（查看远程分支）
```
### [链接](https://www.cnblogs.com/LHLVS/p/11376732.html)
<!-- ### ![链接](../../assets/img/bing.png) 本地图片上传 -->