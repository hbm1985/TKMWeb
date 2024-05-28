import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { createIncrementAction } from "../../store/counter/actionCreators"

class Home extends PureComponent {

  increment(number) {
    const { increment } = this.props
    increment(number)
  }

  render() {
    const { count, name, age } = this.props

    return (
      <div>
        <h2>Home counter: {count}</h2>
        <h2>姓名：{name}</h2>
        <h2>年龄：{age}</h2>
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
  count: state.counter.count,
  name: state.user.name,
  age: state.user.age
})

const mapDispatchToProps = dispatch => ({
  increment: number => {
    dispatch(createIncrementAction(number))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)