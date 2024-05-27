import React, { PureComponent } from "react"
import { HomeWrapper, TKMButtonWrapper } from "./style"

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="top">
          <div className="banner">Banner</div>
          <TKMButtonWrapper>按钮</TKMButtonWrapper>
        </div>
        <div className="bottom">
          <h2 className="title">商品列表</h2>
          <ul className="product-list">
            <li className="item">商品列表1</li>
            <li className="item">商品列表2</li>
            <li className="item">商品列表3</li>
          </ul>
        </div>
      </HomeWrapper>
    )
  }
}
