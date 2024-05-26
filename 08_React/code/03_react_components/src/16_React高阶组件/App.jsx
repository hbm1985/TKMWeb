/*
  认识高阶组件

  高阶函数的维基百科定义：至少满足以下条件之一：
    接收一个或多个函数作为输入
    输出一个函数

  JavaScript中比较常见的filter、map、reduce都是高阶函数

  那么什么是高阶组件呢？
    高阶组件的英文是Higher-Order Components，简称HOC
    官方的定义：高阶组件是参数为组件，返回值为新组件的函数（回顾之前学习的memo）

  我们可以进行如下的解释：
    首先，高阶组件本身不是一个组件，而是一个函数
    其次，这个函数的参数是一个组件，返回值也是一个组件
 */

import React, { PureComponent } from "react"

//  定义一个高阶组件
function hoc(Cpn) {

  //  定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="Bread" age={24} />
    }
  }

  return NewCpn

  //  定义函数组件
  // function NewCpn2(props) {
  //   return <div>NewCpn2</div>
  // }

  // return NewCpn2
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>
  }
}

const HelloWorldHOC = hoc(HelloWorld)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC />
      </div>
    )
  }
}
