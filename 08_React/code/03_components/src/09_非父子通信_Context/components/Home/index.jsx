import React, { Component } from "react"
import Banner from "./Banner"
import PrductList from "./ProductList"

class Home extends Component {

  render() {
    const { name, age } = this.props

    return (
      <div>
        <h2>Home</h2>
        <div>姓名：{name}</div>
        <div>年龄：{age}</div>
        <Banner />
        <PrductList />
      </div>
    )
  }
}

export default Home