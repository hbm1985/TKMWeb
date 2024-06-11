import React, { memo } from "react"
import { connect } from "react-redux"
import { increment, decrement } from "../../store/modules/counter"

const Home = memo((props) => {
 
  const { count, increment, decrement } = props

  return (
    <div>
      <h2>Home count: {count}</h2>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => decrement(1)}>-1</button>
    </div>
  )
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
