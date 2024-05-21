import React, { Component } from "react"

//  挂载流程：constructor -> render -> componentDidMount
//  更新流程：render -> componentDidUpdate
//  卸载流程：componentWillUnmount
export default class HelloWorld extends Component {
  //  1.构造方法：constructor
  constructor(props) {
    console.log("HelloWorld constructor")
    super(props)

    this.state = { message: "Hello World" }
  }

  changeText() {
    //  修改state
    this.setState({
      message: "24岁，是学生"
    })
  }

  update() {
    //  强制更新
    this.forceUpdate()
  }

  //  2.执行render函数
  render() {
    console.log("HelloWorld render")
    const { message } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <h2>{message}是第一行代码</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={e => this.update()}>强制更新</button>
      </div>
    )
  }

  //  3.组件被渲染到DOM：被挂载到DOM
  componentDidMount() {
    console.log("HelloWorld componentDidMount")
  }

  //  4.组件的DOM被更新完成：DOM发生更新
  componentDidUpdate() {
    console.log("HelloWorld componentDidUpdate")
  }

  //  5.组件从DOM中卸载：从DOM移除
  componentWillUnmount() {
    console.log("HelloWorld componentWillUnmount")
  }
}
