/*
  认识受控组件

  在React中，HTML表单的处理方式和普通的DOM元素不太一样：表单元素通常会保存一些内部的state

  比如一下HTML表单元素：
    这个处理方式是DOM默认处理HTML表单行为，在用户点击提交时会提交到某个服务器中，并且刷新界面
    在React中，并没有禁止这个原生DOM行为，它依然是有效的
    但是通常情况下会使用JavaScript函数来方便的处理表单提交，同事还可以访问用户填写的表单数据
    实现这种效果的标准方式是使用“受控组件”

    <form action="https://www.baidu.com">
      用户名：<input type="text" name="username" />
      密码：<input type="password" name="password" />
      <button>提交</button>
    </form>
 */

import React, { PureComponent } from "react"

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: "bread24",
      password: "114514"
    }
  }

  onUsernameChange(event) {
    console.log("onInputChange:", event.target.value)
    this.setState({ username: event.target.value })
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <h2>用户名：{username}</h2>
        <h2>密码：{password}</h2>
        {/* input、textarea等元素，绑定了value属性，就会变成受控组件 */}
        {/* 绑定了values属性，但没有绑定onChange，则会抛出警告 */}
        {/* You provided a `value` prop to a form field without an `onChange` handler.This will render a read - only field */}
        {/* 回顾一下Vue中的v-model：本质为v-bind与v-on */}
        <input type="text" value={username} onChange={e => this.onUsernameChange(e)} />
        <input type="password" value={password} onChange={e => this.onPasswordChange(e)} />

        {/* 未绑定value的input、textarea等元素，就是非受控组件 */}
        {/* <input type="text" /> */}
      </div>
    )
  }
}



