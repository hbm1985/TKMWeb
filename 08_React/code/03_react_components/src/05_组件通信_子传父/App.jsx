/*
  子组件传递父组件

  某些情况，我们也需要子组件向父组件传递消息：
    在Vue中时通过自定义事件来完成的
    在React中同样是通过props传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可
 */

import React, { Component } from "react"
import AddCounter from "./components/AddCounter"
import SubCounter from "./components/SubCounter"

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 100
    }
  }

  increment(number) {
    const { count } = this.state
    this.setState({ count: count + number })
  }

  decrement(number) {
    const { count } = this.state
    this.setState({ count: count - number })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h2>当前计数：{count}</h2>
        {/* 需要注意，传递函数时，也要考虑函数调用时的this指向 */}
        <AddCounter onIncrement={(payload) => this.increment(payload)} />
        <SubCounter onDecrement={(payload) => this.decrement(payload)} />
      </div>
    )
  }
}

export default App