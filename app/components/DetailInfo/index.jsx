import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../star'

import './style.less'

class DetailInfo extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const data = this.props.infoData;
    return (
      <div className="detail-info clearfix">
        <div className="detail-imgwrap fl" >
            <img src={data.img}/>
        </div>
        <div className="detail-right">
            <p className="detail-info-title">{data.title}</p>
            <p className="detail-info-evaluate">
                <Star data={data.star}/>
                <span>{data.price}</span>
            </p>
            <p className="detail-info-subtitle">{data.subTitle}</p>
        </div>
        <p className="detail-time" dangerouslySetInnerHTML={{__html:data.desc}}></p>
      </div>
    )
  }
}

export default DetailInfo;

/**
 
 */