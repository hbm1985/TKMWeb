/*
  useState解析

  那么我们来研究一下核心的一段代码表示什么意思：
    useState来自react，需要从react中导入，它是一个hook
    参数：初始化值，如果不设置，则为undefined
    返回值：数组，包含两个元素
      元素一：当前状态的值（第一次为初始化值）
      元素二：设置状态值的函数

    点击button后，会完成两个事情：
      调用setCounter，设置一个新的值
      组件重新渲染，并且根据最新的state值返回DOM结构

  Hook就是JavaScript函数，这个函数可以帮助你钩入（hook into）React State以及生命周期等特性

  但是使用它们会有两个额外的规则：
    只能在函数最外层调用Hook，不要在循环、条件判断或者子函数中调用
    只能在React的函数组件中调用Hook，不要在其他JavaScript函数中调用

  Tips：
    Hook指的是类似于useState、useEffect这样的函数
    Hooks是对这类函数的统称
 */

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
