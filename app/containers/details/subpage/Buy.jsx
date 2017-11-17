import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from "react-router"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActionsFromFile from '../../../actions/store'
import BuyAndStore from '../../../components/BuyAndStore'

import './style.less'

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
            isStore: false
        }
  }

  render() {
    return (
      <div>
        <BuyAndStore isStore={this.state.isStore}
            buyHandle={this.buyHandle.bind(this)}
            storeHandle={this.storeHandle.bind(this)}/>
      </div>
    )
  }

  componentDidMount(){
    const id = this.props.id;
    this.checkStoreState();
    // const storeActions = this.props.storeActions;
    // storeActions.add({id: id})
  }

  // 检验当前商户是否被收藏
  checkStoreState(){
    const id = this.props.id;
    const store = this.props.store
    console.log(store)
    // ES5 的方法，对数组的每一个遍历
    store.forEach(item => {
        if (item.id === id) {
            // 已经被收藏
            this.setState({
                isStore: true
            })
            return false
        }
        console.log(222)
    })
  }


  // 收藏事件
  storeHandle(){
      // 1、验证用户是否登录
      // var loginFlag = this.isLogin();
      // if(!loginFlag){
      //   return false;
      // }

      const id = this.props.id;
      const storeActions = this.props.storeActions;


      if(this.state.isStore){
        storeActions.rm({id: id});
      }else{
        storeActions.add({id: id});
      }
      // if(this.state.isStore){
      //   // 已收藏，取消收藏
      //   storeActions.rm({id: id})
      // }else{
      //   // 未收藏，执行收藏
      //   storeActions.add({id: id})
      // }

      // 修改收藏的状态
      this.setState({
        isStore: !this.state.isStore
      })
  }

  // 购买功能
  buyHandle(){
      // 1、验证用户是否登录
      var loginFlag = this.isLogin();
      if(!loginFlag){
        return false;
      }
      // 2、购买流程


      // 3、跳转到用户主页
      hashHistory.push("/usercenter");
  }

  // 验证登陆
  isLogin(){
    const id = this.props.id;
    const userinfo = this.props.userinfo;
    if(!userinfo.userName){
      // 其中必须要转码，因为路由的配置是 login 后面只能有参数，不能带有 / 否则匹配会报错
      hashHistory.push('/login/' + encodeURIComponent('/details/' + id));
      return false;
    }
    return true;
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
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)

