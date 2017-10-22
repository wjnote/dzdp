import React from 'react';
import { Link } from 'react-router';
import './style.less'

class HomeHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<header className="header">
				<div className="header-left">
					<Link to="city">
						<p>{this.props.cityName}</p>
						<i className="iconfont icon-jiantouxia"></i>
					</Link>
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
/*
1、木偶组件显示城市
2、右侧的个人中心
*/