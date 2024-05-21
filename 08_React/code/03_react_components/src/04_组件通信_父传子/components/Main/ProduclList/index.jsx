import React, { Component } from "react"

export default class ProductList extends Component {
  render() {
    const { products } = this.props

    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {
            products.map(product => {
              return <li key={product.acm}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} width="200" />
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}
