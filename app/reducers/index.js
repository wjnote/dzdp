//redux 第一步，定义规则
import { combineReducers } from 'redux'
import userinfo from './userinfo'
import store from './store'

// 包装定义的规则，可以同时整合多个规则
const rootReducer = combineReducers({
	// userinfo  ES6 写法
  userinfo,
  store
})

export default rootReducer;