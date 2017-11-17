import * as actionsTypes from '../constants/store.js'

const initialState = []

export default function store(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.STORE_UPDATE:
      return action.data
    case actionsTypes.STORE_ADD:
      state.unshift(action.data)
      return state
    case actionsTypes.STORE_RM:
    // filter 方法会返回一个数组，
      return state.filter(item => {
          if(item.id !== action.data.id){
            return item;
          }
      })
    default:
        return state;
  }
}