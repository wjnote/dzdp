import React from 'react';
import './style.less'

class HomeHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="clearfix header">
				<div className="fl">深圳</div>
				<div className="fr">
					<i className="icon-shenfenzheng"></i>
				</div>
				<div><input type="text"/></div>
			</div>
		)
	}
}	

export default HomeHeader;