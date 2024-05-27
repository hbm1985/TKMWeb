/*
  优化总结：
  1.将派发的action生成过程放在actionCreators中
  2.将定义的所有actionCreators的函数，放到一个独立的文件：actionCreators.js中
  3.actionCreators和reducer函数中使用的字符串（action的type）是一致的，所以将这些字符串抽取成常量，放在constant.js中
  4.将reducer和默认值（initialState）放在独立的reducer.js中
 */

const store = require("./store")
const { changeNameAction, changeAgeAction } = require("./store/actionCreators")

//  监听store中state的变化
store.subscribe(() => {
  console.log("store的数据发生变化----->")
  const { name, age } = store.getState()
  console.log("name:", name)
  console.log("age:", age)
})

//  修改数据
store.dispatch(changeNameAction("Kobe"))
store.dispatch(changeNameAction("Tode"))
store.dispatch(changeAgeAction(30))
store.dispatch(changeAgeAction(28))