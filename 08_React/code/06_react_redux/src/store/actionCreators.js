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