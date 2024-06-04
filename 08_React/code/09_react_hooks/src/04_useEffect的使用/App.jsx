/*
  认识Effect Hook

  目前我们已经通过Hook在函数组件中定义state，那么类似于生命周期这些呢？
    Effect Hook可以让你来完成一些类似于类组件中生命周期的功能
    事实上，类似于网络请求、手动更新DOM、一些事件的监听，都是React更新DOM的一些副作用（Side Effects）
    所以对于完成这些功能的Hook，被成为Effect Hook
 */

import React, { PureComponent, memo, useEffect, useState } from "react"

class CounterClass extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 100
    }
  }

  //  组件已挂载
  //  在生命周期钩子函数中编写的业务逻辑（比如修改网页标题），就是生命周期的副作用
  componentDidMount() {
    const { counter } = this.state
    document.title = counter
  }

  componentDidUpdate() {
    const { counter } = this.state
    document.title = counter
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>CounterClass：{counter}</h2>
        <button onClick={() => this.setState({ counter: counter + 1 })}>+1</button>
      </div>
    )
  }
}

const CounterFunc = memo((props) => {
  const [counter, setCounter] = useState(100)

  //  函数组件的函数体，相当于类组件的render函数的返回值
  //  也就是说，这段代码相当于放在类类组件的render函数中执行，这样做是不合理的
  // document.title = counter

  //  生命周期的特性
  //  网络请求/监听事件 => componentDidMount
  //  取消监听事件 => componentWillUnmount
  useEffect(() => {
    //  当前传入的函数，会在组件渲染完成后，自动执行（componentDidMount）
    //  区别于类组件，函数组件，每次被调用（执行）时，都会认为是重新渲染
    document.title = counter
  })

  return (
    <div>
      <h2>CounterFunc：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

const App = memo(() => {

  return (
    <div>
      <h2>App</h2>
      {/* <CounterClass /> */}
      <hr />
      <CounterFunc />
    </div>
  )
})

export default App

