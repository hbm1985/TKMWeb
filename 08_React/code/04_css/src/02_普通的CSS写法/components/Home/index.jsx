import React, { PureComponent } from "react"
import "./index.css"

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">Home title</h2>
        <p className="content">Home content</p>
        <div className="section">Home section</div>
      </div>
    )
  }
}
