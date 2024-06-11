import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeMessage } from '../../store/modules/counter'

//  回顾memo的所用：
//  与PureComponent类似
//  只有props发生改变，当前组件才重新渲染
const Hello = memo(() => {

  console.log("Hello redner")

  //  useSelector默认监听的是整个state
  //  只要state发生变化，整个组件将会重新渲染，这样的效率是不高的
  //  第二个参数：决定当前组件是否重新渲染
  //  参考PureComponent、memo，也是做的浅层比较，因此通常使用shallowEqual即可
  const { message } = useSelector(state => ({
    message: state.counter.message
  }), shallowEqual)

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Hello</h2>
      <h2>{message}</h2>
      {/* 每次都将message修改为同样的数据 */}
      {/* 理论上第二次修改之后，就不应该引起组件重新渲染了 */}
      <button onClick={() => dispatch(changeMessage("Hi"))}>修改信息</button>
    </div>
  )
})

export default Hello