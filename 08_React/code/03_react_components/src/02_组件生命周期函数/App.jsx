/*
  认识生命周期

  很多的事物都有从创建到销毁的整个过程，这个过程称之为是生命周期

  React组件也有自己的生命周期，了解组件的生命周期可以让我们在最合适的地方完成自己想要的功能

  生命周期和生命周期函数的关系：

  生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段：
    比如装载阶段（Mount），组件第一次在DOM树中被渲染的过程
    比如更新过程（Update），组件状态发生变化，重新更新渲染的过程
    比如卸载阶段（Unmount），组件从DOM树中被移除的过程

  我们谈React生命周期时，主要谈的是类组件的生命周期，因为函数组件时不存在生命周期的
  后续讲到hooks，可以通过hooks模拟一些生命周期钩子
 */

/*
  生命周期解析

  我们先来学习一下最基础、最常用的生命周期函数

  Mounting（挂载阶段）：
    constructor（组件被实例化）
    render（组件首次被渲染）
    componentDidMount（组件已挂载）

  Updating（更新阶段：new props、setState、forceUpdate）：
    render（组件重新被渲染）
    componentDidUpdate（组件已更新）

  Unmounting（卸载阶段）：
    ucomponentWillnmount（组件即将被卸载）
 */

import React, { Component } from "react"
import HelloWorld from "./HelloWorld"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowHW: true }
  }

  changeShow() {
    const { isShowHW } = this.state
    this.setState({ isShowHW: !isShowHW })
  }

  render() {
    const { isShowHW } = this.state
    return (
      <div>
        App
        <button onClick={() => this.changeShow()}>切换显示/隐藏</button>
        {isShowHW && <HelloWorld />}
      </div>
    )
  }
}
