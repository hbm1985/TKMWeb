# 一、React的CSS使用方案

## 1.1 方案一：内联样式

## 1.2 方案二：普通的CSS

## 1.3 方案三：CSS Modules

## 1.4 方案四：Less的配置

## 1.5 方案五：CSS in JS

+ styled-components

## 1.6 类库：classnames

# 二、React中Redux的使用

## 2.1 Redux的核心概念介绍

+ store

+ action

+ reducer

## 2.2 Redux项目使用过程

### 2.2.1 创建store的过程

+ 定义reducer函数

+ createStore(reducer)

### 2.2.2 dispatch派发action

### 2.2.3 subscribe监听store数据修改

### 2.2.4 代码的优化过程

+ action的创建，放在函数中

+ 抽取actionCreators.js文件中

+ 所有的字符串常量放在constant.js文件中

+ reducer函数和初始化值，放在reducer.js文件中

+ index.js文件用于创建和导出store

## 2.3 Redux在React的使用

+ 安装Redux

+ 创建Redux对应的store文件夹

  + 四个文件

+ 组件中使用

  + store.getState()初始化组件自身state

  + componentDidMount：store.subscribe监听store数据变化，修改自身state

  + componentWillUnmount：取消对store的监听

  + store.dispatch(action)：通过派发action，修改store中的数据