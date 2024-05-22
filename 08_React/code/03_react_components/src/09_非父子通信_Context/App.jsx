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

/*
  Context相关API

  React.createContext
    创建一个需要共享的Context对象
    如果一个组件订阅了Context，那么这个组件会从离自身最近的哪个匹配的Provider中读取到当前的context值
    defaultValue是组件在顶层查找过程中没有找到对应的Provider，那么就是用默认值

  Context.Provider
    每个Context对象都会返回一个Provider React组件，它允许消费组件订阅context的变化
    Provider接收一个value属性，传递给Consumer组件
    一个Provider可以和多个Consumer组件有对应关系
    多个Provider也可以嵌套使用，里层的会覆盖外层的数据
    当Provider的value值发生变化时，它内部的所有Consumer组件都会重新渲染

  Class.contextType
    挂载在class组件上的contextType属性会被重新赋值为一个由React.createContext创建的Context对象
    这能让你在class组件内部使用this.context来消费最近Context上的值
    你可以在人格生命周期中访问到它，包括render函数中

  Context.consumer
    React组件也可以订阅到context变更，这能让你在函数组件中完成订阅context
    这里需要Context.Consumer的回调函数作为子元素（function as child）这种做法
    这个函数接收当前的context值，返回一个React节点
 */

import React, { Component } from "react"
import ThemeContext from "./context/themeContext"
import UserContext from "./context/userContext"
import Home from "./components/Home"
import Profile from "./components/Profile"

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
    const { info } = this.state

    return (
      <div>
        <h2>App</h2>
        {/* 通过value，为后代组件提供数据 */}
        {/* 多个Context.Provider是可以嵌套的 */}
        <UserContext.Provider value={{ name: "Bread", age: 24 }}>
          <ThemeContext.Provider value={{ color: "dark", fontSize: "20px" }} >
            {/* Spread Attributes：属性展开 */}
            {/* 将info展开，所有的key-value作为props进行传递 */}
            {/* <Home name="Bread" age={24} /> */}
            <Home {...info} />
          </ThemeContext.Provider>
          <Profile />
        </UserContext.Provider>

      </div>
    )
  }
}

export default App