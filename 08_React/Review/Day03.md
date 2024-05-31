# 一、React组件化开发

## 1.1 组件化开发概念

+ 组件化开发分而治之的思想

+ React组件的划分：

  + 类组件、函数组件

  + 有状态组件、无状态组件

  + 展示型组件、容器组件

## 1.2 类组件和函数组件

+ 类组件：

  + 继承自React.Component

  + 类名首字母大写

  + 必须重写render函数

+ 函数组件：

  + 函数名首字母大写

  + 没有this

  + 返回值相当于类组件的render函数

## 1.3 组件的生命周期

+ 常用的生命周期函数

  + constructor

  + render

  + componentDidMount

  + componentDidUpdate

  + componentWillUnmount

+ 不常用的生命周期函数

+ 废弃（即将废弃）的生命周期函数

## 1.4 组件的嵌套关系

## 1.5 父子组件通信

### 1.5.1 父传子props

### 1.5.2 子传父props -> 函数

+ 子组件调用函数

### 1.5.3 类型验证propTypes/defaultProps

## 1.6 父子通信的案例练习

## 1.7 React插槽效果实现

### 1.7.1 children方案

### 1.7.2 props属性

### 1.7.3 作用域插槽（模拟Vue的作用域插槽）

+ 基于回调函数

## 1.8 Context的使用

### 1.8.1 spread attributes

```jsx
  render() {
    return <Home {...this.state} {...this.props} />
  }
```

## 1.8.2 Context基本使用

+ 创建context：React.createContext(defaultValue)

+ 提供数据：Context.provider value

+ 类组件：设置static contextType

+ 使用：this.context

## 1.8.3 Context额外补充

+ 函数式组件：Context.consumer

+ 多个Context共享数据

  + 多个Context.Provider可以嵌套

  + 类组件也可以使用Context.consumer

+ defaultValue

  + 使用了Context，但该组件不是Context.Provider的后代组件

  + 该组件使用的就是defaultValue