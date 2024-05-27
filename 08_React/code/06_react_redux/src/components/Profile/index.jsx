import React, { PureComponent } from "react"
import store from "../../store"
import { createDecrermentAction } from "../../store/actionCreators"

export default class Profile extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: store.getState().count
    }
  }

  decrement(number) {
    const action = createDecrermentAction(number)
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
        <h2>Profile counter: {count}</h2>
        <div>
          <button onClick={() => this.decrement(1)}>-1</button>
          <button onClick={() => this.decrement(5)}>-5</button>
          <button onClick={() => this.decrement(8)}>-8</button>
        </div>
      </div>
    )
  }
}
