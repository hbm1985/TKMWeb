/*
  普通的CSS

  普通的CSS我们通常会编写到一个单独的文件，之后再进行引入

  这样的编写方式和普通的网页开发中编写方式是一致的：
    如果我们按照普通的网页标准去编写，那么也不会有太大的问题
    但是组件化开发中我们总是希望组件是一个独立的模块，即便是样式也只是在自己内部生效，不会相互影响
    但是普通的CSS都属于全局的CSS，样式之间会相互影响

  这种编写方式最大的问题是样式之间会相互层叠
 */

import React, { PureComponent } from "react"
import "./App.css"
import Home from "./components/Home"
import Profile from "./components/Profile"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是标题</h2>
        <p className="content">我是内容，哈哈哈</p>
        <Home />
        <Profile />
      </div>
    )
  }
}
