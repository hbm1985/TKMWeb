/*
  ref的转发

  在前面我们学习ref时讲过，ref不能应用于函数式组件
    因为函数式组件没有实例，所以不能获取到对应的组件对象

  但是，在开发中，我们可能想要获取函数式组件中某个元素的DOM，这个时候我们应该如何操作呢？
    通过forward高阶函数：将函数式组件包裹起来
 */

import React, { PureComponent, createRef, forwardRef } from "react"

const HelloWorld = forwardRef(
  function (props, ref) {
    return (
      <div>
        <h2 ref={ref}>Hello World</h2>
      </div>
    )
  })

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.titleRef = createRef()
  }

  getComponentInstance() {
    //  此处访问的是HelloWorld组件内部绑定的ref，即h2元素
    const title = this.titleRef.current
    console.log(title)
  }

  render() {
    return (
      <div>
        {/* 函数式组件没有实例 */}
        {/* 此处绑定的ref，将会由forward函数转发给函数式组件内部通过ref绑定的React元素 */}
        <HelloWorld ref={this.titleRef} />
        <button onClick={() => this.getComponentInstance()}>获取组件</button>
      </div>
    )
  }
}