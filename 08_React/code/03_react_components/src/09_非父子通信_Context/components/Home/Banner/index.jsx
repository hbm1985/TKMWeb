import React, { Component } from "react"
import ThemeContext from "../../../context/themeContext"

class Banner extends Component {

  //  设置contextType
  static contextType = ThemeContext

  render() {
    //  使用共享数据
    //  this.context可能为undefined，因此避免这样结构
    // const { color, fontSize } = this.context

    const color = this.context && this.context.color
    const fontSize = this.context && this.context.fontSize

    return (
      <div>
        <h2>Banner</h2>
        <div>color: {color}</div>
        <div>fontSize: {fontSize}</div>
      </div>
    )
  }
}

export default Banner