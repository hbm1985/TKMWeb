import React, { memo, useEffect, useState } from "react"

const App = memo(() => {
  console.log("App render")
  
  const [count, setCount] = useState(100)

  useEffect(() => {
    //  先渲染0，再渲染设置的值
    //  也就是说，如果使用useEffect修正，则渲染会执行两次（屏幕会闪烁两次）
    if (count === 0) {
      setCount(Math.random() + 99)
    }
  })

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(0)}>+1</button>
    </div>
  )
})

export default App