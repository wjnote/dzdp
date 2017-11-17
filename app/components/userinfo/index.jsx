import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="center-userinfo">
          <p>{this.props.username}</p>
          <p>{this.props.cityname}</p>
      </div>
    )
  }

}

export default UserInfo;