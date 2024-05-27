/*
  类组件

  类组件的定义有如下要求：
    组件的名称是大写字符开头（无论类组件还是函数组件）
    类组件需要继承自React.component
    类组件必须实现render函数

  在ES6之前，可以通过create-react-class模版来定义类组件，但是目前官网建议我们使用ES6的class定义

  使用class定义一个组件：
    constructor是可选的，我们通常会在constructor中初始化一些数据
    this.state中维护的就是我们组件内部的数据
    render方法是class组件中唯一必须实现的方法
 */

/*
  render函数的返回值

  当render被调用时，它会检查this.props和this.state的变化并返回以下类型之一：

  React元素：
    通常通过JSX创建
    例如：<div></div>会被React渲染为DOM节点，<App />会被React渲染为自定义组件
    无论是<div></div>还是<App />，均为React元素

  数组或fragments：使得render方法可以返回多个元素

  Portals：可以渲染子节点到不用的DOM子树中

  字符串或数值类型：它们在DOM中会被渲染成文本节点

  布尔类型或null或undefined：什么都不渲染
 */

import React, { Component } from "react"

function MyComponent() {
  return <h2>MyComponent</h2>
}

//  定义类组件
//  快捷键：rcc、rce
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "App Component"
    }
  }

  render() {
    const { message } = this.state

    //  1.react元素：通过JSX编写的代码就会被编译成React.createElement，会议返回的就是一个React元素
    // return (
    //   <div>
    //     <h2>{message}</h2>
    //     <MyComponent />
    //   </div>
    // )

    //  2.数组或fragments（后续学习）
    // return [
    //   <h2>{message}</h2>,
    //   <MyComponent />
    // ]

    //  3.字符串/数字类型：最终渲染成文本节点
    // return {message}
    // return 114514

    //  4.boolean/null/undefined：什么都不渲染
    // return true
    // return null
    return undefined
  }
}

export default App
