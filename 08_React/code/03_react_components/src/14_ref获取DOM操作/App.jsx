/*
  如何使用ref

  在React的开发模式中，通常情况下不需要、也不建议直接操作原生DOM，但是某些特殊的情况，确实需要获取到DOM进行某些操作：
    管理焦点，文本选择或媒体播放
    触发强制动画
    集成第三方DOM库
    我们可以通过refs获取DOM

  函数式组件时没有实例（this）的，所以无法通过ref获取它们的实例：
    但是某些时候，我们可能想要获取函数式组件中的某个DOM元素
    这个时候我们可以通过React.forwardRef，后续也会学习hooks中如何使用ref
 */

import React, { PureComponent, createRef } from "react"

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.titleRef = createRef()
  }

  getNativeDOM() {
    //  1.在React元素上绑定一个字符串（不推荐）
    // const title = this.refs.title
    // console.log(title)

    //  2.通过React.createRef函数，提前创建ref对象，将创建的对象绑定到React元素上（推荐）
    // const titleRef = this.titleRef.current
    // console.log(titleRef)

    //  3.ref传入回调函数，将回调函数的参数传给需要的ref对象，当render执行时，回调函数会被执行（推荐）
    //  该回调函数会执行两次，无伤大雅
    const titleEl = this.titleEl
    console.log(titleEl)
  }

  render() {
    return (
      <div>
        <h2 ref="title">Hello World</h2>
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={el => this.titleEl = el}>Hello Ref</h2>
        <button onClick={() => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}
