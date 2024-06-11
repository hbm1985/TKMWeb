/*
  redux hooks

  在之前的redux开发中，为了让组件和redux结合起来，我们使用了react-redux的connect：
    但是这种方式必须使用高阶函数返回的高阶组件
    并且必须编写：mapToProps和mapToDispatch映射的函数

  在Redux7.1开始，提供了Hook的方式，我们再也不需要编写connecy以及对应的映射函数了

  useSelector的所用是将state映射到组件中：
    参数一：将state映射到需要的数据中
    参数儿：可以进行比较来决定是否组件重新渲染

  useSelector默认会比较我们返回的两个对象是否相同
    如何比较呢？const refEquality = (a, b) => a === b
    也就是我们必须返回两个完全相等的对象才可以不引起重新渲染

  useDispatch非常简单，就是直接获取dispatch函数，之后在组件中直接使用即可
  
  我们还可以通过useStore来获取当前的store对象
 */

import React, { memo } from "react"
import { Provider } from "react-redux"
import store from "./store"
import Home from "./components/Home"
import About from "./components/About"

const App = memo(() => {

  return (
    <Provider store={store}>
      <div>
        <h2>App</h2>
        <Home />
        <About />
      </div>
    </Provider>
  )
})

export default App