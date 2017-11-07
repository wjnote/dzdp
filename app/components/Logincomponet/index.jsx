import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

class LoginComponent extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      username:""
    }
  }

  render() {
    return (
      <h1>登陆组件</h1>
    )
  }
  
}

export default LoginComponent;

/*
<div className="login-phone">
              <span>
                  <i className="iconfont icon-jiantouxia"/>
              </span>
              <input  type="text"
                      className="login-phone-input"
                      placeholder="输入手机号"
                      value={this.state.value}
                      onChange={this.changeHandle.bind(this)}/>
          </div>

          <div className="login-phone clearfix">
              <span>
                  <i className="iconfont icon-jiantouxia"/>
              </span>
              <input  type="text"
                      className="login-phone-input"
                      placeholder="输入验证码"
                      value={this.state.verify}
                      onChange={this.verifychangeHandle.bind(this)}/>

              <input  type="button"
                      className="login-verify-btn fr"
                      value="获取验证码"
                      onClick={this.clickHandle.bind(this)}/>
          </div>

          <div className="login-btn-wrap">
              <button className="login-btn" onClick={this.loginUp.bind(this)}>登陆</button>
          </div>
 */