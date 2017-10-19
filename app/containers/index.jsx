import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LocalStore from '../util/localStore';
import { CITYNAME } from '../config/localStoreKey';
import * as userinfoActionsFormOtherFile from '../actions/userinfo'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false, //是否加载成功
    }
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
  componentDidMount() {
    // 从localStore中获取城市
    let cityName = LocalStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = "成都"
    }

    // 将城市信息存到redux中
    this.props.userinfoActions.update({
      cityName: cityName
    })
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
  return{
    userinfoActions: bindActionCreators(userinfoActionsFormOtherFile, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

/* 所有页面的父组件 */