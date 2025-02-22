import React, { PureComponent } from "react"
import { Navigate } from "react-router-dom"

export default class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  login() {
    this.setState({ isLogin: true })
  }

  render() {
    const { isLogin } = this.state
    return (
      <div>
        <h1>Login Page</h1>
        {!isLogin ? <button onClick={() => this.login()}> 登录</button > : <Navigate to="/home" />}
      </div>
    )
  }
}
