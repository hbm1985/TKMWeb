/*
  useMemo

  useMemo实际的目的也是为了进行性能优化

  如何进行优化的呢？
    useMemo返回的也是一个memoized（记忆的）值
    在依赖不变的情况下，多次定义的时候，返回的值也是相同的（参开Vue中的computed计算属性）

  案例：
    1.进行大量的计算操作，是否有必要每次渲染时都重新计算（没必要）
    2.对子组件传递相同内容的对象时，使用useMemo进行性能优化
 */

import React, { memo, useCallback, useMemo, useState } from "react"

const HelloWorld = memo(props => {
  console.log("HelloWorld render")

  return (
    <div>
      <h2>Hello World</h2>
      <h2>Tount: {props.total}</h2>
      <h2>姓名：{props.name}</h2>
      <h2>年龄：{props.age}</h2>
    </div>
  )

})

function calcNumTotal(num) {
  console.log("calcNumTotal called")
  let result = 0
  for (let i = 1; i <= num; i++) {
    result += i
  }
  return result
}

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Bread")

  //  useMemo：对回调函数中的返回结果进行缓存，依赖项不变，则不会重新执行回调函数
  //  参考Vue中的computed计算属性与methods的差异
  const total = useMemo(() => {
    let result = 0
    for (let i = 1; i <= count; i++) {
      result += i
    }
    return result
  }, [count])

  //  useCallback与useMemo对比：
  //  useCallback会对回调函数进行缓存
  //  useMemo回怼回调函数的结果进行缓存
  //  useCallback(fn, deps)相当于useMemo(() => fn, deps)
  const getDoubleCount = () => {
    return count * 2
  }

  const doubleCount1 = useCallback(getDoubleCount, [count])

  const doubleCount2 = useMemo(() => {
    console.log("useMemo called")
    return count * 2
  }, [count])

  //  默认情况下，函数组件重新渲染，那么其内部定义的临时变量也会重新生成
  //  如果将这个临时变量传给子组件，即使这个临时变量的内容没有变化（仅仅是重新生成），也会引起子组件的重新渲染
  //  这时，可以使用useMemo，将这个临时变量缓存起来，每次都只返回这个缓存的临时变量，就不会引起子组件重新渲染了
  //  因此，useMemo在对象类型的数据上，对子组件是有性能优化的，而值类型的数据则不会
  const info = useMemo(() => {
    return { name: "Bread", age: 24 }
  }, [])

  return (
    <div>
      <h2>当前计数：{count}</h2>
      {/* 注意：useCallback的返回值为函数，需要调用 */}
      <h2>当前双倍计数：{doubleCount1()}</h2>
      <h2>当前双倍技术：{doubleCount2}</h2>
      <h2>求和：{calcNumTotal(count)}</h2>
      <h2>求和：{total}</h2>
      <h2>姓名：{name}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setName(name + "@")}>修改姓名</button>
      {/* 子组件是否重新渲染，取决于传入的props是否有变化 */}
      {/* 如果传递的对象，即使内容没变，但是是重新生成的，也会引起子组件重新渲染 */}
      <HelloWorld total={total} info={info} />
    </div>
  )
})

export default App