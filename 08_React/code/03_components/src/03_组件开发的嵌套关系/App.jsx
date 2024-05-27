/*
  认识组件的嵌套

  组件之间存在嵌套关系：
    在之前的案例中，我们只是创建了一个App组件
    如果我们一个应用程序讲所有的逻辑都放在一个组件中，那么这个组件就会变得非常臃肿和难以维护
    所以组件化的核心思想应该是对组件进行拆分，拆分成一个个小的组件
    再将这些组件组合嵌套在一起，最终形成我们的应用程序

  App
    Header
    Main
      Banner
      ProductList
    Footer

  上面的嵌套逻辑如下，它们存在如下关系：
    App组件时Header、Main、Footer组件的父组件
    Main组件时Banner、ProductList组件的父组件
 */

import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        {/* 注意：如果此处写成header，则React会认为是HTML的元素 */}
        {/* React区分HTML元素与组件：首字母是否大写 */}
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
