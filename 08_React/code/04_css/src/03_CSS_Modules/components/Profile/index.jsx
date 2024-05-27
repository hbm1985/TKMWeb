import React, { PureComponent } from "react"
import profileStyle from "./index.module.css"

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className={profileStyle.content}>Profile content</div>
        <div className={profileStyle.section}>Profile section</div>
      </div>
    )
  }
}
