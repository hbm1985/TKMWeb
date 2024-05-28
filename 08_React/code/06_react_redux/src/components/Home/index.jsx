import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { createIncrementAction } from "../../store/actionCreators"

class Home extends PureComponent {

  increment(number) {
    const { increment } = this.props
    increment(number)
  }

  render() {
    const { count } = this.props

    return (
      <div>
        <h2>Home counter: {count}</h2>
        <div>
          <button onClick={() => this.increment(1)}>+1</button>
          <button onClick={() => this.increment(5)}>+5</button>
          <button onClick={() => this.increment(8)}>+8</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increment: number => {
    dispatch(createIncrementAction(number))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)