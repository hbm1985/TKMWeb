import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { thunk } from "redux-thunk"
import counterReducer from "./counter"
import homeReducer from "./home"
import userReducer from "./user"

//  开启redux-devtools
//  注意：仅在开发环境时开启，生产环境不要开启
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

//  合并多个reducer
//  将我们传入的reducers合并到一个对象中，最终返回一个combination的函数
//  在执行combination函数的过程中，它会通过判断前后返回的数据是否相同来决定返回之前的state还是新的state
//  新的state会触发订阅者发生对应的刷新，而旧的state可以有效的组织订阅者发生刷新
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer
})

//  通过中间件thunk，让redux支持异步action
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store