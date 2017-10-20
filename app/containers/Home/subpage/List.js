import React from 'react';
import {getListData} from '../../../fetch/home/home';
import Likelist from '../../../components/Likelist';
import LoadMore from '../../../components/LoadMore';
import './style.less'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], //保存数据
      hasMore: false, //是否能加载更多
      isLoadMore: false, //现在的状态 '加载更多' / '加载中...'
      page: 1 //下一次请求时候的页数
    }
  }

  render() {
    return (
      <div>
          <h2 className="likelist-title">猜你喜欢</h2>
          {
            this.state.data.length
            ? <Likelist data={this.state.data}/>
            : <div>加载中...</div>
          }
          <LoadMore isLoadMore={this.state.isLoadMore} LodaMoreData={this.getMoredata.bind(this)}/>
      </div>
    );
  }

  componentDidMount() {
    // 获取首屏数据
    const result = getListData(this.props.cityName, 0);

    this.disposeData(result);
  }
  // 获取更多数据
  getMoredata(){
    this.setState({
      isLoadMore: true
    })
    const cityName = this.props.cityName;
    const page = this.state.page;
    const result = getListData(cityName, page);

    // 处理数据
    this.disposeData(result);
    
    this.setState({
      page: page + 1,
      isLoadMore: false
    })
  }
  // 处理数据
  disposeData(result) {
    result.then((res) => {
      return res.json()
    }).then((json) => {
      const hasMore = json.hasMore;
      const data = json.data;

      // 存储数据
      this.setState({
        hasMore,
        data: this.state.data.concat(data)
      })
    })
  }
}

export default List;
/*
1、主要是获取数据，展示数据是木偶组件
2、注意数据的累加，调用js的api--concat()
*/