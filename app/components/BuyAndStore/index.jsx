import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import "./style.less"

class BuyAndStore extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const isStore = this.props.isStore;

    return (
      <div className="butandstore-wrap">
        <button onClick={this.buyHandle.bind(this)}>购买</button>

        {
          this.props.isStore
          ? <button onClick={this.storeHandle.bind(this)}>已收藏</button>
          : <button onClick={this.storeHandle.bind(this)}>收藏</button>
        }
      </div>
    )
  }

  // buy
  buyHandle(){
    const buyHandle = this.props.buyHandle();
  }

  // 收藏
  storeHandle(){
    const storeHandle = this.props.storeHandle();
  }

}

export default BuyAndStore;