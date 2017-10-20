import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends React.Component{
	  constructor(props) {
	    super(props);
  }
	render(){
		return (
			<div>
				<HomeHeader cityName={this.props.userinfo.cityName}/>
				<Category/>
				<Ad/>
				<List cityName={this.props.userinfo.cityName}/>
			</div>
		)
	}
}

/*            redux 绑定 react 中              */

// 将redux的值注入到 props 中，可以直接使用
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
// 将 redux 的方法注入到 props 中，
function mapDispatchToProps(dispatch){
  return{}
}
//  将redux的方法注入到定义的类里面去
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


/*
* 首页中的数据获取和展示是分开的，先获取数据，然后展示数据的功能交给木偶组件去展示
*/
