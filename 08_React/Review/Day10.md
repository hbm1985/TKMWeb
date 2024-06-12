# 一、其他Hooks

## 1.1 Redux的Hooks

+ useSelector

+ useDispatch

+ 重要内容：

  + useSelector(state => ({}), shallowEqual)

  + useSelector(state => state.xxx.xxx)

## 1.2 useId

### 1.2.1 SSR

+ SPA缺点

  + 不利于SEO优化

  + 首屏渲染比较慢

+ SSR的优点

### 1.2.2 同构应用

+ 开发出来的程序代码，既可以在服务端运行，也可以在客户端运行

+ 客户端运行的过程中：hydration

+ 需要hydration，绑定事件，用户才可以交互

### 1.2.3 useId

+ 客户端/服务端运行，id保持一致性和唯一性

## 1.3 useTransition

+ 渲染优先级较低

+ [pending, startTransition]

## 1.4 useDerredValue

+ const copiedData = useDerredValue(原数据)

# 二、项目的搭建

## 2.1 项目的介绍和开发规范

## 2.2 搭建项目的过程

### 2.2.1 项目的创建-脚手架

### 2.2.2 项目的基本配置

+ icon图标

+ 标题

+ jsconfig.json

### 2.2.3 项目目录的结构

### 2.2.4 craco.config.js

+ 项目别名alias

+ less文件生效

### 2.2.5 CSS样式的重置

+ normalize.css（第三方）

+ reset.css（自己编写）

### 2.2.6 路由的配置router

### 2.2.7 状态的管理redux

+ RTK

  + createSlice

+ 普通方式

  + constant.js
  
  + reducer.js

  + actionCreators.js

  + index.js

### 2.2.8 网络请求axios封装

+ TKMRequest封装

+ 在home中测试