const { createStore } = require("redux")

//  初始化状态
const initialState = {
  name: "Bread",
  age: 24
}

//  定义reducer函数
//  reducer必须是纯函数
function reducer() {
  return initialState
}

//  创建store
//  需要将reducer传入
const store = createStore(reducer)

//  导出store
module.exports = store