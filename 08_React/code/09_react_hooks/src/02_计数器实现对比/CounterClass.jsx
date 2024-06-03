import React, { PureComponent } from "react"

//  类组件实现计数器
export default class Counter1 extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment() {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  decrement() {
    const { counter } = this.state
    this.setState({ counter: counter - 1 })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>当前计数：{counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.decrement()}>-1</button>
      </div>
    )
  }
}
