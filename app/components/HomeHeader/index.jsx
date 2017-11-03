import React from 'react';
import { Link, hashHistory } from 'react-router';
import SearchInput from '../SearchInput'

import './style.less'

class HomeHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<header className="header">
				{/* 城市选择 */}
				<div className="header-left">
					<Link to="city">
						<p>{this.props.cityName}</p>
						<i className="iconfont icon-jiantouxia"></i>
					</Link>
				</div>
				{/* 搜索框 */}
				<div className="header-content">
					<div className="header-content-wrap">
						<i className="iconfont icon-fangdajing"></i>
						&nbsp;
						<SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
					</div>
				</div>
				{/* 个人中心 */}
				<div className="header-right">
					<i className="iconfont icon-shenfenzheng"></i>
				</div>
			</header>
		)
	}
	enterHandle(value){
		hashHistory.push('/search/all/' + encodeURIComponent(value))
	}
}

export default HomeHeader;
/*
1、木偶组件显示城市
2、右侧的个人中心
*/