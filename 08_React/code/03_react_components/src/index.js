/*
  什么是组件化开发

  组件化开发是一种分而治之的思想：
    如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常复杂，而且不利于后续的管理以及扩展
    但如果，我们将一个页面拆分成一个个小的功能块，每个功能完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了

  我们需要通过组件化的思想来思考整个应用程序：
    我们将一个完成的页面分成很多个组件
    每个组件都用于实现页面的一个功能块
    而且每一个组件又可以进行细分
    而且组件本身又可以在多个地方进行复用
 */

/*
  React的组件化

  组件化是React的核心思想，也是我们后续课程的重点，前面我们封装的App本身就是一个组件：
    组件化提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用
    任何的应用都会被抽象成一颗组件树

  组件化思想的应用：
    有了组件化的思想，我们在之后的开发中就要充分的利用它
    尽可能的将页面拆分成一个个小的、可复用的组件
    这样让我们的代码更加方便组织和管理，并且扩展性也更强

  React的组件相对于Vue更加的灵活和多样，按照不同的方式可以分成很多类组件：
    根据组件的定义方式，可以分成：函数组件（Function Component）和类组件（Class Component）
    根据组件内部是否有状态需要维护，可以分成：无状态组件（Stateless Component）和有状态组件（Stateful Component）
    根据组件的不同职责，可以分成：展示型组件（Presentational Component）和容器型组件（Container Component）

  这些概念有很多重叠，但是它们最主要是关注数据逻辑和UI展示的分离：
    函数组件、无状态组件、展示型组件主要关注UI的展示
    类组件、有状态组件、容器行组件主要关注数据逻辑

  当然还有很多组件的其他状态：比如异步组件、高阶组件，后续再学习
 */

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
