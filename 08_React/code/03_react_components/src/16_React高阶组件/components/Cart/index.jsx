import React, { PureComponent } from "react"
import WithLogin from "../../hoc/WithLogin"

class Cart extends PureComponent {
  render() {
    return (
      <div>
        <h2>Cart</h2>
      </div>
    )
  }
}

export default WithLogin(Cart)