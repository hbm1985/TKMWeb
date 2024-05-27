import React, { Component } from "react"

class SubCounter extends Component {

  subCount(number) {
    const { onDecrement } = this.props
    onDecrement(number)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subCount(1)}>-1</button>
        <button onClick={() => this.subCount(5)}>-5</button>
        <button onClick={() => this.subCount(10)}>-10</button>
      </div>
    )
  }
}

export default SubCounter