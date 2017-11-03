import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

class NotFound extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <h1>404 not found page</h1>
    )
  }
}

export default NotFound;