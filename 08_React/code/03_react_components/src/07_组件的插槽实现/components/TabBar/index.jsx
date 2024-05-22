import React, { Component } from "react"
import "./style.css"

export class TabBar extends Component {
  render() {
    const { items } = this.props
    console.log(items)
    return (
      <div className="tab-bar">
        {/* 最外层包裹一个div作为子元素的容器 */}
        {
          items.map(item => {
            return <div className="item">{item}</div>
          })
        }
      </div>
    )
  }
}

export default TabBar