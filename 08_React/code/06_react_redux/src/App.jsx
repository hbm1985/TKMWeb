import React, { PureComponent } from "react"
import "./style.css"
import store from "./store"
import Home from "./components/Home"
import Profile from "./components/Profile"
import About from "./components/About"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: store.getState().count
    }
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
        <h2>App counter: {count}</h2>
        <div className="container">
          <Home />
          <Profile />
          <About />
        </div>
      </div>
    )
  }
}
