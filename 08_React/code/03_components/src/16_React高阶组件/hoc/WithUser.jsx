import React, { PureComponent } from "react"

//  定义数据
const userInfo = {
  name: "Bread",
  age: 24
}

//  定义高阶组件：注入props属性
export default function WithUserInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor(props) {
      super(props)
      this.state = { userInfo }
    }

    render() {
      //  1.将外部传递的props传递给子组件
      //  2.将自身需要传递的数据传递给子组件
      return <OriginComponent {...this.props} {...this.state.userInfo} />
    }
  }

  return NewComponent
}