import React from 'react';
import './style.less'

class HomeHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<header className="header">

				<div className="header-left">
					<p>{this.props.cityName}</p>
					<i className="iconfont icon-jiantouxia"></i>
				</div>
				
				<div className="header-content">
					<div className="header-content-wrap">
						<i className="iconfont icon-fangdajing"></i>&nbsp;
						<input placeholder="请输入关键字" type="text"/>
					</div>
				</div>

				<div className="header-right">
					<i className="iconfont icon-shenfenzheng"></i>
				</div>

			</header>
		)
	}
}

export default HomeHeader;