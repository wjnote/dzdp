import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActionsFormOtherFile from '../../actions/userinfo.js'
import * as storeActions from '../../actions/store'
import CommonHeader from '../../components/commonHeader'
import UserInfo from '../../components/userinfo'
import OrderList from './subpage/orderlist'

import './style.less'

class UserCenter extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const userinfo = this.props.userinfo;
    const store = this.props.store;

    return (
      <div className="usercenter">
          <CommonHeader title="用户中心" backRouter="/" />
          <UserInfo username={userinfo.username} cityname={userinfo.cityName} />
          <OrderList username={userinfo.username}/>
      </div>
    )
  }

}

// 将redux的值注入到 props 中，可以直接使用
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    store: state.store
  }
}
// 将 redux 的方法注入到 props 中，
function mapDispatchToProps(dispatch){
  return{
    userinfoActions: bindActionCreators(userinfoActionsFormOtherFile, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCenter)

/*
redux 和 react 一起使用时，需要封装吐出的组件
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActionsFormOtherFile from '../actions/userinfo'
*/
