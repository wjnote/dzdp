import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    let number = this.props.data || 0;
    if(number > 5){
      number = number % 5;
    }

    return (
      <span className="star-wrap">
         {
            [1,2,3,4,5].map((item, index) => {
                const light = number >= item ? " highlight" : "";
                return <i key={index} className={"iconfont icon-xing"+ light} />
            })
         }
      </span>
    )
  }
}

export default Star;

/**
 * 评价星星的个数的组件   
 * 1、要注意数量，数值超过5，前端要容错处理
 * 2、采用的class的方式来显示高亮，添加class的时候，要添加一个空格处理
 */