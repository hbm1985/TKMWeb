/*
  认识前端路由

  路由其实是网络工程中的一个术语：
    在架构一个网络时，非常重要的两个设备就是路由器和交换机
    当然，目前在我们生活中路由器也是越来越被大家所熟知，因为我们生活中都会用到路由器
    事实上，路由器主要维护的是一个映射表
    映射表会决定数据的流向

  路由的概念在软件工程中出现，最早是在后端路由中实现的，原因是web的发展主要经历了这样一些阶段：
    后端路由阶段
    前后端分离阶段
    单页面富应用（SPA）
 */

/*
  后端路由阶段

  早期的网站开发整个HTML页面都是由服务器来渲染的
    服务器直接生产渲染好对应的HTML页面，返回给客户端进行展示

  但是，一个网站，这么多网页，服务器如何处理呢？
    一个网页有自己对应的网址，也就是URL
    URL会发送到服务器，服务器会通过正则对该URL进行匹配，并且最后交给一个Controller进行处理
    Controller进行各种处理，最终生成HTML或者数据，返回给前端

  上面的这种操作，就是后端路由
    当我们页面中需要请求不同的额路径内容时，交给服务器来进行处理，服务器渲染好整个页面，并且将页面返回给客户端
    这种情况下渲染好的页面，不需要单独加载任何的JS和CSS，可以直接交给浏览器进行展示，这样也有利于SEO的优化

  后端路由的缺点：
    一种情况是整个页面的模块由后端人员来编写和维护
    另一种情况是全段人员如果要开发页面，需要通过PHP和Java等语言来编写页面代码
    而且通常情况下HTML代码和数据以及对应的逻辑会混在一起，编写和维护都是非常糟糕的事情
 */

/*
  前后端分离阶段

  前端渲染的理解：
    每次请求涉及到的静态资源都会从静态资源服务器获取，这些资源包括HTML、CSS、JS，然后在前端对这些请求回来的资源进行渲染
    需要注意的是，可以的的每一次请求，都会从静态资源服务器请求文件
    同事可以看到，和之前的后端路由不同，这时后端只是负责提供API了

  前后端分离阶段：
    随着Ajax的出现，有了前后端分离的开发模式
    后端只提供API来返回数据，前端通过Ajax获取数据，并且可以通过JavaScript将数据渲染到页面上
    这样做最大的优点就是前后端责任的清晰，后端专注于数据上，前端专注于交互和可视化上
    并且当移动端（iOS/Android）出现后，后端不需要进行任何处理，依然使用之前的一套API即可
    目前比较少的网站采用这种模式开发

  单页面富应用阶段：
    其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由
    也就是前端来维护一套路由规则

  前端路由的核心是设么呢？
    改变URL，但是页面不进行整体俄刷新
 */

/*
  URL的hash

  前端路由是如何做到URL和内容进行映射的呢？监听URL的改变

  URL的hash
    URL的hash也就是锚点（#），本质上是改变window.location的href属性
    我们可以通过直接复制location.hash来改变href，但是页面不发生刷新

  hash的优势就是兼容性更好，在老版IE中都可以运行，但是缺陷是有一个#，显得不像是一个真实的路径
 */

/*
  HTML5的History

  history接口是HTML5新增的，它有六种模式改变URL而不刷新页面
    replaceState：替换原来的路径
    pushState：使用新的路径
    popState：路径的返回
    go：向前或向后改变路径
    forward：向前改变路径
    back：向后改变路径
 */

/*
  认识react-router

  目前前端流行的三大框架，都有自己的路由实现：
    Angular的ngRouter
    React的react-router
    Vue的vue-router

  react-router在最近两年版本更新的较快，并且在最新的React Router6.x版本中发生了较大的变化
    目前React Router6.x已经非常文档，我们可以放心使用

  安装react-router：
    安装时，我们选择react-router-dom
    react-router会包含一些react-native的内容，web开发并不需要
    npm install react-router-dom
 */

/*
  Router的基本使用

  react-router最主要的API是给我们提供的一些组件：

  BrowserRouter和HashRouter
    Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件
    BrowserRouter使用history模式
    HashRouter使用hash模式
 */

import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
