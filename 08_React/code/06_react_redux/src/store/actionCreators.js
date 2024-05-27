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