/*
  useReducer

  很多人看到useReducer的第一反应应该是Redux的某个替代品，其实并不是

  useReducer仅仅是useState的一种替代方案：
    在某些场景下，如果state的处理逻辑比较复杂，我们可以通过useReducer来对其进行次啊划分
    或者这次修改的state需要依赖之间的state时，也可以使用
 */

import React, { memo, useReducer, useState } from "react"

const Counter1 = memo(() => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(count - 5)}>-5</button>
      <button onClick={() => setCount(count + 100)}>+100</button>
    </div>
  )
})

//  定义reducer
function reducer(prevState, action) {
  switch (action.type) {
    case "increment":
      return { ...prevState, count: prevState.count + action.data }
    case "decrement":
      return { ...prevState, count: prevState.count - action.data }
    default:
      return prevState
  }
}

const Counter2 = memo(() => {
  //  useReducer：可以将多个数据以及对数据的操作统一起来（如果使用useState，则需要分别定义）
  //  参考Redux的用法：数据存储在state中，使用dispatch派发action，来修改state
  //  注意：useReducer并非Redux的替代品，只是参考了Redux的用法，因为该数据没有被其他组件共享
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>当前计数：{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", data: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement", data: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: "increment", data: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "decrement", data: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: "increment", data: 100 })}>+100</button>
    </div>
  )
})

const App = memo(() => {
  return (
    <div>
      <Counter1 />
      <Counter2 />
      <Counter2 />
    </div>
  )
})

export default App