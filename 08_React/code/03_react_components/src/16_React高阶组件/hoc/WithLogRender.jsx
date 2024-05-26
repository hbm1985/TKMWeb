import React, { PureComponent } from "react"

function WithLogRender(OriginComponent) {
  return class extends PureComponent {

    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime()
    }

    componentDidMount() {
      this.endTime = new Date().getTime()
      const offset = this.endTime - this.beginTime
      //  ES6中class的name属性：当前class名
      console.log(`当前组件${OriginComponent.name}渲染时间：${offset}ms`)
    }

    render() {
      return <OriginComponent {...this.props} />
    }
  }
}

export default WithLogRender