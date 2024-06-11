import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    message: "Hello"
  },
  reducers: {
    increment(state, { payload }) {
      state.count += payload
    },
    decrement(state, { payload }) {
      state.count -= payload
    },
    changeMessage(state, { payload }) {
      state.message = payload
    }
  }
})

export const { increment, decrement, changeMessage } = counterSlice.actions

export default counterSlice.reducer