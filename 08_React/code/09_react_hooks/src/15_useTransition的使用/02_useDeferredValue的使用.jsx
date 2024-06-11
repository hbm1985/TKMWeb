/*
  useDeferredValue

  官方解释：useDeferredValue接受一个值，并返回该值的新副本，该副本将推迟到更紧急的更新之后

  在明白了useTransition之后，我们就会发现useDeferredValue的作用是一样的效果，可以让我们的更新延迟
 */

import React, { memo, useDeferredValue, useState } from "react"
import namesArray from "./namesArray"

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  const deferredShowNames = useDeferredValue(showNames)

  const filterNames = (e) => {
    const keyword = e.target.value
    const filterShowNames = namesArray.filter(item => item.includes(keyword))
    setShowNames(filterShowNames)
  }

  return (
    <div>
      <input type="text" onInput={filterNames} />
      <h2>用户列表：</h2>
      <ul>
        {
          deferredShowNames.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App