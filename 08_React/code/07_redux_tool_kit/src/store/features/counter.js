import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100
  },
  reducers: {
    increment(prevState, action) {

    },
    decrement(prevState, action) {

    }
  }
})

//  真正需要对外暴露的（configureStore需要的），是slice的reducer
export default counterSlice.reducer