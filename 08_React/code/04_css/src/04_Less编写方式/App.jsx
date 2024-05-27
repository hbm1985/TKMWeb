import React, { PureComponent } from "react"
import appStyle from "./App.module.less"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <div className={appStyle.section}>
          <h2 className={appStyle.title}>我是标题</h2>
          <p className={appStyle.content}>我是内容</p>
        </div>
      </div>
    )
  }
}
