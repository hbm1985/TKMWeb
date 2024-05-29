import { buildCreateSlice, asyncThunkCreator, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchHomeDataAction = createAsyncThunk("home/fetchHomeData", async () => {
  const res = await axios.get("http://123.207.32.32:8000/home/multidata")
  const data = res.data.data
  return data
})

//  自定义createSlice函数
//  可以在reducers中创建异步action
const createHomeSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator }
})

const homeSlice = createHomeSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  //  新版的RTK支持在reducers中创建异步action
  //  不过要自定义createSlice函数，否则会报错
  //  Cannot use `create.asyncThunk` in the built-in `createSlice`.
  //  create：用于createAsyncThunk
  reducers: (create) => ({
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    },
    getHomeData: create.asyncThunk(
      async () => {
        const res = await axios.get("http://123.207.32.32:8000/home/multidata")
        const data = res.data.data
        return data
      },
      {
        pending: (state, action) => {
          console.log("getHomeData.pending:", state, action)
        },
        fulfilled: (state, action) => {
          console.log("getHomeData.fulfilled:", state, action)
          state.banners = action.payload.banner.list
          state.recommends = action.payload.recommend.list
        },
        rejected: (state, action) => {
          console.log("getHomeData.rejected:", state, action)
        }
      }
    )
  }),
  //  The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback'
  //  https://redux-toolkit.js.org/api/createSlice
  // extraReducers: {
  //   [fetchHomeDataAction.pending](state, action) {
  //     console.log("fetchHomeDataAction.pending:", state, action)
  //   },
  //   [fetchHomeDataAction.fulfilled](state, action) {
  //     console.log("fetchHomeDataAction.fulfilled:", state, action)
  // state.banners = action.payload.banner.list
  // state.recommends = action.payload.recommend.list
  //   },
  //   [fetchHomeDataAction.rejected](state, action) {
  //     console.log("fetchHomeDataAction.rejected:", state, action)
  //   }
  // },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchHomeDataAction.pending, (state, action) => {
      //   console.log("fetchHomeDataAction.pending:", state, action)
      // })
      .addCase(fetchHomeDataAction.fulfilled, (state, action) => {
        console.log("fetchHomeDataAction.fulfilled:", state, action)
        state.banners = action.payload.banner.list
        state.recommends = action.payload.recommend.list
      })
    // .addCase(fetchHomeDataAction.rejected, (state, action) => {
    //   console.log("fetchHomeDataAction.rejected:", state, action)
    // })
  }
})

export const { changeBanners, changeRecommends, getHomeData } = homeSlice.actions

export default homeSlice.reducer