import { memo, useState } from "react"

//  函数组件实现计数器
function CounterFunc(props) {
  console.log("CounterFunc")
  
  //  useState：定义状态、修改状态的函数
  //  传入的参数作为状态的初始值
  //  当函数组件重新被渲染（执行）时，使用useState定义的状态不会被重置
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  )
}

export default memo(CounterFunc)