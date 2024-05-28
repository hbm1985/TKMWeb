/*
  react-redux使用

  开始之前需要强调一下，Redux和React没有直接的关系，你完全可以在React、Angular、vanilla JavaScript中使用Redux

  尽管这样说，Redux依然是和React库结合的更好，因为他们是通过state函数来描述界面的状态，Redux可以发射状态的更新，让他们做出回应

  虽然我们之前已经实现了connect、Provider这些帮助我们完成连接Redux、React的辅助工具，但是实际上redux官方帮助我们提供了react-redux的库

  安装react-redux：
    npm install react-redux
    yarn add react-redux
 */

/*
  组件中异步操作

  在之前简单的案例中，redux中保存的count是一个本地定义的数据
    我们可以直接通过同步的操作来dispatch action，state就会被立即更新
    但是真实开发中，redux中保存的很多数据可能来自服务器，我们需要进行异步的请求，再将数据保存到redux中

  事实上，网络请求到的数据也属于我们状态管理的一部分，更好的一种方式应该是将其也交给redux来管理

  但是在redux中如何可以进行异步的操作呢？
    答案就是中间件（Middleware）
    Express或Koa，这类框架中，Middleware可以帮助我们在请求和响应之间嵌入一些操作的代码，比如cookie解析、日志记录、文件压缩等操作
 */

/*
  理解中间件

  redux也引入了中间件（Middleware）的概念
    这个中间件的目的是在dispatch的action和最终达到的reducer之间，扩展了一些自己的代码
    比如调用异步接口、日志记录、添加代码调试功能等

  我们现在要做的事情就是发送异步的网络请求，所以我们可以添加对应的中间件：
    这里官网推荐的、包括演示的网络请求的中间件是使用redux-thunk

  redux-thunk是如何做到让我们可以发送异步的请求呢？
    我们知道，默认情况下的dispatch(acion)，action需要是一个JavaScript的对象
    redux-thunk可以dispatch(action函数)，action可以是一个函数，也就是异步action
    该函数会被调用，并且会传给这个函数一个dispatch函数和getState函数
      dispatch函数：用于派发其他action
      getState函数：考虑到我么之后的一些操作需要依赖原来的状态，用于让我么可以获取之前的一些状态
 */

/*
  如何使用redux-thunk

  1.安装redux-thunk
    npm install redux-thunk
    yarn add redux-thunk

  2.在创建store时，传入middleware的enhance函数
    通过applyMiddleware来结合多个Middleware，返回一个enhancer
    将enhancer作为第二个参数传入到createStore中

      const enhancer = applyMiddleware(thunk)
      const store = createStore(reducer, enhancer)

  3.定义返回一个函数的action：
    注意：这里不再是返回一个对象，而是一个函数
    该函数在dispatch之后会被执行

      const fetchHomeDataAction = () => {
        return (dispatch, getState) => {
          axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
          const data = res.data.data
          const banners = data.banner.list
          const recommends = data.recommend.list

          dispatch(createChangeBannersAction(banners))
          dispatch(createChangeRecommendsAction(recommends))
        }
      }
 */

/*
  redux-devtools

  我们之前讲过，redux可以方便的让我们对状态进行跟踪和测试，那么如何做到的呢？
    redux官网为我们提供了redux-devtools的工具
    利用这个工具，我们可以知道每次状态时如何被修改的，修改前后的状态变化等等

  安装该工具需要两步：
    第一步：在对应的浏览器中安装相关的插件（比如Chrome浏览器扩展商店找那个搜索Redux DevTools即可）
    第二步：在redux中集成devtools的中间件

    https://github.com/zalmoxisus/redux-devtools-extension
 */

import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)