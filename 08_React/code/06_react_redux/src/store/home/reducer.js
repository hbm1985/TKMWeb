import * as actionTypes from "./constants"

const initialState = {
  banners: [],
  recommends: []
}

export default function reducer(prevState = initialState, action) {
  switch (action.type) {
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