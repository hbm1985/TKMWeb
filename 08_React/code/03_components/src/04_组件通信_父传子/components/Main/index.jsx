import React, { Component } from "react"
import axios from "axios"
import Banner from "./Banner"
import ProductList from "./ProduclList"

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [],
      products: []
    }
  }

  componentDidMount() {
    //  网络请求
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const { data } = res.data
      const banners = data.banner.list
      const products = data.recommend.list
      this.setState({
        banners, products
      })
    })
  }

  render() {
    const { banners, products } = this.state
    return (
      <div>
        <Banner banners={banners} title="哈哈哈" />
        <Banner banners={banners} />
        <ProductList products={products} />
      </div>
    )
  }
}