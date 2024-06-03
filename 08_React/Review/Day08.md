# 一、Redux核心原理

## 1.1 中间件的实现原理

+ log

+ thunk

## 1.2 applyMiddleware原理

## 1.3 React状态挂历选择

+ this.state/useState

+ Context

+ Redux

# 二、React Router6.x

## 2.1 Router的基本使用

+ 安装：npm install react-router-dom

+ 配置：BrowserRouter/HashRouter、Router => App => Routes => Route

+ 映射关系：Route => path => element/component

+ Link：to属性

## 2.2 NavLink的使用

+ 选择器.active

+ style：({ isActive }) => {}

+ className：({ isActive }) => {}

## 2.3 Navigate组件和NotFount页面的配置

## 2.4 代码进行跳转

+ useNavigate：只能在函数组件

+ 类组件：封装gaojie1组件

## 2.5 路由的嵌套

+ Route => 子Route

+ Outlet占位

## 2.6 路由传递参数

+ 动态路由：/user/:id

  + useParams

+ queryString：/user?name=Bread&age=24

  + useSearchParams

## 2.7 路由的配置方式

+ routes = [{}, {}]

+ useRoutes(routes)
  
## 2.8 路由的懒加载

+ React.lazy(() => import(path))

+ Suspense组件

  + fallback

# 三、React Hooks

## 3.1 Hooks介绍

+ 函数式组件缺点

  + 无自身state

  + 重新渲染（执行），临时变量会被重置

+ 类组件的缺点

  + 复杂

  + 难度

  + 复用

+ hooks

## 3.2 计数器案例

+ 类组件实现

+ 函数组件实现 + Hooks

## 3.3 useState细节

+ 参数：初始值，不传为undefined

+ 返回值：数组，通常以解构方式使用

  + state

  + 修改state的函数

+ 只能在函数组件顶层使用

+ 也可在自定义Hooks中使用

+ 不可在类组件中使用