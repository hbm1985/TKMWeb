import React, { Component } from "react"

export default class HelloReact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello React"
    }
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h2>{message}</h2>
      </div>
    )
  }
}