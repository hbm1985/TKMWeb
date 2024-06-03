import React, { memo } from "react"
import CounterClass from "./CounterClass"
import CounterFunc from "./CounterFunc"

//  memo：相当于类组件的PureComponent效果
const App = memo(() => {
  return (
    <div>
      <CounterClass />
      <hr />
      <CounterFunc />
    </div>
  )
})

export default App
