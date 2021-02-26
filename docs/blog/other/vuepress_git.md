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

git checkout gh-pages(切换到上线分支)
git add -A
git commit -m 'deploy'
git push( git push -f origin gh-pages)

git log（查看日志）
git branch -a（查看所有分支）
git branch -f（查看远程分支）
```
### [链接](https://www.cnblogs.com/LHLVS/p/11376732.html)
<!-- ### ![链接](../../assets/img/bing.png) 本地图片上传 -->