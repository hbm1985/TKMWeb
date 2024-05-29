/*
  认识Redux Toolkit

  Redux Toolkit是官方推荐的编写Redux逻辑的方法
    在前面我们血虚Redux的时候应该已经发现，Redux的编写逻辑过于的繁琐和麻烦
    并且代码通常拆分在多个文件找那个（对然也可以放在同一个文件管理，但是代码量过多，不利于管理）
    Redux Toolkit包旨在成为编写Redux逻辑的标准方式，从而解决上面提到的问题
    在很多地方为了称呼方便，也将之称为“RTK”

  安装Redux Toolkit：
    npm install @reduxjs/toolkit react-redux

  Redux Toolkit的核心API主要是如下几个：
    configureStore：包装createStore以提供简化的配置选项和良好的默认值，他可以自动组合slice reducer，添加提供的人格Redux中间件，redux-thunk默认包含，并且启用Redux DevTools Extension
    createSlice：接收reducer函数的对象、切片名称和初始状态值，并自动生成切片reducer，并带有相应的actions
    createAsyncThunk：接收一个动作类型字符串和一个返回Promise的函数，并生成一个pending/fulfilled/rejected基于该承诺分派动作类型的thunk
 */

/*
  store的创建

  configureStore用于创建store对象，常见参数如下：
    reducer：将slice中的reducer以key、value的形式组成对象，传入此处
    middleware：可以使用参数，传入其他的中间件
    devTools：是否配置devTools工具，默认为true
 */

/*
  重构代码-创建counter的reducer

  我们先对counter的reducer进行重构：通过createSlice创建一个slice

  createSlice主要包含以下几个参数：

  name：用户标记的名词：
    在之后的redux-devtool中会显示对应的名词
    也是为了区分多个slice中同名（type）的action，相当于一个命名空间

  initialState：初始化值
    第一次初始化时的值

  reducers：相当于之前的reducer函数
    对象类型，并且可以添加很多的函数
    函数类似于redux原来reducer中的一个case语句
    函数的参数：
      参数一：state
      参数二：调用这个action时，传递的action参数

  createSlice：返回值是一个对象，包含所有的actions
 */

/*
  Redux Toolkit的异步操作

  在之前的开发中，我们通过redux-thunk中间件让dispatch可以进行异步操作

  Redux Toolkit默认已经给我们集成了Thunk相关的功能：createAsyncThunk

  当createAsyncThunk创建出来的action被dispatch时，会存在三种状态
    pending：action被发出，但是还没有最终的结果
    fulfilled：获取到最终的结果
    rejected：执行过程中有错误或者抛出了异常

  我们可以在createSlice的extraReducer中监听这些结果
    新版的RTK已经不支持createSlice.extraReducers这种写法了，会报错
    The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback'
    https://redux-toolkit.js.org/api/createSlice
 */

/*
  extraReducer的另外一种写法

  extraReducer还可以传入一个函数，函数接收一个builder参数
    我们可以向builder中添加case来监听异步操作的结果
 */

/*
  Redux Toolkit的数据不可变性（了解）

  在React开发中，我们总是会强调数据的不可变性：
    无论是类组件的state，还是redux中管理的state
    事实上在整个JavaScript编码过程中，数据的不可变性都是非常重要的

  所以在前面我们经常会进行浅拷贝来完成某些操作，但是浅拷贝事实上也是存在问题的：
    比如过大的对象，进行浅拷贝也会早晨性能的浪费
    比如浅拷贝后的对象，在深层改变时，依然会对之前的对象产生影响

  事实上Redux Toolkit底层使用了immerjs的一个库来保证数据的不可变性

  为了节约内存，又出现了一个新的算法：Presistent Data Structure（持久化数据结构或一致性数据结构）
    用一种数据结构来保存数据
    当数据被修改时，会返回一个对象，但是新的对象会极可能的利用之前的数据结构而不会对内存造成浪费
 */

import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
