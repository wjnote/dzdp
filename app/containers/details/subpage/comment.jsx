import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detail'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state ={
    	dataComment: [],
    	page: 1,
    	hasMore: false,
    	isLoadingMore: false
    }
  }
  render() {
    return (
      <div>
        {this.state.page}
        <h3>加载更多</h3>
      </div>
    )
  }
  componentDidMount(){
  	const detailId = this.props.detailId;
  	const page = this.state.page;
  	const commentData = getCommentData(detailId,page);

  	this.disposeData(commentData)
  }
  isLoadingMore(){
    const detailId = this.props.detailId;
    const page = this.state.page;
    const commentData = getCommentData(detailId, page);
  }
  disposeData(result){
  	result.then((res)=>{
  		return res.json()
  	}).then((json)=>{
  		this.setState({
  			dataComment: json,
        page: this.state.page +1 
  		})
  	})
  }
  
}

export default Comment;