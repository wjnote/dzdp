import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CommentItem from './Item'

import './style.less'

class CommentList extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const commentDatas = this.props.data;

    return (
      <div>
          {
            commentDatas.length
            ? commentDatas.map((item, index) => {
                  return <CommentItem key={index} data={item}/>
            })
            : "no data!!"
          }
      </div>
    )
  }
}

export default CommentList;
