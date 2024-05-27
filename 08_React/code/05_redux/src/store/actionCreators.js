const { CHANGE_NAME, CHANGE_AGE, ADD_HEIGHT } = require("./constant")

//  actionCreator：创建action
const changeNameAction = (name) => {
  return {
    type: CHANGE_NAME,
    data: { name }
  }
}

const changeAgeAction = (age) => {
  return {
    type: CHANGE_AGE,
    data: { age }
  }
}

const addHeightAction = (height) => {
  return {
    type: ADD_HEIGHT,
    data: { height }
  }
}

module.exports = {
  changeNameAction,
  changeAgeAction,
  addHeightAction
}