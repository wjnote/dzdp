import React from 'react'
import SearchInput from '../SearchInput';
import { hashHistory} from 'react-router';

import '../../static/css/iconfont.css';
import './style.less'

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-header">
      	<span className="search-header-icon fl" onClick={this.clickHandle.bind(this)}>
      		<i className="iconfont icon-huise "></i>
      	</span>

        <div className="search-header-content">
          <i className="iconfont icon-fangdajing"></i>
          &nbsp;
      	  <SearchInput value={this.props.keyword || ""} enterHandle={this.enterHandle.bind(this)}/>
        </div>
      </div>
    )
  }

  enterHandle(value){
    hashHistory.push('/search/all/' + encodeURIComponent(value));
  }
  clickHandle(){
    window.history.back();
  }
}

export default SearchHeader;
