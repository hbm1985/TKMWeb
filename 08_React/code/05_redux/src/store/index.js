/*
  理解JavaScript纯函数

  函数式编程中有一个非常重要的概念叫纯函数，JavaScript符合函数式编程的范式，所以也有纯函数的概念
    在React开发中，纯函数是被多次提及的
    比如React中组件就被要求像是一个纯函数（为什么是像，因为还有class组件），Redux中有一个Reducer的概念，也要求必须是纯函数
    所以掌握纯函数对于理解很多框架的设计是非常有帮助的

  纯函数的维基百科定义：
    在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数
    此函数在相同的输入值时，需产生相同的输出
    函数的输出和输入值以外的其他因信息或状态无关，也和由I/O设备产生的外部输出无关
    该函数不能有语义上可观察的函数副作用，诸如触发事件、使输出设备输出、或者更改输出值以外物件的内容等

  当然上面的定义会过于灰色，所以简单总结一下：
    确定的输入，一定会产生确定的输出
    函数在执行过程中，不能产生副作用
 */

/*
  纯函数的案例

  我们来看一个对数组操作的两个函数：
    slice：slice截取数组时不会对原数组进行任何操作，而是生成一个新的数组
    splice：splice截取数组，会返回一个新的数组，也会对原数组进行修改

  slice就是一个纯函数，不会修改数组本身，而splice不是一个纯函数
 */

/*
  纯函数的作用和优势

  威慑么纯函数在函数式编程中非常重要呢？
    因为你可以安心的编写和安心的使用
    你在写的时候保证了函数的纯度，只是单纯实现自己的业务逻辑即可，不需要关心传入的内容是如何获得的或者依赖其他的外部变量是否已经发生了修改
    你在用的时候，你确定你的输入内容不会被任意篡改，并且自己确定的输入，一定会有确定的输出

  React中就要求我们无论是函数组件还是类组件，这个组件都必须像纯函数一样，保护它们的props不被修改

  在接下来学习Redux中，Reducer也被要求是一个纯函数
 */

/*
  为什么需要Redux
  
  JavaScript开发的应用程序，已经变得越来越复杂了：
    JavaScript需要管理的状态越来越多，越来越复杂
    这些状态包括服务器返回的数据、缓存数据、用户操作产生的数据等等，也包括一些UI的状态，比如某些元素是否被选中，是否显示加载动效，当前分页

  管理不断变化的state是非常困难的：
    状态之间相互会存在依赖，一个状态的变化会引起另一个状态的变化，View页面也可能会引起状态的变化
    当应用程序复杂时，state在什么时候，因为什么原因而发生了变化，发生了怎样的变化，会变得非常难以控制和追踪

  React是在视图层帮助我们解决了DOM的渲染过程，但是State依然是留给我们自己来管理：
    无论是组件定义自己的state，还是组件之间的通信通过props进行传递，也包括通过Context进行数据之间的共享
    React主要负责帮助我们管理视图，state如何维护最终还是我们自己来决定

  Redux就是一个帮助我们管理State的容器：Redux是JavaScript的状态容器，提供了可预测的状态管理

  Redux除了和React一起使用以外，它也可以和其他界面库一起来使用（比如Vue、Angular），并且它非常小（包括依赖在内，只有2kb）
 */

/*
  Redux的核心理念-Store

  Redux的核心理念非常简单

  比如我们有一个朋友列表需要管理：
    如果我们没有定义统一的规范来操作这段数据，那么整个数据的变化就是无法跟踪的
    比如页面的某处通过friends.push的方式增加了一条数据
    比如另一个页面通过friends[0].age = 18修改了一条数据

    const initialState = {
      friends: [
        { name: "Jenny", age: 17 },
        { name: "Kate", age: 18 },
        { name: "Lily", age: 19 }
      ]
    }
 */

/*
  Redux的核心理念-action

  Redux要求我们通过action来更新数据：
    所有数据的变化，必须通过派发（dispatch）action来更新
    action是一个普通的JavaScript对象，用来描述这次更新的type和data

  比如下面就是几个更新friends的action：
    强制使用action的好处是可以清晰的知道数据到底发生了什么样的变化，所有的数据变化都是可跟踪的
    当然，目前我们的action是固定的对象
    真实应用中，我们会通过函数（action-creator）来定义，返回一个action

    const action1 = { type: "ADD_FRIEND", data: { name: "Marry", age: 17 } }
    const action2 = { type: "INC_AGE", data: 18 }
    const action3 = { type: "CHANGE_NAME", data: { index: 0, newName: "Ada" } }
 */

/*
  Redux的核心理念-reducer

  但是如何将state和action联系在一起呢？答案就是reducer
    reducer是一个纯函数
    reducer做的事情就是将传入的state和action结合起来，生成一个新的state，并返回
 */

const { createStore } = require("redux")

//  初始化状态
const initialState = {
  name: "Bread",
  age: 24
}

//  定义reducer函数（reducer必须是纯函数）
//  参数一：store中目前保存的state（初始化时state为undefined，因此会给state参数一个默认值，作为初始化值）
//  参数二：本次需要更新的action（store.dispatch传入的action）
//  返回值：本次修改后的state，将作为store中的state（切记：不可对state修改，只能返回新的state）
function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.data.name }
    case "CHANGE_AGE":
      return { ...state, age: action.data.age }
    case "ADD_HEIGHT":
      return { ...state, height: action.data.height }
    default:
      //  默认情况，为初始化，将初始化值返回
      return state
  }
}

//  创建store
//  需要将reducer传入
const store = createStore(reducer)

//  导出store
module.exports = store