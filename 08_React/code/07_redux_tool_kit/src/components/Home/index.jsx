import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { increment } from "../../store/features/counter"

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
        <button onClick={() => this.increment(1)}>+1</button>
        <button onClick={() => this.increment(5)}>+5</button>
        <button onClick={() => this.increment(8)}>+8</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment(number) {
    dispatch(increment(number))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)