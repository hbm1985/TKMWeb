/*
  路由的配置文件

  目前我们所有的路由定义都是直接使用Route组件，并且添加属性来完成的

  但是这样的方式会让路由变得非常混乱，我们希望所有的路由配置放到同一个地方进行集中管理：
    在早期的时候，Router并没有提供相关的API，我们需要借助react-router-config完成
    在Router6.x中，为我们提供了useRoutes API可以完成相关的配置

  如果我们对某些组件进行了异步加载（懒加载），那么需要使用Suspense进行包裹
 */

import React from "react"
import { Link, useNavigate, useRoutes } from "react-router-dom"
import "./style.css"
import routes from "./router"
import WithRouter from "./hoc/WithRouter"

function App() {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div className="app">
      <div className="header">
        <h2>Header</h2>
        <div className="nav">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/login">登录</Link>
          <button onClick={() => navigateTo("/category")}>分类</button>
          <span onClick={() => navigateTo("/order")}>订单</span>
          <Link to="/user?name=Bread&age=24">用户</Link>
        </div>
        <hr />
      </div>
      {/* 注意：useRoutes也是React hooks，也需要在函数组件中才可以使用 */}
      {useRoutes(routes)}
      <div className="footer">
        <hr />
        <h2>Footer</h2>
      </div>
    </div>
  )
}

export default WithRouter(App)