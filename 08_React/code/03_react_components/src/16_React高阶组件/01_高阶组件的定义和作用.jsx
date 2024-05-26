/*
  认识高阶组件

  高阶函数的维基百科定义：至少满足以下条件之一：
    接收一个或多个函数作为输入
    输出一个函数

  JavaScript中比较常见的filter、map、reduce都是高阶函数

  那么什么是高阶组件呢？
    高阶组件的英文是Higher-Order Components，简称HOC
    官方的定义：高阶组件是参数为组件，返回值为新组件的函数（回顾之前学习的memo、forward）

  我们可以进行如下的解释：
    首先，高阶组件本身不是一个组件，而是一个函数
    其次，这个函数的参数是一个组件，返回值也是一个组件
 */

/*
  高阶组件的定义

  高阶组件并不是React API的一部分，它是基于React的组合特性而形成的设计模式

  高阶组件在一些React第三方库中非常常见：
    比如redux中的connect
    比如react-router中的withRouter
 */

/*
  高阶函数的意义

  我们会发现利用高阶组件可以针对某些React代码进行更优雅的处理

  其实早期的React有提供组件之间的一种复用方式是mixin，目前已经不再建议使用
    Mixin可能会相互依赖，相互耦合，不利于代码维护
    不同的Mixin中的方法可能会相互冲突
    Mixin非常多时，组件处理起来会比较麻烦，甚至还要为其做相关处理，这样会给代码造成混雪球式的复杂性

  当然，HOC也有自己的缺点：
    HOC需要再原组件上进行包裹或者嵌套，如果大量使用HOC，将会产生非常多的嵌套，这让调试变得非常困难
    HOC可以劫持props，在不遵守约定的情况下也可能造成冲突

  Hooks的出现，是开创性的，它解决了很多React之前存在的问题
    比如this指向问题，比如HOC的嵌套复杂度问题等等
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
