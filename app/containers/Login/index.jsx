import React from 'react'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActionsFormOtherFile from '../../actions/userinfo.js'
import CommonHeader from '../../components/commonHeader'
import LoginComponent from '../../components/Logincomponet'

import '../../static/css/iconfont'
import './style.less'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      checking: true
    }
  }

  render() {
    return (
      <div className="login-warp">
          <CommonHeader title="登陆"/>
          {
            this.state.checking
            ? <div>已经登录，跳转到用户中心！</div>
            : <LoginComponent clickHandle={this.handleClick.bind(this)}/>
          }
          
      </div>
    )
  }
  componentDidMount(){
    // 检测登录状态
    this.doCheck();
  }

  doCheck(){
    const userinfo = this.props.userinfo;
    if(userinfo.username){
      // 已经登录
      this.goIndexPage();
    }else{
      // 未登录，设置state的检查状态值
      this.setState({
        checking: false
      })
    }
  }

  handleClick(username){
    // 保存用户信息
    const action = this.props.userinfoActions;
    let userinfo = this.props.userinfo;
    userinfo.username = username;
    action.update(userinfo);

    // 跳转 params.router
    const params = this.props.params;
    const router = params.router;
    if(router){
      hashHistory.push(router)
    }else{
      this.goIndexPage();
    }
  }

  // 跳转到首页
  goIndexPage(){
    hashHistory.push('/');
  }
}

// 将redux的值注入到 props 中，可以直接使用
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
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
)(Login)

/*  
redux 和 react 一起使用时，需要封装吐出的组件 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActionsFormOtherFile from '../actions/userinfo'
*/