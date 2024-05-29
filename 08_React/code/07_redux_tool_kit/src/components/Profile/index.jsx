import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { decrement } from "../../store/features/counter"

class Profile extends PureComponent {

  decrement(number) {
    const { decrement } = this.props
    decrement(number)
  }

  render() {
    const { count } = this.props

    return (
      <div>
        <h2>Profile counter: {count}</h2>
        <button onClick={() => this.decrement(1)}>-1</button>
        <button onClick={() => this.decrement(5)}>-5</button>
        <button onClick={() => this.decrement(8)}>-8</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  decrement(number) {
    dispatch(decrement(number))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)