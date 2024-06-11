/*
  useTransition

  官方解释：返回一个状态值表示过渡任务的等待状态，以及一个启动该过渡任务的函数

  它其实在告诉react对于某部分任务的更新优先级较低，可以稍后进行更新
 */

import React, { memo, useState, useTransition } from "react"
import namesArray from "./namesArray"

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  const [pending, startTransition] = useTransition()

  const filterNames = (e) => {
    startTransition(() => {
      const keyword = e.target.value
      const filterShowNames = namesArray.filter(item => item.includes(keyword))
      setShowNames(filterShowNames)
    })
  }

  return (
    <div>
      <input type="text" onInput={filterNames} />
      <h2>用户列表：{pending && <div>加载中...</div>}</h2>
      <ul>
        {
          showNames.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App