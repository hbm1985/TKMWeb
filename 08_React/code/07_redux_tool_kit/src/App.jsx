import React, { PureComponent } from "react"
import { connect } from "react-redux"
import Home from "./components/Home"
import Profile from "./components/Profile"
import About from "./components/About"
import "./style.css"

class App extends PureComponent {

  render() {
    const { count } = this.props

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

const mapStateToProps = state => ({
  count: state.counter.count
})

export default connect(mapStateToProps)(App)