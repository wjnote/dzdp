import * as actionsTypes from '../constants/store.js'

export function update(data){
  return {
    type: actionsTypes.STORE_UPDATE,
    data
  }
}

export function add(item){
  return {
    type: actionsTypes.STORE_ADD,
    data: item
  }
}

export function rm(item){
  return {
    type: actionsTypes.STORE_RM,
    data: item
  }
}