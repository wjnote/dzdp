import { get } from '../get';

export function orderListData(username){
  const result = get("/api/orderlist/" + username);
  return result;
}