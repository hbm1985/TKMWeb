import React, { Component } from "react"

export default class HelloWorld extends Component {
  //  1.构造方法：constructor
  constructor(props) {
    console.log("HelloWorld constructor")
    super(props)

    this.state = { message: "Hello World" }
  }

  //  2.执行render函数
  render() {
    console.log("HelloWorld render")
    const { message } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <h2>Hello React</h2>
      </div>
    )
  }

  //  3.组件被渲染到DOM：被挂载到DOM
  //  至此，组件的内容被渲染到界面上
  componentDidMount() {
    console.log("HelloWorld componentDidMount")
  }
}
