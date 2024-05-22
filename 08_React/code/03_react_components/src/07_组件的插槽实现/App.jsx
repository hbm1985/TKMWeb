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

/*
  props实现插槽

  通过children实现的方案虽然可行，但是有一个弊端：通过索引值获取传入的元素很容易出错，不能精准的获取传入的元素

  另外一种方案就是使用props实现：
    通过具体的属性名，可以让我们在传入和获取时更加的精准
 */

import React, { Component } from "react"
import NavBar from "./components/NavBar"
import TabBar from "./components/TabBar"

export class App extends Component {
  render() {
    //  构建tabBar的子元素
    const tabBarItems = [
      (
        <div key="home">
          <span>首页</span>
        </div>
      ),
      (
        <div key="message">
          <span>消息</span>
        </div>
      ),
      (
        <div key="order">
          <span>订单</span>
        </div>
      ),
      (
        <div key="mine">
          <span>我的</span>
        </div>
      )
    ]

    return (
      <div>
        {/* 1.使用children实现插槽 */}
        {/* 此方式的弊端：单个/多个子元素，children的类型不同，且需要确定子元素的顺序 */}
        <NavBar>
          {/* 子元素作为父组件的props.children */}
          <button>返回</button>
          <h2>我是标题</h2>
          <i>斜体文字</i>
        </NavBar>
        {/* 2.使用props实现插槽 */}
        {/* 相比children，props更为灵活 */}
        <TabBar items={tabBarItems} />
      </div>
    )
  }
}

export default App