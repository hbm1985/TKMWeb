/*
  内联样式

  内联样式是官方推荐的一种CSS样式的写法：
    style接受一个采用小驼峰命名属性的JavaScript对象，而不是CSS字符串
    并且可以引用state的状态来设置相关的样式

  内联样式的优点：
    1.内联样式，样式之间不会有冲突
    2.可以动态获取当前state中的state

  内联样式的缺点：
    1.写法上都需要使用驼峰标识
    2.某些样式没有提示
    3.大量的样式，代码混乱
    4.某些样式无法编写（比如伪类、伪元素）

  所以官方依然是希望内联样式和普通的CSS来结合编写
 */

import React, { PureComponent } from "react"

export default class App extends PureComponent {
  render() {
    const h2Style = {
      color: "red",
      fontSize: "30px",
      backgroundColor: "cyan"
    }

    const pStyle = {
      color: "orange",
      fontSize: "20px",
      fontWeight: "700",
      backgroundColor: "purple"
    }

    return (
      <div>
        <h2 style={h2Style}>我是标题</h2>
        <p style={pStyle}>哈哈</p>
      </div>
    )
  }
}
