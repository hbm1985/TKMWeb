/*
  react-transition-group介绍

  在开发中，我们想要给一个组件的显示和消失添加某种过渡动画，可以很好的增加用户体验

  当然，我们可以通过原生的CSS来实现这些过渡动画，但是React社区为我们提供了react-transition-group用来完成过渡动画

  React曾为开发者提供了动画插件react-addons-css-transition-group，后由社区维护，形成了现在的react-transition-group
    这个库可以帮助我们方便的视线组件的入场和离场动画，使用时需要进行额外的安装
    npm install react-transition-group
    yarn add react-transition-group

  react-transition-group本身非常小，不会为我们的应用程序增加过多负担
 */

/*
  react-transition-group主要组件

  react-transition-group主要包含四个组件：

  Transition
    该组件是一个和平台无关的组件（不一定要结合CSS）
    在前端开发中，我们一般是结合CSS来完成样式，所以比较常用的是CSSTransition

  CSSTransition
    在前端开发中，通常使用CSSTransition来完成过渡动画效果

  SwitchTransition
    两个组件显示和隐藏切换时，使用该组件

  TransitionGroup
    将多个元素包裹其中，一般用于列表中元素的动画
 */

/*
  CSSTransition

  CSSTransition是基于Transition组件构建的

  CSSTransition执行构成中，有三个状态：appear、enter、exit

  它们有三种状态，需要定义对应的CSS样式：
    第一类，开始状态：对应的类是-enter、-exit
    第二类，执行动画：对应的类是enter-active、-exit-active
    第三类，执行结束：对应的类是-enter-done、-exit-done
 */

import React, { PureComponent } from "react"
import { CSSTransition } from "react-transition-group"
import "./style.css"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showTitle: false
    }
  }

  render() {
    const { showTitle } = this.state
    return (
      <div>
        <button onClick={() => this.setState({ showTitle: !showTitle })}>切换显示/隐藏</button>
        {/* {showTitle && <h2>哈哈哈</h2>} */}
        <CSSTransition in={showTitle} classNames="bread" timeout={1000} unmountOnExit={true}>
          <div>
            <h2>哈哈哈</h2>
            <div>嘿嘿嘿</div>
          </div>
        </CSSTransition>
      </div>
    )
  }
}
