import React, { PureComponent } from "react"
import Home from "./components/Home"
import Profile from "./components/Profile"
import "./style.css"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App counter: 0</h2>
        <div className="container">
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}
