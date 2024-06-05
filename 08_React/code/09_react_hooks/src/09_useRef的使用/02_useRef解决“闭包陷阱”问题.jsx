import React, { memo, useEffect, useRef, useState } from "react"

let lastRef = undefined

const Countdown = memo(() => {

  const [count, setCount] = useState(0)

  const counterRef = useRef()
  counterRef.current = count

  //  使用useEffect模拟componentDidMount、componentWillUnmount
  useEffect(() => {
    let timerId = setInterval(() => {
      // setCount(count + 1)

      //  使用useRef，可以避免“闭包陷阱问题”
      setCount(counterRef.current + 1)
    }, 1000)

    return () => {
      clearInterval(timerId)
      timerId = undefined
    }
  }, [])

  return (
    <div>
      <h2>Countdown: {count}</h2>
    </div>
  )
})

const App = memo(() => {
  const [count, setCount] = useState(0)

  //  场景2：函数内部始终返回一个唯一的对象（其理念参考Vue中的Ref、Android中的LiveData）
  const nameRef = useRef()
  //  第二次渲染时，如果为true，则认为useRef每次返回的对象都是一样的
  //  基于这一点，可以解决使用了Hooks时“闭包的陷阱”的问题
  console.log(lastRef === nameRef)
  lastRef = nameRef

  return (
    <div>
      <Countdown />
      <h2>Hello World: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App