import * as actionTypes from "./constants"

const initialState = {
  count: 0,
  banners: [],
  recommends: []
}

export default function reducer(prevState = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_ACTION:
      return { ...prevState, count: prevState.count + action.data }
    case actionTypes.DECREMENT_ACTION:
      return { ...prevState, count: prevState.count - action.data }
    case actionTypes.CHANGE_BANNERS:
      return { ...prevState, banners: action.data }
    case actionTypes.CHANGE_RECOMMENDS:
      return { ...prevState, recommends: action.data }
    case actionTypes.CLEAR_HOME_DATA:
      return { ...prevState, banners: [], recommends: [] }
    default:
      return prevState
  }
}