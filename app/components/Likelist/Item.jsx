import React from 'react';
import { Link } from 'react-router';
import './style.less';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    
    return (
       <div className="likelist-definite ">
            <div className="likelist-definite-box clearfix">
             		<div className="likelist-definite-left fl">
             				<img src={data.img} alt="左侧的图片"/>
             		</div>
                <Link to={"/details/" + data.id} >
               		<div className="likelist-definite-right fl">
        							<div className="definite-right-top">
                        <p className="definite-title fl">{data.title}</p>
                        <em className="fr definite-distance">{data.distance}</em>
                      </div>
        							<div className="definite-right-middle">

                        <p className="definite-subhead">{data.subTitle}</p>
                      </div>
        							<div className="definite-right-botom">
                          <div className="fl definite-price">￥{data.price}</div>
                          <div className="fr definite-seanumber">已售{data.mumber}</div>
                      </div>
               	</div>
              </Link>
          </div>
       </div>
    )
  }
}

export default Item;
