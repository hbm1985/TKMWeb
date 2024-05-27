import React, { PureComponent } from "react"
import Detail from "./components/Detail"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Detail />
      </div>
    )
  }
}
