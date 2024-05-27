import React, { Component } from "react"
import TabControl from "./TabControl"

class App extends Component {
  render() {
    return (
      <div>
        <TabControl titles={["首页", "新闻", "我的"]} />
        <TabControl titles={["首页", "新闻", "我的"]} itemType={(title) => <button>{title}</button>} />
        <TabControl titles={["首页", "新闻", "我的"]} itemType={(title) => <a>{title}</a>} />
      </div>
    )
  }
}

export default App