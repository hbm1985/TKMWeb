/*
  Fragment

  在之前的开发中，我们总是在一个组件中返回内容时包裹一个div元素

  我们如果希望可以不渲染这样一个div应该如何操作呢？
    使用Fragment
    Fragment允许你将子列表分组，而无需向DOM添加额外节点

  React还提供了Fragment的短语法：
    它看起来像空标签：<></>
    但是，如果我们需要在Fragment中添加key，那么就不能使用短语法
 */

import React, { PureComponent, Fragment } from "react"

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        { title: "哈哈哈", content: "我是内容，哈哈哈" },
        { title: "呵呵呵", content: "我是内容，呵呵呵" },
        { title: "嘿嘿嘿", content: "我是内容，嘿嘿嘿" },
        { title: "嘻嘻嘻", content: "我是内容，嘻嘻嘻" }
      ]
    }
  }

  render() {
    //  默认情况，如果不使用div将整个元素包裹，则会报错：JSX表达式必须有一个父元素
    //  也可以简写为：<></>，前提是Fragment没有使用key
    return (
      // <>
      //   <h2>App标题</h2>
      //   <p>App内容</p>
      // </>
      <Fragment>
        <h2>App标题</h2>
        <p>App内容</p>
        <div>
          {
            this.state.sections.map(section => {
              //  如果Fragment中使用了key，则不能写成：<></>
              return (
                <Fragment key={section.title}>
                  <div>标题：{section.title}</div>
                  <div>内容：{section.content}</div>
                </Fragment>
              )
            })
          }
        </div>
      </Fragment>
    )
  }
}
