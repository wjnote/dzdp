import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CommonHeader from '../../components/commonHeader'

class UserCenter extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="usercenter">
          <CommonHeader/>

          <h2>UserCenter</h2>
      </div>
    )
  }
  
}

export default UserCenter;