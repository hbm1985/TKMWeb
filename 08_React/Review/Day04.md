# 一、EventBus

+ hy-event-bus

+ 注意callback函数的this问题

# 二、setState的细节和原理

## 2.1 setState的其他用法

+ 2.1 setState(object)

+ 2.2 setState((state, props) => { return {} })

+ 2.3 setState(updater, callback)

## 2.2 setState是异步的（批量更新）

+ 本次更新会被添加到队列中

+ 两个优势：

  + 多个updater放在同一次更新中，只执行一次render，提高性能

  + 保证在state没有被更新的时候，自身的state与传给子组件的props保持一致

## 2.3 setState一定是异步的吗

+ React18之前：

  + 只有React管理的钩子函数（生命周期、绑定的事件等）是异步的

  + setTimeout/Promise/原生DOM事件等的回调是同步的

+ React18开始：

  + 均为批量处理

  + flushSync(() => {})

# 三、SCU的性能优化

## 3.1 默认Component组件

+ 没有实现shouldComponentUpdate，只要调用setState，render函数一定会执行

+ 自己重写shouldComponentUpdate，判断state与props是否发生变化

## 3.2 PureComponent/memo

+ PureComponent：用于类组件

+ memo：用于函数组件

## 3.3 PureComponent的源码

+ isPureReactComponent：区分React.Component还是React.PureComponent

+ shallowEqual：对state与props浅层比较

## 3.4 state的不可变力量

+ 修改state的引用类型数据

  + 先对数据进行浅拷贝，返回新数据

  + 修改拷贝数据之后，再setState设置新对象

# 四、ref获取DOM和组件

## 4.1 ref获取欧DOM

+ 三种方式

  + 字符串（不推荐）

  + 回调函数（会触发两次，无需关心）

  + React.createRef（推荐）

## 4.2 ref获取组件

+ 类组件的实例

+ 函数组件

  + 没有实例（this）

  + forwardRef，获取内部绑定的React元素

# 五、受控组件和非受控组件

## 5.1 区分受控组件与非受控组件

  + value={message}

  + onChange={e => this.changeMessage(e)}

  + Vue中双向绑定（v-bind、v-on）