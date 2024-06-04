/*
   需要清除的Effect

  在类组件的编写过程中，某些副作用的艾玛，我们需要在componentWillUnmount中进行清除
    比如我们之前的事件总线或Redux中手动调用subscribe
    都需要在componentWillUnmount有对应的取消订阅
    Effect Hook通过什么方式来模拟componentWillUnmount呢？

  useEffect传入的回调函数A本身可以有一个返回值，这个返回值是另外一个回调函数B
    type EffectCallback = () => (void | (() => void | undefined))

  为什么要在effect中返回一个函数？
    这是effect可选的清除机制。每个effect都可以返回一个清除函数
    如此可以将添加和移除订阅的逻辑放在一起
    它们都属于effect的一部分

  React何时清除effect？
    React会在组件更新和卸载的时候执行清除操作
    正如之前学到的，effect在每次渲染的时候都会执行
 */

import React, { memo, useEffect, useState } from "react"

const App = memo(() => {

  const [counter, setCounter] = useState(100)

  //  告知React，在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    let timerId = setInterval(() => {
      //  每次setCounter之后，App组件会被重新渲染
      //  在重新渲染之前，会执行清理（cleanup）函数
      setCounter(counter + 1)
    }, 1000)

    //  返回值是一个回调函数，组件被重新渲染或者组件被卸载的时候执行
    //  这个回调函数被称为清理（cleanup）函数
    return () => {
      clearInterval(timerId)
      timerId = undefined
    }
  })

  return (
    <div>
      <h2>App</h2>
      <h2>Counter: {counter}</h2>
    </div>
  )
})

export default App