import React, { PureComponent } from "react"
import { connect } from "../../hoc/connect"
import { increment, decrement } from "../../store/features/counter"

class About extends PureComponent {

  increment(number) {
    const { increment } = this.props
    increment(number)
  }

  decrement(number) {
    const { decrement } = this.props
    decrement(number)
  }

  render() {
    console.log("About render")
    const { count } = this.props

    return (
      <div>
        <h2>About count: {count}</h2>
        <button onClick={() => this.increment(1)}>+1</button>
        <button onClick={() => this.decrement(-1)}> -1</button>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment(number) {
    dispatch(increment(number))
  },
  decrement(number) {
    dispatch(decrement(number))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)