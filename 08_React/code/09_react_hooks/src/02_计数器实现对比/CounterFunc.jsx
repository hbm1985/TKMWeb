import { memo, useState } from "react"

//  普通的函数，里面不能使用Hooks
//  在自定义的Hooks中，可以使用React提供的其他Hooks
//  区分普通函数与自定义Hooks：是否已use开头
function useFoo() {
  const [message, setMessage] = useState("Hello")
  return { message, setMessage }
}

//  函数组件实现计数器
function CounterFunc(props) {
  console.log("CounterFunc")

  //  useState：定义状态、修改状态的函数
  //  传入的参数作为状态的初始值
  //  当函数组件重新被渲染（执行）时，使用useState定义的状态不会被重置
  const [counter, setCounter] = useState(0)

  //  React Hooks必须在函数组件内的顶级作用域使用
  // if (true) {
  //   //  React Hooks must be called in the exact same order in every component render
  //   const [name, setName] = useState("Bread")
  // }

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      {/* 每次调用setCounter之后，函数组件将会以最新的state值，重新渲染 */}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  )
}

export default memo(CounterFunc)