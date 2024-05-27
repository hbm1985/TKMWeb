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
    componentWillUnmount（组件即将被卸载）
 */

/*
  生命周期函数

  constructor
    如果不初始化state或不进行方法绑定，则不需要为React组件实现构造函数
    constructor中通常只做两件事：
      通过给this.state赋值对象来初始化内部的state
      为事件绑定实例（bind this）

  componentDidMount
    componentDidMount会在组件挂载后（插入DOM树中）立即调用
    componentDidMount通常进行那些操作呢？
      依赖于DOM的操作可以在这里进行（因为可以获取到DOM对象了）
      在此处发送网络请求最好的地方（官方建议）
      可以在此处添加一些订阅（在componentWillUnmount中取消订阅）

  componentDidUpdate
    componentDidUpdate会在更新后被立即调用，首次渲染不会执行此方法
      当组件更新后，可以在此处对DOM进行操作（可以保证DOM是最新的）
      如果你对更新前后的props进行比较，也可以在此处进行网络请求

  componentWillUnmount
    componentWillUnmount会在组件卸载及销毁之前调用
      在此方法中执行必要的清理工作
      例如：清除定时器、取消网络请求、或清除在componentDidMount中创建的订阅等
 */

/*
  不常用生命周期函数

  除了上面介绍的生命周期函数之外，还有一些不常用的生命周期函数：
    getDerivedStateFromProps：state的值在任何时候都依赖于props，该方法返回一个对象来更新state
    getSnapshotBeforeUpdate：在React更新DOM之前回调的一个函数，可以获取到DOM更新前的一些信息
    shouldComponentUpdate：组件是否要被更新，后续讲到性能优化时再详细讲解

  Mounting
    constructor
    getDerivedStateFromProps
    render
    componentDidMount

  Updating
    getDerivedStateFromProps
    shouldComponentUpdate（forceUpdate不会触发）
    render
    componentDidUpdate
    getSnapshotBeforeUpdate
    componentDidUpdate

  Unmounting：
    componentWillUnmount

  另外，React中海提供了一些过期的生命周期函数，这些函数已经不再推荐使用

  更详细的生命周期相关内容，可以参考官网
    https://zh-hans.legacy.reactjs.org/docs/react-component.html
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
