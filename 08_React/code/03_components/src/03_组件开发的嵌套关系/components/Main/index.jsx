import React, { Component } from "react"
import Banner from "./Banner"
import ProductList from "./ProduclList"

export default class Main extends Component {
  render() {
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    )
  }
}
