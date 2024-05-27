import React, { PureComponent } from "react"
import homeStyle from "./index.module.css"

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>Home title</h2>
        <p className={homeStyle.content}>Home content</p>
        <div className={homeStyle.section}>Home section</div>
      </div>
    )
  }
}
