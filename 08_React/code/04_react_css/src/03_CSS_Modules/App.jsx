/*
  CSS Modules

  CSS Modules并不是React特有的解决方案，而是所有使用了类似于webpack配置的环境下都可以使用的
    如果在其他项目中使用它，那么我们需要自己来进行配置，比如配置webpack.config.js中的modules为true等

  React的脚手架已经内置了CSS Modules的配置：
    .css/.less/.scss等样式文件都需要修改成.module.css/.module.less/.module.scss
    之后就可以引用并且进行使用了

  CSS Modules确实解决了局部作用域的问题，也是很多人喜欢在React中使用的一种方案

  但是这种方案也有自己的缺陷：
    引用的类名，不能使用连接符，在JavaScript是不识别的（需要appStyle["app-section"]）
    所有的className都必须使用{style.className}的形式来编写
    不方便动态修改某些样式，依然需要使用内联样式的方式

  如果你觉得上面的缺陷还OK，那么你在开发中完全可以使用CSS Modules来编写CSS样式，并且CSS Modules也是在React中很受欢迎的一种方式
 */

import React, { PureComponent } from "react"
import appStyle from "./App.module.css"
import Home from "./components/Home"
import Profile from "./components/Profile"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我是标题</h2>
        <p className={appStyle.content}>我是内容，哈哈哈</p>
        <p className={appStyle["app-section"]}>我是内容，嘿嘿嘿</p>
        <Home />
        <Profile />
      </div>
    )
  }
}
