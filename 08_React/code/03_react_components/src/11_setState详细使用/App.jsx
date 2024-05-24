/*
  为什么使用setState

  开发中我们并不能直接通过修改state的值来让界面发生更新：
    因为我们修改了state之后，希望React根据最新的state来重新渲染界面，但是这种方式的修改，react并不知道数据发生了变化
    React并没有实现类似Vue中的Object.defineProperty或Proxy的方式来监听数据的变化
    我们必须通过setState来告知React数据已经发生了变化

  疑惑：在组件中并没有实现setState的方法，为什么可以调用呢？
    原因很简单：setState是从Component中继承过来的（Component.prototype）

    //  setState可以接收一个参数，也可以接收一个函数
    Component.prototype.setState = function(partialState, callback) {
      ...
    }
 */

/*
  setState异步更新
 */

import React, { Component } from "react"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  changeMessage() {
    //  1.setState的基本用法
    //  创建一个新的对象：{ message: "Hello React" }，将此对象合并到原有的state中
    //  Object.assign(this.state, newState)
    // this.setState({ message: "Hello React" })

    //  2.setState可以传入一个回调函数
    //  好处1：可以在回调函数中编写新的state的运算逻辑
    //  好处2：当前的回调函数，会将之前的state与props传递进来
    // this.setState((prevState, prevProps) => {
    //   console.log("setState:", prevState, prevProps)
    //   return {
    //     message: "Hello React"
    //   }
    // })

    //  3.setState在React的事件处理中，是异步调用
    //  基于性能考虑，调用setState之后，state并没有立即改变
    // this.setState({ message: "Hello React" })
    // console.log("after setState:", this.state)

    //  如果希望在数据更新之后，获取到对应的结果，并执行一些代码，可以在setState中传入第二个参数
    //  第二个参数：callback
    this.setState({ message: "Hello React" }, () => {
      console.log("after setState:", this.state)
    })
  }

  increment() {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
  }

  render() {
    const { message, counter } = this.state

    return (
      <div>
        <h2>App</h2>
        <h2>message：{message}</h2>
        <button onClick={() => this.changeMessage()}>修改文本</button>
        <h2>当前计数：{counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
}
