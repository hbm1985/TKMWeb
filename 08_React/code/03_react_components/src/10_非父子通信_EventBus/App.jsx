import React, { Component } from "react"
import eventBus from "./utils/eventBus"
import Home from "./components/Home"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      height: "",
      slogan: ""
    }
  }

  // onBannerPrev = (payload) => {
  //   console.log("onBannerPrev", payload)
  //   const { name, age } = payload
  //   this.setState({ name, age })
  // }

  // onBannerNext = (payload) => {
  //   console.log("onBannerNext", payload)
  //   const { height, slogan } = payload
  //   this.setState({ height, slogan })
  // }

  onBannerPrev(payload) {
    console.log("onBannerPrev", payload)
    const { name, age } = payload
    this.setState({ name, age })
  }

  onBannerNext(payload) {
    console.log("onBannerNext", payload)
    const { height, slogan } = payload
    this.setState({ height, slogan })
  }

  componentDidMount() {
    //  回调函数需要考虑this
    //  如果不传入this，则回调函数需要写出ES class field形式
    eventBus.on("bannerPrev", this.onBannerPrev, this)
    eventBus.on("bannerNext", this.onBannerNext, this)
  }

  componentWillUnmount() {
    eventBus.off("bannerPrev", this.onBannerPrev)
    eventBus.off("bannerNext", this.onBannerNext)
  }

  render() {
    const { name, age, height, slogan } = this.state

    return (
      <div>
        <h2>App</h2>
        <div>姓名：{name}</div>
        <div>年龄：{age}</div>
        <div>身高：{height}</div>
        <div>口号：{slogan}</div>
        <Home />
      </div>
    )
  }
}
