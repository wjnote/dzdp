import React from 'react'

import './style.less';

class LoadMore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="bottom-loadmore" ref="wrapper">
        {
          this.props.isLoadMore
          ? <span>加载中...</span>
          : <span onClick={this.LoadMoreHandle.bind(this)}>加载更多</span>
      	}	
    	</div>
    )
  }
  componentDidMount(){
    const LoadMoreFn = this.props.LodaMoreData;
    const wrapper = this.refs.wrapper;
    let timeoutId;

    // scroll 节流
    window.addEventListener('scroll', function(){
      if(this.props.isLoadMore){
        return;
      }
      if(timeoutId){
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(callBack, 50)
    }.bind(this))

    function callBack(){
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;

      if(top && top < windowHeight){
        LoadMoreFn(); //加载更多
      }
    }
  }
  LoadMoreHandle(){
    this.props.LodaMoreData();
  }
}

export default LoadMore;

/*
1、判断传入进来的当时的状态
2、单击加载更多，父组件的一个方法当作属性传入(加载更多的方法放在父组件实现)
3、滑动的节流
4、当底部的高度小于屏幕高度时加载数据
*/