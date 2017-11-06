import React from 'react'
import SearchHeader from '../../components/SearchHeader';
import Likelist from '../../components/Likelist'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActionsFormOtherFile from '../../actions/userinfo'
import SearchList from './subpage/List'

import './style.less';

class Search extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props;
    const keyword = data.params.keyword;
    const cityName = data.userinfo.cityName;
    
    return (
    	<div>
        <SearchHeader keyword={keyword}/>

        <SearchList keyword={keyword} cityName={cityName}/>
      </div>
    )
  }

}

/**********   redux 绑定 react 中  在顶部需要引入  bindActionCreators  userinfoActionsFormOtherFile ****/
// 将redux的值注入到 props 中，可以直接使用
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
// 将 redux 的方法注入到 props 中，
function mapDispatchToProps(dispatch){
  return{
    userinfoActions: bindActionCreators(userinfoActionsFormOtherFile, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
/**
 * 搜索页
 * 1、抽离顶部组件
 * 2、页面进入就加载首页数据
 *     参数： 城市（redux）  页数（加载更多）
 *     page, cityName, category, keyword     
 * 3、处理加载更多，引用组件，从组件写父元素的事件
 */
