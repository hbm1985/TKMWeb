import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  //  可以理解为命名空间
  name: "counter",
  //  初始化state
  initialState: {
    count: 100
  },
  //  相当于原来Reducer中的case分支
  //  每一个case被设计为独立的方法
  //  第一个参数：原来的state
  //  第二个参数：action，一般只取payload即可，因为根据方法已经可以判断出是哪个case了
  reducers: {
    //  默认情况下，reducer被要求是一个纯函数，不允许直接修改state
    //  RTK为了简化我们对reducer的操作，允许reducer修改state
    //  RTK的这种优化，其内部的本质还是创建了一个新的state，并返回
    increment(state, { payload }) {
      // console.log("increment:", state, action)
      state.count += payload
    },
    decrement(state, { payload }) {
      state.count -= payload
    }
  }
})

//  导出actions，为容器组件服务
export const { increment, decrement } = counterSlice.actions

//  真正需要对外暴露的（configureStore需要的），是slice的reducer
export default counterSlice.reducer