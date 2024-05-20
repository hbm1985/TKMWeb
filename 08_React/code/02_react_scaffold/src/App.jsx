import React, { Component } from "react"
import HelloWorld from "./components/HelloWorld"
import HelloReact from "./components/HelloReact"

export default class App extends Component {

  render() {
    return (
      <div>
        <HelloWorld />
        <HelloReact />
      </div>
    )
  }
}