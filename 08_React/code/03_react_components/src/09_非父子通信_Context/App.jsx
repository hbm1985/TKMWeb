/*
  Context应用场景

  非父子组件数据的共享：
    在开发中，比较常见的数据传递方式是通过props属性自上而下（由父到子）进行传递
    但是对于有一些场景：比如一些数据需要在多个组件中进行共享（地区偏好、UI主题、用户登录状态、用户信息等）
    如果我们在顶层的App中定义这些信息，之后一层层传递下去，那么对于一些中间层不需要数据的组件来说，是一种冗余操作

  但是，如果层级更多的话，一层层传递是非常麻烦的，并且代码是非常冗余的：
    React提供了一个API：Context
    Context提供了一种在组件之间共享此类值的方式，而不必显式的通过组件树的逐层传递props
    Context设计的目的是共享那些对于一个组件树而言是”全局“的数据，例如当前认证的用户、主题狐首选语言等
    后续学习Redux后，则不需要Context了
 */

import React, { Component } from "react"
import ThemeContext from "./context/themeContext"
import Home from "./components/Home"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {
        name: "Bread",
        age: 24
      }
    }
  }

  render() {
    //  2.准备好需要共享的数据
    //  这个数据也可以是state中的数据，那么就可以动态修改了
    const sharedData = {
      color: "dark",
      fontSize: "17px"
    }

    const { info } = this.state

    return (
      <div>
        <h2>App</h2>
        <Home name="Bread" age={24} />
        {/* Spread Attributes：属性展开 */}
        {/* 将info展开，所有的key-value作为props进行传递 */}
        <Home {...info} />

        {/* 通过value，为后代组件提供数据 */}
        <ThemeContext.Provider value={sharedData} >
          <Home {...info} />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App