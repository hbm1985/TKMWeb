/*
  Effect性能优化

  默认情况下，useEffect的回调函数会在每次渲染时都重新执行，但是这回导致两个问题：
    某些代码我们只希望执行一次即可，类似于componentDidMount和componentWillUnmount中完成的事情（比如：网络请求、订阅和取消订阅）
    另外，多次执行也会导致一定的性能问题

  我们如何觉得useEffect在什么时候应该执行和什么时候不应该执行呢？
    useEffect实际上有两个参数：
    参数一：执行的回调函数
    参数二：该useEffect在哪些state发生变化时，才重新执行（受谁的影响）

  但是，如果一个函数我们不希望依赖任何的内容时，也可以传入一个空的数组：[]
    那么这里的两个回调函数分别对应的就是componentDidMount和ucomponentWillUnmount
 */

import React, { memo, useEffect, useState } from "react"

const App = memo(() => {

  const [counter, setCounter] = useState(100)
  const [message, setMessage] = useState("Bread")

  //  告知React，在执行完当前组件渲染之后要执行的副作用代码
  //  思考一下：网络请求、开启定时器、开启event-bus监听，往往只需要执行一次即可
  //  useEffect的第二个参数决定了依赖哪些数据才执行回调函数
  //  通过useEffect可以模拟出之前的类组件的生命周期，但是它比原来的证明周期更强大
  useEffect(() => {
    console.log("开启定时器")
    let timerId = setInterval(() => {
      //  setCounter的另一种写法
      setCounter(prevCounter => prevCounter + 1)
    }, 1000)
    return () => {
      console.log("取消定时器")
      clearInterval(timerId)
      timerId = undefined
    }
  }, [])

  useEffect(() => {
    console.log("监听event-bus")

    return () => {
      console.log("取消监听event-bus")
    }
  }, [])

  //  只有counter变化时，才执行回调函数
  //  对比Vue3中的watch函数的用法
  useEffect(() => {
    console.log("修改标题")
    document.title = `当前计数：${counter}`
  }, [counter])

  //  后续也可以将每一个useEffect的逻辑，抽取为单独的自定义Hook
  useEffect(() => {
    console.log("请求数据")
  }, [])

  return (
    <div>
      <h2>App</h2>
      <h2>Counter: {counter}</h2>
      <h2>Message: {message}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setMessage(message + "@")}>修改message</button>
    </div>
  )
})

export default App