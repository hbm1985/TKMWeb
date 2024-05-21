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
    // //  模拟网络请求
    // setTimeout(() => {
    //   const banners = [
    //     { id: "001", name: "新歌曲" },
    //     { id: "002", name: "新MV" },
    //     { id: "003", name: "新歌单" },
    //   ]

    //   const products = [
    //     { id: "001", name: "iPhone" },
    //     { id: "002", name: "iPad" },
    //     { id: "003", name: "Macbook" }
    //   ]

    //   this.setState({
    //     banners,
    //     products
    //   })
    // }, 500);

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
        <Banner banners={banners} />
        <ProductList products={products} />
      </div>
    )
  }
}