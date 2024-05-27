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
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("HelloWorld componentDidUpdate:", prevProps, prevState, snapshot)
  }

  //  5.组件从DOM中卸载：从DOM移除
  componentWillUnmount() {
    console.log("HelloWorld componentWillUnmount")
  }

  //  不常用的生命周期方法：组件是否需要更新
  //  返回值：true则继续执行render，false则不执行render
  //  PureComponent在此方法中做了浅层比较
  shouldComponentUpdate(props, state) {
    console.log("HelloWorld shouldComponentUpdate:", props, state)
    //  state的新旧message相同，则不需要更新了
    if (state.message === this.state.message) {
      return false
    }
    return true
  }

  //  更新DOM之前的回调
  //  返回值会在componentDidUpdate的第三个参数接受
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("HelloWorld getSnapshotBeforeUpdate:", prevProps, prevState)
    return {
      scrollTop: 1000
    }
  }
}
