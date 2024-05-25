/*
  setState默认是异步的（React18之后）

  在React18之前，只有React事件（生命周期、绑定的事件等）才会放到批处理
  在React18之后，默认所有的操作都被放到了批处理中（异步处理）
    https://zh-hans.react.dev/blog/2022/03/29/react-v18
    https://github.com/reactwg/react-18/discussions/21
 */

import React, { Component } from "react"
import { flushSync } from "react-dom"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  changeMessage() {
    // setTimeout(() => {
    //   //  在React18之前，setTimeout中的setState操作，是同步操作
    //   //  在React18之后，setTimeout中的setState操作，是异步操作（批处理）
    //   this.setState({ message: "Hello React" })
    //   console.log("after setState:", this.state.message)
    // }, 0)

    //  通过flushSync，将setState执行变成同步的
    flushSync(() => {
      this.setState({ message: "Hello React" })
    })

    console.log("after setState:", this.state.message)
  }

  increment() {
    //  以下方式会确保回调函数中的state是最新的
    //  即使这样，render也只会执行1次
    this.setState((state) => {
      return { counter: state.counter + 1 }
    })
    this.setState((state) => {
      return { counter: state.counter + 1 }
    })
    this.setState((state) => {
      return { counter: state.counter + 1 }
    })
  }

  render() {
    console.log("App render")
    const { message, counter } = this.state

    return (
      <div>
        <h2>App</h2>
        <h2>message：{message}</h2>
        <button onClick={() => this.changeMessage()}>修改文本</button>
        <h2>当前计数：{counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        {/* setState执行完毕，并不会立即调用render函数 */}
        {/* 如果setState是同步的，那么App中的message与传给Hello的message将不同步 */}
        <Hello message={message} />
      </div>
    )
  }
}

function Hello(props) {

  return (
    <div>
      <h2>Hello</h2>
      <h2>message：{props.message}</h2>
    </div>
  )
}