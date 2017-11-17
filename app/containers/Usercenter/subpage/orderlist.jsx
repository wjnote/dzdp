import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { orderListData } from '../../../fetch/user/orderlist'
import OrderListCompontent from '../../../components/orderlist'

import './style.less'

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state ={
      orderList:[]
    }
  }

  render() {
    return (
      <div>
          <OrderListCompontent orderlist={this.state.orderList}/>
      </div>
    )
  }
  componentDidMount(){
    const username = this.props.username;
    if(username){
      this.loadOrderData(username);
    }
  }

  loadOrderData(username){
    const listData = orderListData(username);
    listData.then(res => {
      return res.json()
    }).then(json => {
      this.setState({
        orderList: json
      })
    })
  }

}

export default OrderList;