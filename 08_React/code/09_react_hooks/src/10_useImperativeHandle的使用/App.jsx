/*
  useImpreativeHandle

  useImperativeHandle并不是特别好理解，我们一点点来学习

  我们先来回顾一下ref和forwardRef结合使用：
    通过forwardRef可以将ref转发到子组件
    子组件拿到父组件中创建的ref，绑定到自己的某一个元素/组件上

  forwardRef的做法本身没有什么问题，但是我们是将子组件的DOM直接暴露给了父组件：
    直接暴露给父组件带来的问题是某些情况的不可控
    父组件可以拿到DOM后进行任意的操作
    但是，事实上在上面的案例中，我们只是希望父组件可以操作部分功能（比如focus），其他并不希望它随意操作

  通过useImperativeHandle可以只暴露固定的操作：
    通过useImperativeHandle，将传入的ref和useImperativeHandle第二个参数返回的对象绑定到了一起
    所以在父组件中，使用inputRef时，实际上使用的是第二个参数返回的对象
 */

import React, { memo, useRef, forwardRef, useImperativeHandle } from "react"

const HelloWorld = memo(forwardRef((props, ref) => {
  const inputRef = useRef()

  //  子组件对父组件传入的ref进行处理
  //  第一个参数：ref对象
  //  第二个参数：回调函数，返回值为暴露给外部的可操作内容
  useImperativeHandle(ref, () => {
    return {
      //  对外只暴露以下方法，不暴露其他属性和方法
      focus() {
        console.log("focus")
        inputRef.current.focus()
      },
      setValue(value) {
        inputRef.current.value = value
      }
    }
  })

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}))

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  const showDOM = () => {
    const title = titleRef.current
    const input = inputRef.current
    console.log(title, input)
    // input.value = "哈哈哈"
    input.setValue("哈哈哈")
    input.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>哈哈哈</h2>
      <HelloWorld ref={inputRef} />
      <button onClick={() => showDOM()}>获取DOM</button>
    </div>
  )
})

export default App