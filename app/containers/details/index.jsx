import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CommonHeader from '../../components/commonHeader';
import Info from './subpage/info'
import Comment from './subpage/comment'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const id = this.props.params.id;

    return (
      <div>
        <div className="detail-header">
        		<CommonHeader title="店铺详情"/>
        </div>

        <Info detailId={id}/>

        <Comment detailId={id}/>
      </div>
    )
  }
}

export default Details;