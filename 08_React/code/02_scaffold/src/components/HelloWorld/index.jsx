import React, { Component } from "react"

export default class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World"
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
