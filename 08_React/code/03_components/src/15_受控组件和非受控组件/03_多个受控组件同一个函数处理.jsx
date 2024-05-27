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

  handleValueChange(e) {
    //  根据e.target.name，确定哪个state发生变化
    const name = e.target.name
    this.setState({ [name]: e.target.value })
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
              onChange={e => this.handleValueChange(e)} /><br />
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
              onChange={e => this.handleValueChange(e)} /><br />
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}
