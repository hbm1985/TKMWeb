import React, { Component } from "react"
import UserContext from "../../../context/userContext"
import ThemeContext from "../../../context/themeContext"

class Banner extends Component {

  //  设置contextType
  static contextType = ThemeContext

  render() {
    //  使用共享数据
    const { color, fontSize } = this.context

    return (
      <div>
        <h2>Banner</h2>
        <div>color: {color}</div>
        <div>fontSize: {fontSize}</div>
        {/* 什么时候使用Context.Consumer呢？ */}
        {/* 1.当使用value的组件是一个函数组件 */}
        {/* 2,当组件中需要使用多个Context */}
        <UserContext.Consumer>
          {
            value => {
              const { name, age } = value
              return (
                <div>
                  <div>姓名：{name}</div>
                  <div>年龄：{age}</div>
                </div>
              )
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

export default Banner