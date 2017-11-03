import React from 'react'

import '../../static/css/iconfont.css';
import './style.less';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    	value:''
    }
  }
  render() {
    // console.log(this.props.parmer)
    return (
      <input  type="text" 
              className="search-input"
              placeholder="请输入关键字"
      				value={this.state.value}
      				onChange={this.changeHandle.bind(this)}
      				onKeyUp={this.keyupHandle.bind(this)} />
    )
  }
  componentDidMount(){
    this.setState({
      value: this.props.value || ''
    })
  }
	changeHandle(e){
		this.setState({
			value: e.target.value
		})
	}
	keyupHandle(e){
		if(e.keyCode != 13 ){
			return
		}
    this.props.enterHandle(this.state.value);
	}
}

export default SearchInput;

/*
search 采用了约束性模式的话，展示搜索结果的页面的input框，值该如何设置 ？
encodeURIComponent 将URL中的特殊符号转义
 */