import React, { PureComponent } from "react"
import WithRouter from "../../hoc/WithRouter"

class User extends PureComponent {
  render() {
    const { query } = this.props.router
    console.log(query)

    return (
      <div>
        <h2>User Page</h2>
        <h2>姓名：{query["name"]}</h2>
        <h2>年龄：{query["age"]}</h2>
      </div>
    )
  }
}

export default WithRouter(User)
