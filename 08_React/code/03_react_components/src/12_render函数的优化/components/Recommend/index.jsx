import React, { PureComponent } from "react"

export default class Recommend extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.counter !== this.props.counter) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    console.log("Recommend render")
    const { counter } = this.props

    return (
      <div>
        <h2>Recommend</h2>
        <div>{counter}</div>
      </div>
    )
  }
}
