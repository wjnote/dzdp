import React from 'react'
import { hashHistory } from "react-router"

import '../../static/css/iconfont.css';
import './style.less';

class CommonHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="header-component">
        <span className= "header-icon fl" onClick={this.bandleFn.bind(this)}>
          <i className="iconfont icon-huise common-back" ></i>
        </span>
	    	<h1>{this.props.title || ""}</h1>
	    </div>
    )
  }
  bandleFn(){
    const backRouter = this.props.backRouter;

    if(backRouter){
      hashHistory.push(backRouter);
    }else{
      window.history.back();
    }
  }

}

export default CommonHeader;