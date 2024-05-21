import React, { Component } from "react"
import "./style.css"

export class TabControl extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  hanleTabItemClick(index) {
    const { currentIndex } = this.state
    if (currentIndex !== index) {
      //  通知子组件修改数据
      const { onTabSelect } = this.props
      onTabSelect(index)
      //  修改自身数据
      this.setState({ currentIndex: index })
    }
  }

  render() {
    const { currentIndex } = this.state
    //  单项数据流原则：子组件不可以直接修改父组件传递的props
    //  如果想修改，交给父组件修改
    const { titles } = this.props
    //  item的选中class
    const itemClassName = (index) => {
      return "item" + (currentIndex === index ? " active" : "")
    }

    return (
      <div className="tab-control">
        {
          titles.map((title, index) => {
            return (
              <div
                className={itemClassName(index)}
                key={title.id}
                onClick={() => this.hanleTabItemClick(index)}
              >
                <span className="title">{title.name}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TabControl