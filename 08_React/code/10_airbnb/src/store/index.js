//  仅为学习，实际项目中，使用统一的状态管理方案
//  要么用原始的redux，要么使用RTK

import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store