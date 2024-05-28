/*
  react-redux使用

  开始之前需要强调一下，Redux和React没有直接的关系，你完全可以在React、Angular、vanilla JavaScript中使用Redux

  尽管这样说，Redux依然是和React库结合的更好，因为他们是通过state函数来描述界面的状态，Redux可以发射状态的更新，让他们做出回应

  虽然我们之前已经实现了connect、Provider这些帮助我们完成连接Redux、React的辅助工具，但是实际上redux官方帮助我们提供了react-redux的库

  安装react-redux：
    npm install react-redux
    yarn add react-redux
 */

import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)