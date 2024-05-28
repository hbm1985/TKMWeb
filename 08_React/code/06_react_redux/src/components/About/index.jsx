import React, { PureComponent } from "react"
import { connect } from "react-redux"

//  定义UI组件
class About extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h2>About counter: {count}</h2>
      </div>
    )
  }
}

//  将state映射到props
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

//  connect()调用的返回值是高阶组件
export default connect(mapStateToProps)(About)