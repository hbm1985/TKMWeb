/*
  前端工程的复杂化

  如果我们只是开发几个小的demo程序，那么永远不需要考虑一些复杂的问题：
    比如目录结构式如何组织划分的
    比如如何管理文件之间的相互依赖
    比如项目发布前如何压缩、打包项目
    等等...

  现代的前端项目已经越来越复杂了
    不会再是在HTML中引入几个css文件，引入几个编写的js文件或者第三方的js文件这么简单
    比如css可能是使用less、sass等预处理器进行编写，我们需要将它们转换成普通的css才能被浏览器解析
    比如JavaScript代码不再只是编写在几个文件中，而是通过模块化的方式，被组成在成百上千个文件中，我们需要通过模块化技术老管理它们之间的相互依赖
    比如项目需要依赖很多的第三方库，如何更好的管理它们（比如管理它们的依赖、版本升级等）
 */

/*
  脚手架是什么呢？

  传统的脚手架指的是建筑学的一种结构：在搭建楼房、建筑物时，临时搭建出来的一个框架

  编程中提到的脚手架（Scaffold），其实是一种工具，帮我们可以快速生成项目的工程化结构
    每个项目作出完成的效果不同，但是它们的基本工程化结构是相似的
    既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生成基本的工程化模板
    不同的项目，在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可
    这样也可以间接保证项目的基本结构一致性，方便后期的维护
 */

/* 
  前端脚手架

  对于现在比较流行的三大框架都有属于自己的脚手架：
    Vue的脚手架：@vue/cli（现阶段流行的是create-vite）
    Angular的脚手架：@angular/cli
    React的脚手架：create-react-app

  它们的作用都是帮助我们生成一个通用的目录结构，并且已经将我们所需的工程环境配置好
    目前这些脚手架都是使用node编写的，并且都是基于webpack的
    所以我们必须在自己的电脑上安装node环境
 */

/*
  目录结构分析

  02_react_scaffold
    node_modules：第三方依赖包
    README.md：readme说明文档
    package.json：对整个应用程序的描述：包括应用名称、版本号、依赖包、以及项目的启动、打包等
    package-lock.json：锁定版本，保证安装的依赖包版本一致
    public：静态资源文件夹，不会参与打包
      favicon.ico：应用程序顶部的icon图标
      index.html：应用程序的index.html入口文件
      logo192.png：在manifest.json中使用
      log512.png：在manifest.json中使用
      manifest.json：和web app配置相关
      robot.txt：指定搜索引擎可以或者无法爬取哪些文件
    src：存放自己编写的代码
      App.css：App组件相关的样式
      App.js：App组件的代码文件
      App.test.js：App组件的测试代码文件
      index.css：全局的样式文件
      index.js：整个应用程序的入口文件
      logo.svg：首页所展示的React图标
      serviceWorker.js：默认帮助我们写好的注册PWA相关的代码
      setupTest.js：测试初始化文件
 */

/*
  了解PWA

  整个目录结构都非常好理解，只有一个PWA相关的概念：
    PWA全称Progressiv Web App，即渐进式WEB应用
    一个PWA应用首先是一个网页，可以通过Web技术编写出一个网页应用
    随后添加上App Manifest和Service Worker来实现PWA的安装和离线等功能
    这种Web存在的形式，我们也称之为Web App

  PWA解决了哪些问题呢？
    可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏
    实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能
    实现了消息推送
    等等一系列类似于Native App相关的功能

  更多PWA相关的知识，可以自行去学习
    https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps
 */

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
))