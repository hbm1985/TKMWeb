import React, { Component } from "react"
import PropTypes from "prop-types"
import "./style.css"

class NavBar extends Component {

  static propTypes = {
    //  限定children必须是数组，也就是说必须传入多个子元素
    children: PropTypes.array,
    //  限定children必须是React元素，也就是说只能传入一个子元素
    // children: PropTypes.element
  }

  render() {
    //  如果是多个子元素，则children是数组
    //  如果是单个子元素，则children是对象
    const { children } = this.props

    return (
      <div className="nav-bar">
        {/* 按传递的顺序取传入的子元素 */}
        <div className="left">
          {children[0]}
        </div>
        <div className="center">
          {children[1]}
        </div>
        <div className="right">
          {children[2]}
        </div>
      </div>
    )
  }
}

export default NavBar