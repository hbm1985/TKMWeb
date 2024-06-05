/*
  useLayoutEffect

  useEffectLayout看起来和useEffect非常的相似，事实上它们也只有一点区别而已：
    useEffect会在渲染的内容更新到DOM上后执行，不会阻塞DOM的更新
    useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新

  如果我们希望在某些操作发生之后再更新DOM，那么应该将这个操作放到useLayoutEffect

  官方推荐使用useEffect而不是useLayoutEffect
 */

import React, { memo, useEffect, useLayoutEffect, useState } from "react"

const App = memo(() => {

  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    //  会在DOM更新之前执行，因此会阻塞DOM更新，不建议使用
    console.log("DOM更新之前")
  })

  useEffect(() => {
    console.log("DOM更新完毕")
  })

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App