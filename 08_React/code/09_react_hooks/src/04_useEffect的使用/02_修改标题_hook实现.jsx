/*
  认识Effect Hook

  目前我们已经通过Hook在函数组件中定义state，那么类似于生命周期这些呢？
    Effect Hook可以让你来完成一些类似于类组件中生命周期的功能
    事实上，类似于网络请求、手动更新DOM、一些事件的监听，都是React更新DOM的一些副作用（Side Effects）
    所以对于完成这些功能的Hook，被成为Effect Hook

  useEffect的解析：
    通过useEffect的Hook，可以告诉React需要在渲染后执行某些操作
    useEffect要求我们传入一个回调函数，在React执行完更新DOM操作之后，就会回调这个函数
    默认情况下，无论是第一次渲染之后，还是每次更新（重新渲染）之后，都会执行这个回调函数
 */

import React, { memo, useState, useEffect } from "react"

const App = memo(() => {
  const [counter, setCounter] = useState(100)

  //  函数组件的函数体，相当于类组件的render函数的返回值
  //  也就是说，这段代码相当于放在类类组件的render函数中执行，这样做是不合理的
  // document.title = counter

  //  生命周期的特性
  //  网络请求/监听事件 => componentDidMount
  //  取消监听事件 => componentWillUnmount
  useEffect(() => {
    //  当前传入的函数，会在组件渲染完成后，自动执行
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

export default App