import 'whatwg-fetch'
import 'es6-promise'
import { get } from './get';
import { post } from './post';

export function getData() {

  var result = get('/api/1');
  result.then(res => {
    return res.text()
  }).then(text => {
    console.log(text)
  })

  var result1 = get('/api/2');
  result1.then(res => {
    return res.text()
  }).then(text => {
    console.log(text)
  })
}
export function postData() {
  // url:地址  {}传入的对象

  var result = post('/api/post', {
    a:'100',
    b:'200'
  })
  result.then(res => {
    return res.json()
  }).then(json => {
    console.log(json);
  })
}