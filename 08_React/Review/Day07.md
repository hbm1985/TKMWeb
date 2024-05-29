# 一、Redux自身的用法

## 1.1 react-redux库的使用

+ 将redux与react组件联系起来

+ Provider

+ connect

## 1.2 redux中进行异步操作

+ 默认只能dispatch同步action

+ dispatch(action函数)默认是不被允许的

+ redux-thunk

  + applyMiddleware(thunk)

+ 函数中发送异步请求

## 1.3 reducer的拆分过程

+ combineReducers({ counter: counterReducer, home: homeReducer })

+ combineReducers的原理

# 二、ReduxToolkit的使用

## 2.1 RTK介绍

+ react-redux的代码冗余

## 2.2 RTK基本使用

+ configureStore

+ createSlice

  + name

  + initialState

  + reducers

## 2.3 RTK的异步操作

+ createAsyncThunk

+ 三种状态（与Promise对应）

  + pending

  + fulfilled

  + rejected

+ extraReducers

  + 老版本的写法

+ extra编写异步action

  + buildCreateSlice

## 2.4 RTK其他两个用法

+ extraReducers

  + builder

+ createAsyncThunk

  + async函数传参

## 2.5 RTK底层immer-js库

三、connect底层原理

## 3.1 connect的实现

+ connect函数的入参

+ connect函数的返回值

## 3.2 store的解耦操作

+ store以context的方式传入

+ StoreContext