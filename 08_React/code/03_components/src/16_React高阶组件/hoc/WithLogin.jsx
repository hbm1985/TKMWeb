import React, { PureComponent } from "react"

export default function WithLogin(OriginComponent) {
  return props => {
    //  获取token
    const token = localStorage.getItem("token")
    if (!token) {
      return <Login />
    }

    return <OriginComponent {...props} />
  }
}

class Login extends PureComponent {
  render() {
    return (
      <h2>请先登录</h2>
    )
  }
}