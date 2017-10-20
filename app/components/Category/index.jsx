import React from 'react';
import ReactSwipe from 'react-swipe'
import {Carousel} from 'antd';
import './style.less';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0
    }
  }
  render() {
    const option = {
      // auto: 2000,
      callback: function(index) {
        this.setState({
          pageIndex: index
        })
      }.bind(this)
    }
    return (
      <div className="category">
     		<ReactSwipe className="carousel" swipeOptions={option}>
            <div className="carousel-wrap">
            	<ul>
            		<li className="meishi">美食</li>
            		<li>电影</li>
            		<li>酒店</li>
            		<li>休闲娱乐</li>
            		<li>外卖</li>
            		<li>火锅</li>
            		<li>丽人</li>
            		<li>度假出行</li>
            		<li>足底按摩</li>
            		<li>周边游</li>
            	</ul>
            </div>
            <div className="carousel-wrap">
            	<ul>
            		<li>景点</li>
            		<li>KTV</li>
            		<li>购物</li>
            		<li>生活服务</li>
            		<li>运动健身</li>
                    <li>美发</li>
                    <li>亲子</li>
                    <li>小吃快餐</li>
                    <li>自助餐</li>
            		<li>酒吧</li>
            	</ul>
            </div>
            <div className="carousel-wrap">
            	<ul>
            		<li>日本菜</li>
            		<li>SPA</li>
            		<li>结婚</li>
            		<li>学习培训</li>
            		<li>西餐</li>
                    <li>火车机票</li>
                    <li>烧烤</li>
                    <li>家装</li>
                    <li>宠物</li>
            		<li>全部分类</li>
            	</ul>
            </div>
        </ReactSwipe>
        <div className="carousel-btn">
        	<ul>
        		<li className={this.state.pageIndex === 0 ? 'active' : ''}></li>
        		<li className={this.state.pageIndex === 1 ? 'active' : ''}></li>
        		<li className={this.state.pageIndex === 2 ? 'active' : ''}></li>
        	</ul>
        </div>
      </div>
    )
  }
}

export default Category;