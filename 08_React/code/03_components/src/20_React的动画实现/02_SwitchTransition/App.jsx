/*
  SwitchTransition

  SwitchTransition可以完成两个组件之间切换的炫酷动画：
    比如我们有一个按钮需要在on和off之间切换，我们希望看到on先从左侧退出，off再从右侧进入
    这个动画在Vue中被称为vue transition modes
    react-transition-group中使用SwitchTransition来实现该动画

  SwitchTransition中主要有一个属性：mode
    in-out：表示新组件先进入，旧组件再移除
    out-in：表示旧组件先移除，新组件再进入

  如何使用SwitchTransision呢？
    SwitchTransition组件里面要包裹CSSTransition或Transition，不能直接包裹想要切换的组件
    SwitchTransition里面的CSSTransition或Transition不再像以前那样接收in属性来判断元素是何种状态，取而代之的是key属性

  https://reactcommunity.org/react-transition-group/switch-transition
 */

import React, { PureComponent, createRef } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import "./style.css"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.buttonRef = createRef()
    this.state = {
      login: true
    }
  }
  render() {
    const { login } = this.state
    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            nodeRef={this.buttonRef}
            key={login ? "exit" : "login"}
            classNames="login"
            timeout={1000}
          >
            <button ref={this.buttonRef} onClick={() => this.setState({ login: !login })}>
              {login ? "退出" : "登录"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
