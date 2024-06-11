import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment(state, { payload }) {
      state.count += payload
    },
    decrement(state, { payload }) {
      state.count -= payload
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer