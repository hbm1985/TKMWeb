import React, { PureComponent } from 'react'
import WithLogin from '../../hoc/WithLogin'

class UserInfo extends PureComponent {
  render() {
    const token = localStorage.getItem("token")
    return (
      <div>
        <h2>UserInfo</h2>
        <h2>token: {token}</h2>
      </div>
    )
  }
}

export default WithLogin(UserInfo)