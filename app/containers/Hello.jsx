import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Hello extends React.Component {
	render(){
		return (
			<div>
				<A userinfo = {this.props.userinfo}/>
				<B userinfo = {this.props.userinfo}/>
				<C actions = {this.props.userinfoActions}/>
			</div>
		)
	}
	componentDidMount(){
		this.props.userinfoActions.login({
			userid: 'abx',
			city: 'chengdu'
		})
	}
}

// 下面是在组件中使用redux 的方式   获取state 和派发 dispatch  已经包装类
function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}
function mapDispatchToProps(dispatch){
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hello);