/*
  React中的插槽（slot）

  在开发中，我们抽取了一个组件，但是为了让这个组件具备更强的通用性，我们不能将组件中的内容限制为固定的div、span等元素

  我们应该让使用者可以决定某一块区域到底存放什么内容

  这种需求在Vue当中有一个固定的做法，是通过slot完成，React呢？

  React对于这种需要插槽的情况非常灵活，有两种方案可以实现：
    组件的children子元素
    props属性传递React元素
 */

/*
  children实现插槽

  每个组件都可以获取到props.children：它包含组件的开始标签和结束标签之间的内容
 */

import React, { Component } from "react"
import NavBar from "./components/NavBar"

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          {/* 子元素作为父组件的props.children */}
          <button>返回</button>
          <h2>我是标题</h2>
          <i>斜体文字</i>
        </NavBar>
      </div>
    )
  }
}

export default App