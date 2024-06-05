/*
  自定义Hook

  自定义Hook本质上只是一种函数代码逻辑的抽取，严格意义上来说，它本身并不算React的特性

  需求：所有的组件在创建和销毁时都进行打印
    组件被创建：打印组件被创建了
    组件被销毁：打印组件被销毁了
 */

import React, { memo, useEffect, useState } from "react"

//  封装自定义Hook
//  如果不用自定义Hook，也可以自行封装高阶组件
function useLogLifeCycle(cName) {
  useEffect(() => {
    console.log(`${cName}组件被创建`)
    return () => {
      console.log(`${cName}组件被销毁`)
    }
  }, [])
}

const Home = memo(props => {

  useLogLifeCycle("Home")

  return (
    <h1>Home Page</h1>
  )
})

const About = memo(props => {

  useLogLifeCycle("About")

  return (
    <h1>Home Page</h1>
  )
})

const App = memo(() => {

  //  子组件先被创建，父组件再被创建
  useLogLifeCycle("App")

  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setShow(!show)}>切换显示/隐藏</button>
      {show && <Home />}
      {show && <About />}
    </div>
  )
})

export default App