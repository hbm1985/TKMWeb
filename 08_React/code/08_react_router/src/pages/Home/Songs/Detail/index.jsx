import React, { PureComponent } from "react"
import WithRouter from "../../../../hoc/WithRouter"

class Detail extends PureComponent {
  render() {
    const { params } = this.props.router
    return (
      <div>
        <h2>Detail Page</h2>
        <h2>id：{params.id}</h2>
      </div>
    )
  }
}

export default WithRouter(Detail)