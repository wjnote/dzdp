import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class OrderListItem extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const itemData = this.props.data;

    return (
        <div className="orderlist-item">
            <div className="orderlist-img">
              <img src={itemData.img} alt="image"/>
            </div>
            <div className="orderlist-item-content">
              <p>商户: <span>{itemData.title}</span></p>
              <p>数量: <span>{itemData.count}</span></p>
              <p>价格: <span>{itemData.price}</span></p>
            </div>
            <div className="orderlist-evaluate">
              <button>评价</button>
            </div>
        </div>
    )
  }

}

export default OrderListItem;
/*
commentState:2
count:2
id:1510898654532
img:"http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png"
price:"110"
title:"好吃自出餐"
 */