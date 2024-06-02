/*
  Router的基本使用

  react-router最主要的API是给我们提供的一些组件：

  BrowserRouter和HashRouter
    Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件
    BrowserRouter使用history模式
    HashRouter使用hash模式
 */

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

/*
  路由的嵌套

  在开发中，路由之间是存在嵌套关系的

  这里我们假设Home页面中有两个页面内容
    推荐列表和排行榜列表
    点击不同的链接可以跳转到不同的地方，显示不同的内容

  <Outlet />组件用于在父路由组件中作为子路由的占位组件
 */

/*
  手动路由的跳转

  目前我们实现的跳转主要是通过Link或者NavLink进行跳转的，实际上我们也可以通过JavaScript代码进行跳转
    我们知道Navigate组件时可以进行路由的跳转的，但是依然是组件的方式
    日过我们希望通过JavaScript代码逻辑进行跳转（比如点击了一个button），那么久需要获取到navigate对象

  在Router6.x版本之后，代码类的API都迁移到了hooks的写法：
    如果我们希望进行代码跳转，需要通过useNavigate的Hook获取到navigate对象进行操作
    那么如果是一个函数组件，我们可以直接调用，但是如果是一个类组件呢？

  类组件需要自行封装高阶组件
 */

/*
  路由参数传递

  传递参数有两种方式：
    动态路由的方式
    search传递参数

  动态路由的改变指的是路由中的路径并不会固定
    比如/detail的path对应一个Detail组件
    如果我们将path在Route匹配时写成/detail/:id，那么/detail/abc、/detail/123都可以匹配到该Route，并且进行显示
    这个匹配规则，我们就称为动态路由
    通常情况下，使用动态路由可以为路由传递参数

  search传递参数：
    /user?name=Bread&age=24
    
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)
 */

import React, { PureComponent } from "react"
import { Routes, Route, NavLink, Link, Navigate, useNavigate } from "react-router-dom"
import "./style.css"
import WithRouter from "./hoc/WithRouter"
import Home from "./pages/Home"
import Recommend from "./pages/Home/Recommend"
import Ranking from "./pages/Home/Ranking"
import Songs from "./pages/Home/Songs"
import About from "./pages/About"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Category from "./pages/Category"
import Order from "./pages/Order"
import Detail from "./pages/Home/Songs/Detail"
import User from "./pages/User"

class App extends PureComponent {

  navigateTo(path) {
    //  useNavigate只能用于函数组件，不能用于类组件
    //  React hooks，是专门为了函数组件而诞生的
    //  React Hook "useNavigate" cannot be called in a class component.
    // const navigate = useNavigate()
    // navigate(path)

    const { navigate } = this.props.router
    navigate(path)
  }

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
              <button onClick={() => this.navigateTo("/category")}>分类</button>
              <span onClick={() => this.navigateTo("/order")}>订单</span>
              <Link to="/user?name=Bread&age=24">用户</Link>
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
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<Recommend />} />
            <Route path="/home/ranking" element={<Ranking />} />
            <Route path="/home/songs" element={<Songs />}>
              <Route path="/home/songs/detail/:id" element={<Detail />} />
            </Route>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/user" element={<User />} />
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

//  通过高阶组件，将navigate传给类组件使用
//  高阶组件内部封装了函数组件，那么可以在该函数组件内部使用useNavigate
export default WithRouter(App)