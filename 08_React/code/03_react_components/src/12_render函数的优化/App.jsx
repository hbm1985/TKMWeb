/*
  render函数被调用

  我们使用之前的一个嵌套案例
    App
      Home
      Recommend

  思考一下，修改了App的数据，所有的组件都需要重新render，进行diff算法，性能必然是很低的
    事实上，很多的组件没有必要重新render
    它们调用render应该有一个前提，就是依赖的数据（state、props）发生改变时，再调用自己的render方法
 */

/*
  shouldComponentUpdate

  React给我们提供了一个生命周期方法shouldComponentUpdate（很多时候，我们简称SCU），这个方法接受参数，并且需要有返回值

  该方法有两个参数：
    参数一：nextProps，修改之后，最新的props属性
    参数二：nextState，修改之后，最新的state属性

  该方法返回值是一个boolean类型：
    返回值为true，那么就需要调用render方法
    返回值为false，那么就不需要调用render方法
    默认返回值为true，也就是只要state发生改变，就会调用render方法

  比如我们在App中增加一个message属性：
    jsx中并没有依赖这个message，那么它的改变不应该引起重新渲染
    但是因为state发生了改变，默认shouldComponentUpdate返回true，所以render方法还是被重新调用了
 */

import React, { Component } from "react"
import Home from "./components/Home"
import Recommend from "./components/Recommend"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  changeMessage() {
    this.setState({ message: "Hello React" })
    // this.setState({ message: "Hello World" })
  }

  increment() {
    this.setState(state => {
      return {
        counter: state.counter + 1
      }
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.message !== nextState.message || this.state.counter !== nextState.counter) {
      return true
    }
    return false
  }

  render() {
    console.log("App render")
    const { message, counter } = this.state

    return (
      <div>
        <h2>App-{message}-{counter}</h2>
        <button onClick={() => this.changeMessage()}>修改文本</button>
        <button onClick={() => this.increment()}>+1</button>
        <Home message={message} />
        <Recommend counter={counter} />
      </div>
    )
  }
}
