import React, { Component } from "react"
import Banner from "./Banner"
import ProductList from "./ProduclList"

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [
        { id: "001", name: "新歌曲" },
        { id: "002", name: "新MV" },
        { id: "003", name: "新歌单" },
      ],
      products: [
        { id: "001", name: "iPhone" },
        { id: "002", name: "iPad" },
        { id: "003", name: "Macbook" }
      ]
    }
  }

  render() {
    const { banners, products } = this.state
    return (
      <div>
        <Banner banners={banners} />
        <ProductList products={products} />
      </div>
    )
  }
}