/*
  Portals的使用

  某些情况下，我们希望渲染的内容独立于父组件，甚至是独立于当前挂载的根DOM元素（默认都是挂载到id为root的div元素上）

  Protal提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀的阀杆：
    第一个参数（child）是任何可渲染的React子元素，例如一个元素，字符串或fragment
    第二个参数（container）是一个DOM元素

  通常来说，当你从组件的render方法返回一个元素时，该元素将被挂载到DOM节点中离其最近的父节点

  然而，有时候将子元素插入到DOM节点中的不同位置也是有好处的（Modal弹框）
 */

import React, { PureComponent } from "react"
import { createPortal } from "react-dom"
import Modal from "./Modal"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {
          createPortal(<h2>App H2</h2>, document.getElementById("bread"))
        }
        <Modal>
          <h2>哈哈哈</h2>
          <button>取消</button>
          <button>确定</button>
        </Modal>
      </div>
    )
  }
}
