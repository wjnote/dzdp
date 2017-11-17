import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getSearchData } from '../../../fetch/search/search';
import Likelist from '../../../components/Likelist'
import LoadMore from '../../../components/LoadMore'

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
    	 data : [],
    	 page: 1,
    	 hasMore: false,
    	 isLoadingMore: false
    }
  }

  render() {
    return (
      <div>
      	<Likelist data={this.state.data} />

        <LoadMore isLoadMore={this.state.isLoadMore} LodaMoreData={this.LodaMoreData.bind(this)}/>
      </div>
    )
  }

  componentDidMount(){
  	// 初次加载数据
    this.firstpage();
  }

  firstpage(){
    const data = getSearchData(this.props.cityName, this.props.keyword, 1, this.state.page);
    this.disposeData(data);
  }

  LodaMoreData(){
    this.setState({
      isLoadMore: true
    })
    const page = this.state.page;

    const data = getSearchData(this.props.cityName, this.props.keyword, 1, this.state.page);
    this.disposeData(data)

    this.setState({
      page: page + 1,
      isLoadMore: false
    })
  }

  disposeData(result){

  	result.then((res) => {
  			return res.json();
  	}).then((json) => {
  			
  			this.setState({
  				data: this.state.data.concat(json.data),
  				hasMore: json.hasMore
  			})
  	})
  }

  // 在页面从新搜索时
  componentDidUpdate(prevProps, prevState) {
      const keyword = this.props.keyword

      // 搜索条件完全相等时，忽略。重要！！！
      if (keyword === prevProps.keyword) {
          return
      }

      // 重置 state
      this.setState({
         data : [],
         page: 1,
         hasMore: false,
         isLoadingMore: false
      })

      // 重新加载数据
      this.firstpage();
  }
}

export default SearchList;

/**
 * 初次加载数据
 * 加载更多模块的事件函数展示
 * /api/search/:cityName/:keyword/:id/:page
 * 用户在本页面搜素，则需要考虑页面所有要处理的情况,不处理的话页面上存在的还时前一个搜索结果的内容
 */