/*
  useRef

  useRef返回一个ref对象，返回的ref对象在组件的整个生命周期保持不变

  最常用的ref的两种用法：
    用法一：引入DOM（或者组件，但是需要是class组件）元素
    用法二：保存一个数据，这个对象在整个生命周期中可以保持不变（解决“闭包陷阱”问题）

  案例：
    案例一：引用DOM
    案例二：使用ref保存上一次的某一个值
 */

import React, { PureComponent, memo, useRef } from "react"

class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 100
    }
  }

  increment() {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h2>Counter: {count}</h2>
      </div>
    )
  }
}

const App = memo(() => {

  //  场景1：绑定DOM元素/组件实例对象
  const titleRef = useRef()
  const inputRef = useRef()
  const counterRef = useRef()

  const showTitleDOM = () => {
    const titleDOM = titleRef.current
    console.log(titleDOM)
  }

  const focusInput = () => {
    const inputDOM = inputRef.current
    inputDOM.focus()
  }

  const increment = () => {
    const counter = counterRef.current
    counter.increment()
  }

  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <input ref={inputRef} />
      <Counter ref={counterRef} />
      <button onClick={showTitleDOM}>查看title的dom</button>
      <button onClick={focusInput}>input获取焦点</button>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App