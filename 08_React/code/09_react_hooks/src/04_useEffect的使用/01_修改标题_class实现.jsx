import React, { PureComponent } from "react"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 100
    }
  }

  //  组件已挂载
  //  在生命周期钩子函数中编写的业务逻辑（比如修改网页标题），就是生命周期的副作用
  componentDidMount() {
    const { counter } = this.state
    document.title = counter
  }

  componentDidUpdate() {
    const { counter } = this.state
    document.title = counter
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>CounterClass：{counter}</h2>
        <button onClick={() => this.setState({ counter: counter + 1 })}>+1</button>
      </div>
    )
  }
}
