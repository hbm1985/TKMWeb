const { CHANGE_NAME, CHANGE_AGE, ADD_HEIGHT } = require("./constant")

//  初始化状态
const initialState = {
  name: "Bread",
  age: 24
}

//  定义reducer函数（reducer必须是纯函数）
//  参数一：store中目前保存的state（初始化时state为undefined，因此会给state参数一个默认值，作为初始化值）
//  参数二：本次需要更新的action（store.dispatch传入的action）
//  返回值：本次修改后的state，将作为store中的state（切记：不可对state修改，只能返回新的state）
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.data.name }
    case CHANGE_AGE:
      return { ...state, age: action.data.age }
    case ADD_HEIGHT:
      return { ...state, height: action.data.height }
    default:
      //  默认情况，为初始化，将初始化值返回
      return state
  }
}

//  一般一个文件只有一个reducer
module.exports = reducer