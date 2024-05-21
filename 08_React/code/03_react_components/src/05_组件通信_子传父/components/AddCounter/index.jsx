import React, { Component } from "react"

export class Counter extends Component {

  addCount(number) {
    //  父组件向子组件传递函数，父组件可以调用
    const { onIncrement } = this.props
    onIncrement(number)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(5)}>+5</button>
        <button onClick={() => this.addCount(10)}>+10</button>
      </div>
    )
  }
}

export default Counter