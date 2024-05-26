import React, { PureComponent } from "react"
import WithTheme from "../../hoc/WithTheme"

class Product extends PureComponent {
  render() {
    const { color, fontSize } = this.props
    return (
      <div>
        <h2>color: {color}</h2>
        <h2>fontSize: {fontSize}</h2>
      </div>
    )
  }
}

export default WithTheme(Product)