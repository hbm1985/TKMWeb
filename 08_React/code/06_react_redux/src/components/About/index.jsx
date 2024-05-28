import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { createIncrementAction, createDecrermentAction } from "../../store/actionCreators"

//  定义UI组件
class About extends PureComponent {
  constructor(props) {
    super(props)
  }

  calcNumber(number, isAdd) {
    if (isAdd) {
      const { increment } = this.props
      increment(number)
    } else {
      const { decrement } = this.props
      decrement(number)
    }
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h2>About counter: {count}</h2>
        <button onClick={() => this.calcNumber(1, true)}>+1</button>
        <button onClick={() => this.calcNumber(5, true)}>+5</button>
        <button onClick={() => this.calcNumber(8, true)}>+8</button>
        <button onClick={() => this.calcNumber(1, false)}>-1</button>
        <button onClick={() => this.calcNumber(5, false)}>-5</button>
        <button onClick={() => this.calcNumber(8, false)}>-8</button>
      </div>
    )
  }
}

//  将state映射到props
const mapStateToProps = (state) => ({
  count: state.count
})

//  将dispatch映射到props
const mapDispatchToProps = (dispatch) => ({
  increment: (number) => {
    dispatch(createIncrementAction(number))
  },
  decrement: (number) => {
    dispatch(createDecrermentAction(number))
  }
})

//  connect(mapStateToProps, mapDispatchToProps)调用的返回值是高阶组件
//  第一个参数：映射的state
//  第二个参数：映射的dispatch
export default connect(mapStateToProps, mapDispatchToProps)(About)