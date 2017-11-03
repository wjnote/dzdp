import React from 'react';
import ReactSwipe from 'react-swipe'
import {Link, hashHistory} from 'react-router';
import {Carousel} from 'antd';
import './style.less';

/* 首页轮播组件 */
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
            		<Link to="/search/meishi">
                        <li>
                            <span className="meishi"></span>
                            <p>美食</p>
                        </li>
                    </Link>
            		<Link to="/search/movie">
                        <li>
                            <span className="dianying"></span>
                            <p>电影</p>
                        </li>
                    </Link>
            		<Link to="/search/jiudian">
                        <li>
                            <span className="jiudian"></span>
                            <p>酒店</p>
                        </li>
                    </Link>
            		<Link to="/search/ylfs">
                    <li>
                            <span className="xiuxianyule"></span>
                            <p>休闲娱乐</p>
                        </li>
                    </Link>
            		<Link to="/search/waimai">
                        <li>
                            <span className="waimai"></span>
                            <p>外卖</p>
                        </li>
                    </Link>
            		<Link to="/search/huoguo">
                        <li>
                            <span className="huoguo"></span>
                            <p>火锅</p>
                        </li>
                    </Link>
            		<Link to="/search/liren">
                        <li>
                            <span className="liren"></span>
                            <p>丽人</p>
                        </li>
                    </Link>
            		<Link to="/search/dujiachuxing">
                        <li>
                            <span className="dujiachuxing"></span>
                            <p>度假出行</p>
                        </li>      
                    </Link>
            		<Link to="/search/zudianmo">
                        <li>
                            <span className="zudianmo"></span>
                            <p>足底按摩</p>
                        </li>      
                    </Link>
            		<Link to="/search/zhoubianyou">
                        <li>
                            <span className="zhoubianyou"></span>
                            <p>周边游</p>
                        </li>
                    </Link>
            	</ul>
            </div>
            <div className="carousel-wrap">
            	<ul>
            		<Link to="/search/jingdian">
                        <li>
                            <span className="jingdian"></span>
                            <p>景点</p>
                        </li>      
                    </Link>
            		<Link to="/search/KTV">
                        <li>
                            <span className="KTV"></span>
                            <p>KTV</p>
                        </li>      
                    </Link>
            		<Link to="/search/shopping">
                        <li>
                            <span className="shopping"></span>
                            <p>购物</p>
                        </li>    
                    </Link>
            		<Link to="/search/shenghuofuwu">
                        <li>
                            <span className="shenghuofuwu"></span>
                            <p>生活服务</p>
                        </li>        
                    </Link>
            		<Link to="/search/yundongjianshen">
                        <li>
                            <span className="yundongjianshen"></span>
                            <p>运动健身</p>
                        </li>         
                    </Link>
                    <Link to="/search/meifa">
                        <li>
                            <span className="meifa"></span>
                            <p>美发</p>
                        </li>   
                    </Link>
                    <Link to="/search/qinzi">
                        <li>
                            <span className="qinzi"></span>
                            <p>亲子</p>
                        </li>   
                    </Link>
                    <Link to="/search/xiaochikuaican">
                        <li>
                            <span className="xiaochikuaican"></span>
                            <p>小吃快餐</p>
                        </li>
                    </Link>
                    <Link to="/search/zizucan">
                        <li>
                            <span className="zizucan"></span>
                            <p>自助餐</p>
                        </li>
                    </Link>
            		<Link to="/search/jiuba">
                        <li>
                            <span className="jiuba"></span>
                            <p>酒吧</p>
                        </li>      
                    </Link>
            	</ul>
            </div>
            <div className="carousel-wrap">
            	<ul>
            		<Link to="/search/ribencai">
                        <li>
                            <span className="ribencai"></span>
                            <p>日本菜</p>
                        </li>          
                    </Link>
            		<Link to="/search/SPA">
                        <li>
                            <span className="SPA"></span>
                            <p>SPA</p>
                        </li>          
                    </Link>
            		<Link to="/search/jiehun">
                        <li>
                            <span className="jiehun"></span>
                            <p>结婚</p>
                        </li>          
                    </Link>
            		<Link to="/search/xuexipeixun">
                        <li>
                            <span className="xuexipeixun"></span>
                            <p>学习培训</p>
                        </li>          
                    </Link>
            		<Link to="/search/xican">
                        <li>
                            <span className="xican"></span>
                            <p>西餐</p>
                        </li>          
                    </Link>
                    <Link to="/search/huochejipiao">
                        <li>
                            <span className="huochejipiao"></span>
                            <p>火车机票</p>
                        </li>
                    </Link>
                    <Link to="/search/shaokao">
                        <li>
                            <span className="shaokao"></span>
                            <p>烧烤</p>
                        </li>
                    </Link>
                    <Link to="/search/jiazhuang">
                        <li>
                            <span className="jiazhuang"></span>
                            <p>家装</p>
                        </li>
                    </Link>
                    <Link to="/search/chongwu">
                        <li>
                            <span className="chongwu"></span>
                            <p>宠物</p>
                        </li>
                    </Link>
            		<Link to="/search/quanbufenlei">
                        <li>
                            <span className="quanbufenlei"></span>
                            <p>全部分类</p>
                        </li>      
                    </Link>
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