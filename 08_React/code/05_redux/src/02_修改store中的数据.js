//  获取store
const store = require("./store")

//  获取store中的数据
// const { name, age } = store.getState()
// console.log("name:", name)
// console.log("age:", age)

//  修改store的数据
//  切记：Redux中修改store的数据，必须通过action交给reducer处理
const nameAction = { type: "CHANGE_NAME", data: { name: "Kobe" } }
store.dispatch(nameAction)
const ageAction = { type: "CHANGE_AGE", data: { age: 30 } }
store.dispatch(ageAction)
const heightAction = { type: "ADD_HEIGHT", data: { height: 1.74 } }
store.dispatch(heightAction)

//  再次获取store的数据
const { name, age, height } = store.getState()
console.log("name:", name)
console.log("age:", age)
console.log("height:", height)