import React, { Component } from "react"
import TabControl from "./components/TabControl"
import Content from "./components/Content"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titles: [
        { id: "001", name: "流行" },
        { id: "002", name: "新款" },
        { id: "003", name: "精选" },
      ],
      tabIndex: 0
    }
  }

  changeIndex(tabIndex) {
    this.setState({ tabIndex })
  }

  render() {
    const { titles, tabIndex } = this.state
    const currentTitle = titles[tabIndex].name

    return (
      <div>
        <TabControl titles={titles} onTabSelect={(payload) => this.changeIndex(payload)} />
        <Content title={currentTitle} />
      </div>
    )
  }
}

export default App