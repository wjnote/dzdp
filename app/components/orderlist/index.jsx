import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import OrderListItem from './item.jsx'

import "./style.less"

class OrderListCompontent extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const orderListData = this.props.orderlist;

    return (
      <div className="orderlist-box">
        <h2>你的订单</h2>
        {
          orderListData.length
          ?  orderListData.map((item,index) => {
              return <OrderListItem key={index} data={item}/>
          })
          :""
        }
      </div>
    )
  }

}

export default OrderListCompontent;