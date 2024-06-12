# 项目规范

## 项目规范：项目中有一些开发规范和代码风格
 
### 1.文件夹、文件名统一小写、多个单词使用连接符（-）链接

### 2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰

### 3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）

### 4.整个项目不再使用class组件，统一使用函数式自检，并且全面拥抱Hooks

### 5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹

### 6.组件的内部状态，使用useState、useReducer，业务数据全部放在redux中管理

### 7.函数组件内部基本按照如下顺序编写代码：

+ 组件内部state管理

+ redux的hooks代码

+ 其他hooks相关代码（比如自定义hooks）

+ 其他业务逻辑代码

+ 返回JSX代码

### 8.redux代码规范如下：

+ redux目前我们学习了两种模式，在项目实战中尽量两个都用起来，都需要掌握

+ 每个模块都有自己独立的reducer或者slice，之后合并在一起

+ redux中会存在共享的状态、从服务器获取到的数据状态

### 9.网络请求采用axios

+ 对axios进行二次封装

+ 所有的模块请求会放到一个请求文件中单独管理

### 10.项目使用AntDesign、MUI（Material UI）

+ 爱彼迎本身的设计风格更多偏向于Material UI，但是课程中也会尽量讲到AntDesign的使用方法

+ 项目中某些AntDesign、MUI中的组件会被拿过来使用

+ 但是多部分组件还是自己进行编写、封装、实现

# 创建React项目

## 创建项目的方式：create-react-app

## 项目配置：

+ 配置项目的icon

+ 配置项目的标题

+ 配置jsconfig.json

## 通过carco配置别名和less文件

# 项目目录结构划分

## 对项目进行目录结构的划分：

+ src

  + assets

  + base-ui

  + components

  + hooks

  + services

  + store

  + utils

  + views

+ App.js

+ index.js

+ carco.config.js

+ jsconfig.json

+ package-lock.json

+ package.json

# CSS样式的重置

## 对默认样式进行重置：

+ normalize.css（第三方）

+ reset.css（自己编写的）

# 全家桶-Router配置

# 全家桶-Redux状态管理

## Redux状态管理的选择：

+ 普通方式：目前项目中依然使用率非常高

+ @reduxjs/toolkit方式：推荐方式，未来的趋势

