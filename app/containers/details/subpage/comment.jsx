import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import Likelist from '../../../components/Likelist'
import CommentList from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'
import { getCommentData } from '../../../fetch/detail/detail'
import { BackTop } from 'antd'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state ={
    	data: [],
    	page: 1,
    	hasMore: false,
    	isLoadingMore: false
    }
  }
  render() {
    return (
      <div className="detail-comment">
        <h2 className="detail-reviews">用户点评</h2>

        <CommentList data={this.state.data}/>

        <LoadMore LodaMoreData={this.LoadingMore.bind(this)} isLoadMore={this.state.isLoadingMore}/>

        <BackTop />
      </div>
    )
  }
  componentDidMount(){
    // 加载首屏数据
  	const detailId = this.props.detailId;
  	const page = this.state.page;
  	const commentData = getCommentData(detailId,page);

  	this.disposeData(commentData);
  }
  LoadingMore(){
    this.setState({
        isLoadingMore: true
    })
    const detailId = this.props.detailId;
    const page = this.state.page;
    const commentData = getCommentData(detailId, page);

    this.disposeData(commentData);

    this.setState({
        isLoadingMore: false,
        page: page + 1
    })
  }
  disposeData(result){
  	result.then((res) => {
  		return res.json()
  	}).then((json) => {

  		this.setState({
  			data: this.state.data.concat(json.data),
        hasMore: json.hasMore
  		})
  	})
  }
}

export default Comment;