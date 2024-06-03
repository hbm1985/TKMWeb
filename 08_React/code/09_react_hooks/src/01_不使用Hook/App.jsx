import React, { PureComponent } from "react"

class HelloWorld extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World"
    }
  }

  changeMessage() {
    const { message } = this.state
    this.setState({
      message: message + "~"
    })
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h2>内容：{message}</h2>
        <button onClick={() => this.changeMessage()}>修改文本</button>
      </div>
    )
  }
}

//  函数组件存在的最大缺陷：
//  1.自身无state（想要有变化的数据，必须从props传递）
//  2.假定函数组件被重新渲染（执行），自身的数据会被重置
//  3.函数组件没有生命周期
function HelloReact(props) {
  console.log("HelloReact")

  let message = "Hello React"

  const changeMessage = () => {
    //  此处的修改，并不能引起函数组件的重新渲染
    //  即使函数组件重新渲染，message也会被重新初始化为Hello React
    message += "!"
  }

  return (
    <div>
      <h2>内容：{message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld />
        <hr />
        <HelloReact />
      </div>
    )
  }
}
