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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
