import React, { PureComponent } from "react"
import Cart from "./components/Cart"
import UserInfo from "./components/UserInfo"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
  }

  login() {
    localStorage.setItem("token", "114514")
    this.forceUpdate()
  }

  logout() {
    localStorage.removeItem("token")
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <button onClick={() => this.login()}>登录</button>
        <button onClick={() => this.logout()}>登出</button>
        <Cart />
        <UserInfo />
      </div>
    )
  }
}
