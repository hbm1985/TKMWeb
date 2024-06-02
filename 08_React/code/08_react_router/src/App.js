
/*
  路由的映射配置

  Routes：包裹所有的Route，在其中匹配一个路由
    Router.x使用的是Switch组件

  Route：Route用于路径的匹配
    path属性：用于设置匹配到的路径
    element属性：设置匹配到路径后，渲染的组件
      Router5.x使用的是component属性
    exact属性：精准匹配，是有精准匹配到完全一致的路径，才会渲染到对应的组件
      Router6.x不再支持该属性
 */

/*
  路由匹配和跳转

  Link和NavLink：
    通常路径的跳转是使用Link组件，最终会被渲染成a组件
    NavLink是在Link基础之上增加了一些样式属性
    to属性：Link中最终套的属性，用于设置跳转到的路径
 */

/*
  NavLink的使用

  需求：路径选中时，对应的a元素变为红色

  这个时候，我们要使用NavLink组件来替代Link组件
    style：传入函数，函数接收一个对象，包含isActive的属性
    className：传入函数，函数接收一个对象，包含isActive的属性

  默认的activeClassName：
    事实上在默认匹配成功时，NavLink就会添加上一个动态的class：active
    所以我们也可以直接编写样式

  当然，如果你担心这个class在其他地方被使用了，出现样式的层叠，也可以自定义class
 */

/*
  Navigate导航

  Navigate用于路由的重定向，当这个组件出现时，就会执行跳转到对应的to路径中
 */

/*
  NotFound页面配置

  如果用户随意输入一个地址，该地址无法匹配，那么在路由的位置将什么内容都不显示

  很多时候，我们希望在这种情况下，让用户看到一个Not Found的页面

  这个过程很简单：
    开发一个Not Found页面
    配置对应的Route，并且设置path为*，将这个Route放在末尾即可
 */

import React, { PureComponent } from "react"
import { Routes, Route, NavLink, Link, Navigate } from "react-router-dom"
import "./style.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Header</h2>
          <div className="nav">
            {/* 区别于NavLink，Link不能添加样式（普通的样式和选中的样式） */}
            <div>
              <Link to="/home">首页</Link>
              <Link to="/about">关于</Link>
              <Link to="/login">登录</Link>
            </div>
            {/* 默认情况下，通过.active选择器，控制NavLink的选中状态 */}
            <div>
              {/* <NavLink to="/home">首页</NavLink> */}
              {/* <NavLink to="/about">关于</NavLink> */}
            </div>
            {/* 通过style函数，控制NavLink的选中状态 */}
            <div>
              {/* <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "cyan" : "black", fontWeight: isActive ? 700 : 400 })}>首页</NavLink> */}
              {/* <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "cyan" : "black", fontWeight: isActive ? 700 : 400 })}>关于</NavLink> */}
            </div>
            {/* 通过className函数，控制NavLink的选中状态 */}
            <div>
              {/* <NavLink to="/home" className={({ isActive }) => isActive ? "link-active" : ""}>首页</NavLink> */}
              {/* <NavLink to="/about" className={({ isActive }) => isActive ? "link-active" : ""}>关于</NavLink> */}
            </div>
          </div>
          <hr />
        </div>
        <Routes>
          {/* router5.x的映射关系：path => component */}
          {/* router6.x的映射关系：path => element */}

          {/* 使用Navigate，重定向首页 */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* 兜底的路由 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="footer">
          <hr />
          <h2>Footer</h2>
        </div>
      </div>
    )
  }
}
