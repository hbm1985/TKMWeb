import React, { memo, useLayoutEffect, useState } from "react"

const App = memo(() => {
  console.log("App render")

  const [count, setCount] = useState(100)

  useLayoutEffect(() => {
    //  虽然也会渲染两次，但是不会有闪烁现象
    //  官方的建议：
    //  useLayoutEffect可能会影响性能。尽可能使用useEffect
    //  建议先使用useEffect，如果出现了问题（比如屏幕闪烁），再使用useLayoutEffect
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