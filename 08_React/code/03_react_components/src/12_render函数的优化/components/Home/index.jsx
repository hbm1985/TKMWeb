import React, { Component } from "react"

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }

  //  子组件，不仅要比对state，也要比对props
  //  针对shouldComponentUpdate的优化，也称为SCU优化
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.message !== this.props.message || nextState.friends !== this.state.friends) {
      return true
    }
    return false
  }

  render() {
    console.log("Home render")
    const { message } = this.props

    return (
      <div>
        <h2>Home</h2>
        <div>{message}</div>
      </div>
    )
  }
}
