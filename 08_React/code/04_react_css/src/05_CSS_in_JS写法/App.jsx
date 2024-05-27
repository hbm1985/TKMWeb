/*
  认识CSS in JS

  官方文档也有提到过CSS in JS这种方案：
    CSS in JS指的是一种模式，其中CSS由JavaScript生成而不是在外部文件中定义
    注意：此功能并不是React的一部分，而是由第三方库提供
    React对样式如何定义并没有明确态度

  在传统的前端开发中，我们通常会将结构（HTML）、样式（CSS）、逻辑（JavaScript）进行分离
    但是在前面的学习中就提到过，React的思想中认为逻辑本身和UI是无法分离的，所以才会有了JSX的语法
    样式也是属于UI的一部分
    事实上CSS-in-JS的模式就是一种将样式（CSS）也写入到JavaScript中的方式，并且可以方便的使用JavaScript的状态
    所以React又被人称为All in JS
 */

/*
  认识styled-components

  批评声音虽然有，但是在我们看来很多优秀的CSS-in-JS的库依然非常强大、方便：
    CSS-in-JS通过JavaScript来为CSS赋予一些能力，包括类似于CSS预处理器一样的嵌套样式、函数定义、逻辑复用、动态修改状态等等
    虽然CSS预处理器也具备某些能力，但是获取动态状态依然是一个不好处理的店
    所以，目前可以说CSS-in-JS是React编写CSS最为受欢迎的一种解决方案

  目前比较流行的CSS-in-JS的库有哪些呢？
    styled-components
    emotion
    glamorous

  目前可以说styled-components一完事社区最流行的CSS-in-JS库，所以我们以styled-components的讲解为主

  安装styled-components：
    npm install styled-components 
 */

/*
  styled的基本使用

  styled-components的本质是通过函数的调用，最终创建出一个组件：
    这个组件会被自动添加上一个不重复的class
    styled-components会给该class添加相关的样式

  另外，它支持类似CSS预处理器一样的样式嵌套：
    支持直接子代选择器或后代选择器，并且直接编写样式
    可以通过&符号获取当前元素
    直接伪类选择器、伪元素等
 */

import React, { PureComponent } from "react"
import { AppWrapper, SectionWrawpper, FooterWrapper } from "./style"

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      // paddingLeft: 10,
      color: "orange",
      fontSize: 30,
      fontStyle: "italic"
    }
  }

  changeColor() {
    this.setState(state => {
      return {
        color: state.color === "orange" ? "pink" : "orange"
      }
    })
  }

  render() {
    return (
      <AppWrapper>
        <SectionWrawpper {...this.state}>
          <h2 className="title">我是标题</h2>
          <h2 className="content">我是内容，哈哈哈</h2>
          <button onClick={() => this.changeColor()}>修改颜色</button>
        </SectionWrawpper>
        <FooterWrapper>
          <p>免责声明</p>
          <p>版权声明</p>
        </FooterWrapper>
      </AppWrapper>
    )
  }
}
