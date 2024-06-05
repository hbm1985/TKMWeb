import React, { memo, useContext } from "react"
import { ThemeContext, UserContext, CounterContext } from "./context"

const Home = memo(() => {

  //  通过useContext，使用Context
  //  返回值就是Context.Consumer的value
  //  当Context.provider的value发生变化时，会触发当前函数组件重新渲染
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  const counter = useContext(CounterContext)

  return (
    <div>
      <h2>Home</h2>
      <h2>姓名：{user.name}</h2>
      <h2>年龄：{user.age}</h2>
      <h2>颜色：{theme.color}</h2>
      <h2>尺寸：{theme.size}</h2>
      <h2>当前计数：{counter.counter}</h2>
    </div>
  )
})

export default Home