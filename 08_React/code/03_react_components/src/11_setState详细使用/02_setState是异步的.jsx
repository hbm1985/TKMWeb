/*
  setState异步更新

  setState的更新是异步的？
    我们并不能在执行完setState之后立刻拿到最新的state结果

  为什么setState设计为异步呢？
    setState设计为异步，其实之前在Github上也有很多的讨论
    React核心成员（Redux的作者）也有对应的回复
    https://github.com/facebook/react/issues/11527#issuecomment-360199710

  setState设计为异步，可以显著提升性能：
    如果每次调用setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的
    最好的办法应该是获取到多个更新，之后进行批量更新

  如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步
    state和props不能保持一致性，会在开发中产生很多的问题
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
    //  setState会触发3次，但render函数会触发几次？（只会触发1次）
    //  假设setState为同步的，那么每次increment执行完，counter应该加3
    // this.setState({ counter: this.state.counter + 1 })
    // this.setState({ counter: this.state.counter + 1 })
    // this.setState({ counter: this.state.counter + 1 })

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
