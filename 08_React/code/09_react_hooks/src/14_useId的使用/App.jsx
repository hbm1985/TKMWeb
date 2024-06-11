/*
  useId

  官方的解释：useId是一个用于生成横跨服务端和客户端的稳定的唯一ID的同事避免hydration不匹配的hook

  这里有个词叫hydration，想要理解这个词，我们需要理解一下服务端渲染（SSR）的概念

  什么是SSR？
    SSR（Server Side Rendering，服务端渲染），指的是网页在服务器端已经生成了完整的HTML结构，不需要浏览器解析
    对应的是CSR（Client Side Rending），我们开发的SPA页面通常依赖的就是客户端渲染

  早期的服务端渲染包括PHP、JSP、ASP等方式，但是在目前前后端分离的开发模式下，前端人员不太可能再去学习PHP、JSP等技术来开发网页

  不过五门可以借助Node来帮助我们执行JavaScript代码，提前完成页面的渲染

  SPA的缺点：
    1.首屏渲染慢
    2.不利于SEO优化

  不利于SEO优化：
    1.浏览器请求index.html
    2.react、vue等框架，通常都是在index.html中只有一个root的div容器
    3.页面的内容需要react、vue等框架的解析，成为原生HTML元素，再渲染

  首屏渲染慢
    1.早期的JSP等技术，都是在服务端，将页面内容渲染好，再交给浏览器
    2.SPA，需要自行加载script（比如bundle.js），执行script，才能完成页面的渲染
 */

/*
  SSR同构应用

  什么是同构？
    一套代码既可以在服务端运行，又可以在客户端运行，这就是同构应用

  同构是一种SSR的形态，是现代SSR的一种表现形式
    当用户发出请求时，先在服务器通过SSR渲染出首页的内容
    但是对应的代码同样可以在客户端被执行
    执行的目的包括事件绑定等其他页面切换时也可以在客户端被渲染
 */

/*
  Hydration

  什么是Hygration？这里我们引入vite-plugin-sse插件的官方解释
    https://vite-plugin-ssr.com/hydration

  在进行SSR时，我们的页面会呈现为HTML
    但仅HTML不足及使页面具有交互性，例如：浏览器JavaScript为零的页面不能是交互式的（没有JavaScript事件处理程序来响应用户操作，例如单击按钮）
    为了使我们的页面具有交互性，除了在Node.js中将页面呈现为HTML之外，我们的UI框架（Vue/React等）还在浏览器中加载和呈现页面（它创建页面的内容表示，然后将内部表示映射到我们在Node.js中呈现的HTML的DOM元素）
 */

/*
  useId的作用

  我们再来看一遍：useId是一个用于生成横跨服务端和客户端的稳定的唯一ID的同时避免hydration不匹配的hook

  所以我们得出以下结论：
    useId是用于react的同构应用开发的，前端的SPA页面并不需要使用它
    useId可以保证应用程序在客户端和服务端生成唯一的ID，这样可以有效避免通过一些手段生成的id不一致，造成hydration mismatch
 */

import React, { memo, useId, useState } from "react"

const App = memo(() => {

  const [count, setCount] = useState(0)

  //  useId可以保证组件重复渲染时，提供的id始终是唯一的
  const id = useId()
  console.log(id)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count => count + 1)}>+1</button>
      <label htmlFor={id}>
        用户名：<input type="text" />
      </label>
    </div>
  )
})

export default App