import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

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
      <div className="login-warp">

          <div className="login-phone">
              <span className="login-icon fl">
                  <i className="iconfont icon-jiantouxia"/>
              </span>
              <div className="login-input-warp">
                <input  type="text"
                        className="login-phone-input"
                        placeholder="输入手机号"
                        value={this.state.username}
                        onChange={this.changeHandle.bind(this)}/>
              </div>
          </div>

          <div className="login-phone clearfix">
              <span className="login-icon fl">
                  <i className="iconfont icon-jiantouxia"/>
              </span>

              <input  type="button"
                      className="login-verify-btn fr"
                      value="获取验证码"/>

              <div className="login-input-warp mr100">
                <input  type="text"
                        className="login-phone-input"
                        placeholder="输入验证码"/>
              </div>       
              
          </div>


          <div className="login-btn-wrap">
              <button className="login-btn" onClick={this.clickHandle.bind(this)}>登陆</button>
          </div>
      </div>
    )
  }
  
  changeHandle(e){
    this.setState({
      username: e.target.value
    })
  }

  clickHandle(){
    const params = this.props;
    params.clickHandle(this.state.username);
  }
}

export default LoginComponent;
