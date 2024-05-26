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

/*
  React更新机制

  我们在前面已经学习了React的渲染流程：
    JSX -> 虚拟DOM -> 真实DOM

  那么React的更新流程呢？
    props/state改变 -> render函数重新执行 -> 产生新的DOM树 -> 新旧DOM树进行diff -> 计算出差异进行更新 -> 更新到真实的DOM
 */

/*
  React的更新流程

  React在props或state发生改变时，会调用React的render方法，创建一棵不同的树

  React需要基于这两棵不同的树之间的差别来判断如何有效的更新UI：
    如果一棵树参考另一棵树进行完全比较更新，那么即使是最先进的算法，该算法的复杂程度为O(n^3)，其中n是树中元素的数量
    https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf
    如果在React中使用了该算法，那么展示1000个元素所需要执行的计算量将在十亿的量级范围
    这个开销太过样昂贵了，React的更新性能会变得非常低效

  于是，React对这个算法进行了优化，将其优化成了O(n)，如何优化的呢？
    同层节点之间相互比较，不会跨节点比较
    不同类型的节点，产生不同的树结构
    开发中，可以通过key来指定哪些节点在不同的渲染下保持稳定
 */

/*
  keys的优化

  我们在前面遍历列表时，总是会提示一个警告，让我们加入一个key属性：
    Warning: Each child in a list should have a unique "key" prop

  方式一：在最后插入数据
    这种情况，有无key意义并不大

  方式二：在前面插入数据
    这种做法，在没有key的情况下，所有的li都需要进行修改

  当子元素拥有key时，React使用key来匹配原有树上的子元素以及最新树上的子元素
    当下面这种场景，key为111和222的元素仅仅进行卫衣，不需要进行任何的修改
    将key为333的元素插入到最前面的位置即可

  key的注意事项：
    key应该是唯一的
    key不要使用随机数（随机数在下一次render的时候，会重新生成新的数字）
    使用index作为key，对性能是没有优化的（实际开发中，将数据的id作为key）
 */

import React from "react"
import ReactDOM from "react-dom/client"
// import AppClass from "./01_类组件和函数组件/App_Class"
// import AppFunction from "./01_类组件和函数组件/App_Function"
// import App from "./02_组件生命周期函数/App"
// import App from "./03_组件开发的嵌套关系/App"
// import App from "./04_组件通信_父传子/App"
// import App from "./05_组件通信_子传父/App"
// import App from "./06_组件通信案例练习/App"
// import App from "./07_组件的插槽实现/App"
// import App from "./08_组件作用域插槽/App"
// import App from "./09_非父子通信_Context/App"
// import App from "./10_非父子通信_EventBus/App"
// import App from "./11_setState详细使用/01_setState的三种用法"
// import App from "./11_setState详细使用/02_setState设计是异步"
// import App from "./11_setState详细使用/03_setState同步的时机"
// import App from "./12_render函数的优化/App"
// import App from "./13_数据不可变的力量/App"
// import App from "./14_ref获取DOM和组件/01_ref获取DOM"
// import App from "./14_ref获取DOM和组件/02_ref获取类组件实例"
// import App from "./14_ref获取DOM和组件/03_ref获取函数组件的DOM"
// import App from "./15_受控组件和非受控组件/01_受控组件的基本使用"
// import App from "./15_受控组件和非受控组件/02_自己提交form表单"
// import App from "./15_受控组件和非受控组件/03_多个受控组件同一个函数处理"
// import App from "./15_受控组件和非受控组件/04_checkbox的单选与多选"
// import App from "./15_受控组件和非受控组件/05_select的单选与多选"
// import App from "./15_受控组件和非受控组件/06_非受控组件演练"
// import App from "./16_React高阶组件/01_高阶组件的定义和作用"
// import App from "./16_React高阶组件/02_高阶组件应用_props增强"
// import App from "./16_React高阶组件/03_高阶组件应用_context数据共享"
// import App from "./16_React高阶组件/04_高阶组件应用_登录鉴权"
// import App from "./16_React高阶组件/05_高阶组件应用_拦截生命周期"
// import App from "./17_React的Portals/App"
import App from "./18_React的fragment/App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  //  React.StrictMode在开发模式下，会干扰生命周期，因此先注释掉
  <React.StrictMode>
    <App />
  </React.StrictMode>
)