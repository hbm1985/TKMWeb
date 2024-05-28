import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import reducer from "./reducer"

//  通过中间件thunk，让redux支持异步action
const store = createStore(reducer, applyMiddleware(thunk))

export default store