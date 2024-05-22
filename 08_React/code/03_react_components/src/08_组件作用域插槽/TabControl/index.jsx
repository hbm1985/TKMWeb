import React, { Component } from "react"
import "./style.css"

export class TabControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    console.log("itemClick:", index)
    const { currentIndex } = this.state
    if (index !== currentIndex) {
      this.setState({ currentIndex: index })
    }
  }

  render() {
    const { titles, itemType } = this.props
    const { currentIndex } = this.state
    const itemClassName = index => "item" + (index === currentIndex ? " active" : "")

    let tabItems = null
    if (itemType) {
      tabItems = titles.map((title, index) => {
        return (
          <div className={itemClassName(index)} onClick={() => this.itemClick(index)}>
            {itemType(title)}
          </div>
        )
      })
    } else {
      tabItems = titles.map((title, index) => {
        return (
          <div className={itemClassName(index)} onClick={() => this.itemClick(index)}>
            <span className="title">{title}</span>
          </div>
        )
      })
    }

    return (
      <div className="tab-control">
        {tabItems}
      </div>
    )
  }
}

export default TabControl