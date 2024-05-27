import React, { Component } from "react"
import eventBus from "../../../utils/eventBus"

export default class Banner extends Component {

  prevClick() {
    eventBus.emit("bannerPrev", {
      name: "Bread",
      age: "24"
    })
  }

  nextClick() {
    eventBus.emit("bannerNext", {
      height: "1.74",
      slogan: "114514"
    })
  }

  render() {
    return (
      <div>
        <h2>Banner</h2>
        <button onClick={() => this.prevClick()}>上一个</button>
        <button onClick={() => this.nextClick()}>下一个</button>
      </div>
    )
  }
}
