import * as actionTypes from "./constants"

export const createChangeNameAction = (name) => {
  return {
    type: actionTypes.CHANGE_NAME,
    data: name
  }
}

export const createIncrementAgeAction = (number) => {
  return {
    type: actionTypes.INCREMENT_AGE,
    data: number
  }
}