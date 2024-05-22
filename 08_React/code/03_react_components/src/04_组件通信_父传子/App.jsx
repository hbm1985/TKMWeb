/*
  认识组件间的通信

  在开发过程中，我们会经常遇到需要组件之间相互进行通信：
    比如App可能使用了多个Header，每个地方的Header展示的内容不同，那么我们就需要使用者传递给Header一些数据，让其进行展示
    又比如我们在Main中进行一次性请求了Banner数据和ProductList数据，那么就需要传递给他们来进行展示
    也可能是子组件中发生了事件，需要由父组件来完成某些操作，那就需要子组件向父组件传递事件

  总之，在一个React项目中，组件之间的通信是非常重要的环节

  父组件在展示子组件时，可能会传递一些数据给子组件：
    父组件通过“属性=值”的形式老传递给子组件数据
    子组件通过props参数获取父组件传递过来的数据
 */

/*
  参数propTypes

  对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：
    当然，如果项目中默认继承了Flow或者TypeScript，那么就直接可以进行类型验证
    但是，即使我们没有使用Flow或者TypeScript，也可以通过prop-types库来进行参数验证

  从React15.5开始，React.PropTypes已移入另一个包中：prop-types库

  更多的验证方式，可以参考官网：https://zh-hans.legacy.reactjs.org/docs/typechecking-with-proptypes.html
    比如验证数组，并且数组中包含哪些元素
    比如验证对象，并且对象中包含哪些key预计value是什么类型
    比如某个元素是必须的

  如果没有传递，我们希望有默认值呢？
    我们使用defaultProps就可以了
 */

import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        {/* 注意：如果此处写成header，则React会认为是HTML的元素 */}
        {/* React区分HTML元素与组件：首字母是否大写 */}
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
