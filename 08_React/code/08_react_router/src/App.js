
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

import React, { PureComponent } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Header</h2>
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
          </div>
          <hr />
        </div>
        <Routes>
          {/* router5.x的映射关系：path => component */}
          {/* router6.x的映射关系：path => element */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="footer">
          <hr />
          <h2>Footer</h2>
        </div>
      </div>
    )
  }
}
