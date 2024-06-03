/*
  认识useState

  State Hook的API就是useState，我们在前面已经进行了血虚：
    useState会帮助我们定义一个state变量，useState是一种新方法，它与class里面的this.state提供的功能完全相同
      一般来说，在函数退出后，变量就会“消失”（回收），而state中的变量会被React保留
    useState接收唯一一个参数，在第一粗组件被调用时，用来作为初始化值（如果没有传递参数，那么初始化值为undefined）
    useState的返回值是一个数组，我们可以通过数组的结构，来完成赋值，会非常方便
      https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  FAQ：为什么叫useSTate而不叫createState？
    “create”可能不是很准确，因为state只是在组件首次渲染的时候被创建
    在下一次重新渲染时，useState返回给我们当前的state
    如果每次都创建新的变量，它就不是“state”了
    这也是Hook的名字总是以use开头的一个原因

  当然，我们也可以在一个组件中定义多个变量和复杂变量（数组、对象）
 */

import { memo, useState } from "react"

function App(props) {
  //  useState函数的参数：初始值，如果不传则为undefined
  //  useState创建的state，在函数组件重新渲染时，不会被重置为初始值
  const [message, setMessage] = useState("Hello World")
  const [count, setCount] = useState(0)
  const [banners, setBanners] = useState([])

  return (
    <div>
      <h2>App：{message}</h2>
      <button onClick={() => setMessage(message + "@")}>修改文本</button>
    </div>
  )
}

export default memo(App)