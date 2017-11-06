import React from 'react'
import SearchHeader from '../../components/SearchHeader';
import Likelist from '../../components/Likelist'

import './style.less';

class Search extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.state={
    	value:'test input placahodler'
    }
  }
  render() {
    const keyword = this.props.params;
    
    return (
    	<div>
        <SearchHeader keyword={keyword.keyword}/>
      </div>
    )
  }
  clickHandle(){
  	window.history.back();
  }
}

export default Search;
