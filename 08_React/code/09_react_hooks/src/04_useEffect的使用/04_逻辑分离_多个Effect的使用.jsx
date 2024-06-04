/*
  使用多个Effect

  使用Hook的其中一个目的就是解决类组件中生命周期经常将很多逻辑放在一起的问题
    比如网络请求、时间箭头、手动修改DOM（ref）、这些往往都会放在componentDidMount中

  使用Effect Hook，我们可以将它们分离到不同的useEffect中

  Hook允许我们按照代码的用途分离它们，而不是像生命周期函数那样：
    React将按照effect声明的顺序依次调用组件中的每一个effect
 */

import React, { memo, useEffect, useState } from "react"

const App = memo(() => {

  const [counter, setCounter] = useState(100)

  //  告知React，在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    console.log("开启定时器")
    let timerId = setInterval(() => {
      setCounter(counter + 1)
    }, 1000)

    return () => {
      console.log("取消定时器")
      clearInterval(timerId)
      timerId = undefined
    }
  })

  useEffect(() => {
    console.log("监听event-bus")

    return () => {
      console.log("取消监听event-bus")
    }
  })

  //  一个函数组件中，可以有多个useEffect
  //  多个useEffect将会按定义的顺序执行
  useEffect(() => {
    console.log("修改标题")
    document.title = `当前计数：${counter}`
  })

  //  后续也可以将每一个useEffect的逻辑，抽取为单独的自定义Hook
  useEffect(() => {
    console.log("请求数据")
  })

  return (
    <div>
      <h2>App</h2>
      <h2>Counter: {counter}</h2>
    </div>
  )
})

export default App