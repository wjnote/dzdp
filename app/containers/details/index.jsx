import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CommonHeader from '../../components/commonHeader';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="detail-header">
      		<CommonHeader title="店铺详情"/>
      </div>
    )
  }
}

export default Details;