/*
  非受控组件

  React推荐大多数情况选使用受控组件来处理表单数据：
    一个受控组件中，表单数据时由React组件来管理的
    另一种替代方案是使用非受控组件，这时表单数据将交由DOM节点来处理

  如果要使用非受控组件中的数据，那么我们需要使用ref来从DOM节点中获取表单数据
 */

import React, { PureComponent, createRef } from "react"

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }

  handleSubmit() {
    const input = this.inputRef.current
    console.log(input.value)
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={() => this.handleSubmit()}>提交</button>
      </div >
    )
  }
}
