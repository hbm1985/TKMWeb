/*
  useContext的使用

  在之前的开发中，我们要在组件中使用共享的Context有两种方式：
    类组件可以通过类名.contextType = MyContext方式，在类中获取context
    多个Context或者函数式组件中通过MyContext.Consumer方式共享context

  但是多个Context共享的方式会存在大量的嵌套：
    Context Hook允许我们通过Hook来直接获取某个Context的值

  注意事项：
    当组件上层最近的MyContext.Provider更新时，该Hook会触发重新渲染，并使用最新传递给MyContext provider的context value值
 */

import React, { memo, useState } from "react"
import { UserContext, ThemeContext, CounterContext } from "./context"
import Home from "./Home"

const App = memo(() => {

  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{ counter }}>
      <UserContext.Provider value={{ name: "Bread", age: 24 }}>
        <ThemeContext.Provider value={{ color: "red", size: "30px" }}>
          <div>
            <h2>App</h2>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <Home />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </CounterContext.Provider>
  )
})

export default App