# Day01 作业布置

## 一、完成所有的代码

## 二、React开发的三个依赖包是什么？分别有什么作用？

+ react：react库的核心

+ react-dom：将虚拟DOM渲染成真实DOM，最终会渲染在浏览器上

+ babel：将jsx翻译成js，使浏览器可以识别

## 三、React如何封装组件，组件里面包含哪些内容？

+ 函数式组件

+ 类组件

+ 组件中包含：状态、操作状态的方法、渲染（组件结构）

```jsx
  //  以类组件为例
  class App extends React.Component {
    constructor(props) {
      super(props)
      //  状态
      this.state = { 
        count: 0
      }
    }

    //  操作状态的方法
    increment() {
      const { count } = this.state
      this.setState({ count: count + 1 })
    }

    decrement() {
      const { count } = this.state
      this.setState({ count: count - 1 })
    }

    //  渲染：组件的结构
    render() {
      const { count } = this.state
      return (
        <div>
          <h1>当前计数：{count}</h1>
          <button onClick={() => this.increment()}>+1</button>
          <button onClick={() => this.decrement()}>-1</button>
        </div>
      )
    }
  }

```

## 四、在进行函数绑定时，如何进行this关键字的绑定？

+ 绑定时，显式绑定this

```jsx
  render() {
    return (
      <button onClick={this.increment.bind(this)}>+1</button>
    )
  }
```

+ 初始化时，显式绑定this

```jsx
  constructor(props) {
    super(props)
    //  increment是在App的显式原型上，通过bind，将返回的函数放在组件实例上
    this.increment = this.increment.bind(this)
  }
```

+ 内联、箭头函数

```jsx
  render() {
    return (
      <button onClick={() => this.increment()}>+1</button>
    )
  }
```

+ 将方法定义在对象上

```jsx
  class App extends React.Component {
    increment = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
  }
```

## 五、React如何进行列表数据的展示？回顾数组的常见高阶函数

```jsx
  render() {
    const { movies } = this.state
    return (
      <ul>
        {
          movies.map(movie => {
            {/* 循环列表一定要设置key，否则直接报错 */}
            return <li key={movie.id}>{movie.name}</li>
          })
        }
      </ul>
    )
  }

```

+ 高阶函数：参数为函数，或返回值为函数

+ 数组常见高阶函数（注意区分返回值是否为数组）：

  + map

  + filter

  + reduce

  + find

  + findIndex

  + forEach