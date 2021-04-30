---
title: react创建
date: 2021-04-22
type: 3
blog: true
excerpt: 原型，作为前端开发者，或多或少都有听说。你可能一直想了解它，但是由于各种原因还没有了解，现在就跟随我来一起探索它吧。本文将由浅入深，一点一点揭开 JavaScript 原型的神秘面纱。（需要了解基本的 JavaScript 对象知识）
tags:
    - JavaScript
---
##hls
```
1. npm install -g create-react-app      全局安装

2. create-react-app reactproject       新建并对react项目进行命名（注:项目名称不能有大写）

3. cd reactproject                             通过命令进入文件夹内部，准备运行项目

4. npm start                                     运行项目
5. npm install react-router-dom --save-dev     安装路由

6. npm run eject  ///暴露出webpack.config.js
(如果安装出错的话，按照下面的步骤进行)
    *. 1.create-react-app app
    *. cd app
    *. git init
    *. git add .
    *. git commit -m "xxx" 
    *. npm run ejec
(报这个错的话this.getOptions is not a function，是因为less版本过高，1.npm uninstall less-loader 2.npm install less-loader@5.0.0      )
7. npm install less less-loader --save    ///////安装less
[链接](https://www.jianshu.com/p/6bd94257e833)

```
