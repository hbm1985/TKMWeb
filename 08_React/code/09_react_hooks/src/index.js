/*
  为什么需要Hook

  Hook是React16.8的新增特性，它可以让我们在不编写class的情况下，使用state以及其他的React特性（比如生命周期）

  我们先来思考一下类组件相对于函数组件有什么优势？比较常见的是下面的优势：
  
  类组件可以定义自己的state，用来保存组件自己内部的状态
    函数组件不可以，因为函数每次调用都会产生新的临时变量

  类组件有自己的生命周期，我们可以在对应的生命周期中完成自己的逻辑
    比如在componentDidMount中发送网络请求，并且该生命周期函数只会执行一次
    函数组件再学习hook之前，如果在函数中发送网络请求，意味着每次冲洗你渲染都会重新发送一次网络请求

  类组件可以在状态改变时只会重新执行render函数以及我们希望重新调用的生命周期函数componentDidUpdate等
    函数组件再重新渲染时，整个函数都会被执行，似乎没有什么地方可以只让它调用一次
 */

/*
  类组件存在的问题

  复杂组件变得难以理解：
    我们在最初编写一个类组件时，往往逻辑会比较简单，并不会非常复杂，但是随着业务的增多，我们的类组件会变得越来越复杂
    比如componentDidMount中，可能就会包含大量的逻辑代码，包括网络请求，一些事件监听（还需要在componentWillUnmount中移除）
    而对于这样的类实际上非常难以拆分：因为它们的逻辑往往混在一起，强行拆分反而会造成过渡设计，增加代码的复杂度

  难以理解的class：
    很多人发现学习ES6的class是学习React的一个障碍
    比如在class中，我们必须搞清楚this的指向问题，所以需要花很多的经历去学习this
    虽然前端开发人员必须掌握this，但是依然处理起来非常麻烦

  组件复用状态很难：
    在前面为了一些状态的复用，我们需要通过高阶组件
    向我们之前学习的redux中connect或者react-router中的WithRouter，这些高阶组件设计的目的就是状态的复用
    或者类似于Provider、Consumer来共享一些状态，但是多次使用Consumer时，我们的代码就会存在很多嵌套
    这些代码让我们不管是编写还是设计，都变得非常困难
 */

/*
  Hook的出现

  Hook的出现，可以解决上面提到的这些问题

  简单总结一下Hooks：
    它可以让我们在不编写class的情况下使用state以及其他的React特性
    但是我们可以由此延伸出非常多的用法，来让我们前面所提到的问题得到解决
  
  Hook的使用场景：
    Hook的出现基本可以代替我们之前所有使用类组件的地方
    但是如果一个旧的项目，你并不需要直接将所有的代码重构为Hooks，因为它完全向下兼容，你可以渐进式的来使用它
    Hook只能在函数组件中使用，不能在类组件，或者函数组件之外的地方使用

  在我们继续之前，请记住Hook是：
    完全可选的：你无需重写任何已有代码就可以在一些组件中尝试Hook，但是如果你不想，你不必现在就去学习或使用Hook
    100%向后兼容的：Hook不包含人格破坏性改动
    现在可用：Hook已发布于v16.8.0
 */

import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./01_不使用Hook/App"
// import App from "./02_计数器实现对比/App"
// import App from "./03_useState的使用/App"
// import App from "./04_useEffect的使用/01_修改标题_class实现"
// import App from "./04_useEffect的使用/02_修改标题_hook实现"
// import App from "./04_useEffect的使用/03_Effect清除机制_返回回调函数"
// import App from "./04_useEffect的使用/04_逻辑分离_多个Effect的使用"
// import App from "./04_useEffect的使用/05_执行时机_控制Effect回调执行"
// import App from "./05_useContext的使用/App"
// import App from "./06_useReducer的使用/App"
// import App from "./07_useCallback的使用/App"
// import App from "./08_useMemo的使用/App"
// import App from "./09_useRef的使用/01_useRef绑定DOM"
// import App from "./09_useRef的使用/02_useRef解决“闭包陷阱”问题"
// import App from "./10_useImperativeHandle的使用/App"
// import App from "./11_useLayoutEffect的使用/01_useLayoutEffect和useEffect的执行时机"
// import App from "./11_useLayoutEffect的使用/02_修正数字_useEffect实现"
import App from "./11_useLayoutEffect的使用/03_修正数字_useLayoutEffect实现"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
