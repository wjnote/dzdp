import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CommonHeader from '../../components/commonHeader';
import Info from './subpage/info'
import Comment from './subpage/comment'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      detailId : this.props.params
    }
  }
  render() {
    return (
      <div>
        <div className="detail-header">
        		<CommonHeader title="店铺详情"/>
        </div>
        <Info detailId={this.state.detailId}/>
        <Comment detailId={this.state.detailId}/>
      </div>
    )
  }
}

export default Details;