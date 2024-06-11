import React, { memo } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../store/modules/counter"

const About = memo(() => {

  //  使用useSelector，将redux中store的数据映射到组件中
  //  Selector unknown returned a different result when called with the same parameters.
  //  This can lead to unnecessary rerenders.
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }))

  //  简单的写法
  // const count = useSelector(state => state.counter.count)

  //  使用dispatch直接派发action
  const dispatch = useDispatch()

  return (
    <div>
      <h2>About count: {count}</h2>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
    </div>
  )
})

export default About