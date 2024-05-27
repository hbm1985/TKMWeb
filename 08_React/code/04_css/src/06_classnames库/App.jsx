import React, { PureComponent } from "react"
import classNames from "classnames"

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isAAA: true,
      isBBB: false
    }
  }

  render() {
    const { isAAA, isBBB } = this.state
    const classList = []
    if (isAAA) { classList.push("aaa") }
    if (isBBB) { classList.push("bbb") }

    return (
      <div>
        {/* 原生JSX绑定class的方式，最终都要转为字符串 */}
        <h2 className="aaa bbb">哈哈哈</h2>
        <h2 className={[(isAAA ? "aaa" : ""), (isBBB ? "bbb" : "")].join(" ")}>嘿嘿嘿</h2>
        <h2 className={classList.join(" ")}>呵呵呵</h2>
        {/* 使用classNames，模拟Vue中绑定class的多种方式 */}
        <h2 className={classNames("aaa bbb")}>嘻嘻嘻</h2>
        <h2 className={classNames(["aaa", "bbb"])}>哦哦哦</h2>
        <h2 className={classNames({ aaa: isAAA, bbb: isBBB, ccc: true })}>吼吼吼</h2>
        <h2 className={classNames([{ aaa: isAAA }, { bbb: isBBB }, "ccc"])}>嗨嗨嗨</h2>
      </div>
    )
  }
}
