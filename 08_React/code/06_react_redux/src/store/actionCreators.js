import axios from "axios"
import * as actionTypes from "./constants"

export const createIncrementAction = (number) => {
  return {
    type: actionTypes.INCREMENT_ACTION,
    data: number
  }
}

export const createDecrermentAction = (number) => {
  return {
    type: actionTypes.DECREMENT_ACTION,
    data: number
  }
}

export const createChangeBannersAction = (banners) => {
  return {
    type: actionTypes.CHANGE_BANNERS,
    data: banners
  }
}

export const createChangeRecommendsAction = (recommends) => {
  return {
    type: actionTypes.CHANGE_RECOMMENDS,
    data: recommends
  }
}

export const createClearHomeDataAction = () => {
  return {
    type: actionTypes.CLEAR_HOME_DATA
  }
}

//  默认情况下，store派发（dispatch）的都是同步action
//  如果想派发异步action，需要引入中间件
//  正常情况下：store.dispatch(plain object)
//  派发异步action：store.dispatch(function)
export const createFetchHomeDataAction = () => {
  //  异步action：返回值为函数
  //  该函数的参数为dispatch，方便我们再派发同步action
  return (dispatch, getState) => {
    console.log("createFetchHomeDataAction:", dispatch, getState)
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data
      const banners = data.banner.list
      const recommends = data.recommend.list

      dispatch(createChangeBannersAction(banners))
      dispatch(createChangeRecommendsAction(recommends))
    })
  }
}

