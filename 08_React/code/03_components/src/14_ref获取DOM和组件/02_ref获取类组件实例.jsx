import React, { PureComponent, createRef } from "react"

class HelloWorld extends PureComponent {

  test() {
    console.log("HelloWorld test")
  }

  render() {
    return (
      <div>
        <h2>Hello World</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.helloWorldRef = createRef()
  }

  getComponentInstance() {
    const helloWorld = this.helloWorldRef.current
    helloWorld.test()
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.helloWorldRef} />
        <button onClick={() => this.getComponentInstance()}>获取组件</button>
      </div>
    )
  }
}