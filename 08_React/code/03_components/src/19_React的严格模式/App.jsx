/*
  StrictMode

  StrictMode是一个用来突出显示应用程序中潜在问题的工具：
    与Fragment一样，StrictMode不会渲染任何可见的UI
    它为其后代元素触发额外的检查和警告
    严格模式检查仅在开发模式下运行，它不会影响生产构建

  可以为应用程序的任何部分启用严格模式：
    不会对Profile组件运行严格模式检查
    但是，Home组件以及它的所有后代元素都将进行检查
 */

/*
  严格模式检查的是什么？

  1.识别不安全的生命周期

  2.使用过时的ref API

  3.检查意外的副作用
    这个组件的constructor会被调用两次
    这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次，是否会产生一些副作用
    在生产环境中，是不会被调用两次的

  4.使用废弃的fineDOMNode方法
    在之前的React API中，可以通过findDOMNode来获取DOM，不过已经不推荐使用了（推荐使用ref）
    早期的Ant Design，里面有使用到fineDOMNode这个API，因此严格模式下会有对应的警告

  5.检测过时的context API
    早期的Context是通过static属性声明Context对象属性，通过getChildContext返回Context对象等方式来使用Context的
    目前这种方式已经不再推荐使用
 */

import React, { PureComponent } from "react"
import Home from "./components/Home"
import Profile from "./components/Profile"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Home />
        </React.StrictMode>
        <Profile />
      </div>
    )
  }
}
