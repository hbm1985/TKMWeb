const store = require("./store")

//  监听store中state的变化
const unsubscribe = store.subscribe(() => {
  console.log("store的数据发生变化----->")
  const { name, age, height } = store.getState()
  console.log("name:", name)
  console.log("age:", age)
  console.log("height:", height)
})

//  取消订阅
//  如果在React中，则在组件即将销毁（componentWillUnmount）时取消订阅
// unsubscribe()

//  修改数据
const nameAction = { type: "CHANGE_NAME", data: { name: "Kobe" } }
store.dispatch(nameAction)
const ageAction = { type: "CHANGE_AGE", data: { age: 30 } }
store.dispatch(ageAction)
const heightAction = { type: "ADD_HEIGHT", data: { height: 1.74 } }
store.dispatch(heightAction)