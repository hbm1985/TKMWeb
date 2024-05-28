import * as actionTypes from "./constants"

const initialState = {
  name: "Bread",
  age: 24
}

export default function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return { ...prevState, name: action.data }
    case actionTypes.INCREMENT_AGE:
      return { ...prevState, age: prevState.age + action.data }
    default:
      return prevState
  }
}