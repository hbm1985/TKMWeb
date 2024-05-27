import * as actionTypes from "./constants"

const initialState = {
  count: 0
}

export default function reducer(prevState = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_ACTION:
      return { ...prevState, count: prevState.count + action.data }
    case actionTypes.DECREMENT_ACTION:
      return { ...prevState, count: prevState.count - action.data }
    default:
      return prevState
  }
}