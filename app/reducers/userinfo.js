import * as actionTypes from '../constants/userinfo'

//  设置默认的 redux 的值
const initialState = {}

// 第一步：定义一个计算规则
export default function userinfo(state = initialState, action) {
  switch (action.type) {

    // 修改城市
    case actionTypes.USERINFO_UPDATE:
      return action.data

    default:
      return state;
  }
}