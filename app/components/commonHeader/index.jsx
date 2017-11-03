import React from 'react'

import '../../static/css/iconfont.css';
import './style.less';

class CommonHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="header-component clearfix">
        <span className= "header-icon fl" onClick={this.bandleFn.bind(this)}>
          <i className="iconfont icon-huise common-back" ></i>
        </span>
	    	<h1>{this.props.title || ""}</h1>
	    </div>
    )
  }
  bandleFn(){
  	window.history.back();
  }
}

export default CommonHeader;