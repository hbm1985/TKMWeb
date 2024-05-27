/*
  受控组件基本演练

  在HTML中，表单元素（如<input>、<textarea>、<select>）通常自己维护state（event.target.value），并根据用户输入进行更新

  而在React中，可变状态（mutable state）通常保存在组件的state属性中，并且只能通过使用setState()来更新
    我们将两者结合起来，使React的state成为“唯一数据源”
    渲染表单的React组件还控制着用户输入过程中表单发生的操作
    被React以这种方式控制取值的表单元素就叫做“受控组件”

  由于在表单元素上设置了value属性，因此显示的值将始终为this.state.value，这使得React的state成为唯一数据源

  由于handleUsernameChange在每次按键时都会执行并更新React的state，因此显示的值将随着用户的输入而更新
 */

import React, { PureComponent } from "react"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit(e) {
    //  阻止默认事件
    //  form的默认提交会刷新界面，因此通常都是我们自己提交数据
    e.preventDefault()
    //  获取数据
    const { username, password } = this.state
    //  模拟提交
    console.log("username:", username)
    console.log("password:", password)
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <form action="/abc" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            {/* 用户名 */}
            用户名：
            <input
              id="username"
              type="text"
              name="username"
              autoComplete="off"
              value={username}
              onChange={e => this.handleUsernameChange(e)} /><br />
          </label>
          <label htmlFor="password">
            {/* 密码 */}
            密码：
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={e => this.handlePasswordChange(e)} /><br />
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}
