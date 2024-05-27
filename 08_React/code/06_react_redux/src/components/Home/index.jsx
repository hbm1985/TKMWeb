import React, { PureComponent } from "react"
import store from "../../store"
import { createIncrementAction } from "../../store/actionCreators"

export default class Home extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      count: store.getState().count
    }
  }

  increment(number) {
    const action = createIncrementAction(number)
    store.dispatch(action)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState()
      this.setState({ count: state.count })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { count } = this.state

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
