import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Star from '../../star'

import './style.less'

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
  	const itemInfo = this.props.data;

    return (
      <div className="comment-single">
      		<p className="comment-username">
      			<span><i className="iconfont icon-gerenzhongxin"/></span>
      			{itemInfo.username}
      		</p>
      		<div className="star-wrap">
      			<Star data={itemInfo.star}/>
      		</div>
      		<p className="comment-content">
      			{itemInfo.comment}
      		</p>
      </div>
    )
  }
}

export default CommentItem;

/*
username: "133****3355", comment: "非常好吃，棒棒的，下次再来", star: 5
 */