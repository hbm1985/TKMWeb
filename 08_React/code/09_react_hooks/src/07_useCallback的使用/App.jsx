/*
  useCallback

  useCallback实际的目的是为了进行性能的优化

  如何进行性能的优化呢？
    useCallback会返回一个函数的memoized（记忆的）值
    在依赖不变的情况下，多次定义的时候，返回的值是相同的

  案例：
    1.使用useCallback和不使用useCallback定义一个函数，对组件本身是否会带来性能的优化（不会）
    2.使用useCallback和不使用useCallback定义一个函数，传递给组组件，是否会带来性能的优化（会的）

  通常使用useCallback的目的是不希望子组件进行多次渲染，并不是为了函数进行缓存
 */

import React, { memo, useState, useCallback, useRef } from "react"

//  useCallback性能优化的点：
//  1.当需要将一个函数传递给子组件时，最好使用useCallback进行优化，传递给子组件（避免子组件重新渲染）
//  2.useCallback要避免”闭包的陷阱“

//  当props发生变化，会引起组件重新渲染
//  props不仅可以是父组件的数据，也可以是父组件的事件回调函数
const Counter = memo((props) => {
  console.log("Buttons render")

  const increment = () => {
    const { increment } = props
    increment()
  }

  const decrement = () => {
    const { decrement } = props
    decrement()
  }

  return (
    <div>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
    </div>
  )
})

const App = memo(() => {
  console.log("App render")

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Bread")

  //  思考一个问题：increment在函数组件重新渲染时，是否应该重新被创建
  // const increment = () => {
  //   setCount(count + 1)
  // }

  //  使用useCallback时，需要考虑”闭包的陷阱“
  //  但是这样做，就失去了useCallback的意义，因为increment在每次函数组件重新渲染时，都是最新的
  //  需要给useCallback传入第二个参数，指定，当哪些数据发生变化时，重新生成新的callback
  // const increment = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])

  //  单纯使用useCallback，对性能优化是没有意义的
  //  但如果将这个函数传递给子组件，那么useCallback的优势就体现出来了
  //  如果子组件没有依赖的数据发生变化，而不希望子组件重新渲染，则可以使用useCAllback
  // const increment = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])

  // const decrement = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])

  //  进一步优化：当counter发生改变时，也使用同一个函数
  //  做法一：setCount传入回调函数，这样可以避免闭包陷阱
  //  做法二：useRef，在组件多次渲染时，返回的是同一个值
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(() => {
    // setCount(prevCount => prevCount + 1)

    //  每次捕获的countRef是相同的，但是counterRef的value是不同的
    //  参考Android中的LiveData、Vue中的Ref的设计思路
    setCount(countRef.current + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1)
  }, [])

  return (
    <div>
      <h2>计数：{count}</h2>
      <h2>姓名：{name}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={() => setName(name + "@")}>修改姓名</button>
      {/* 子组件仅仅依赖了父组件的两个事件回调函数，没有依赖其他父组件的数据 */}
      {/* 如果子组件没有依赖的数据发生变化，则不应该引起子组件重新渲染 */}
      <Counter increment={increment} decrement={decrement} />
    </div>
  )
})

export default App