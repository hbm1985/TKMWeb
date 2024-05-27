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