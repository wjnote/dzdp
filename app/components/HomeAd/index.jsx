import React from 'react';
import Ad from '../../containers/Home/subpage/Ad';
import './style.less';

class HomeAd extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
  	const oddsList = this.props.data.map((oddsItem, index)=>{
  		  return <li className="fl" key={index}>
  		  				<img src={oddsItem.img}  alt={oddsItem.title}/>
  		  			 </li>
  	})
    return (
     		<div className="odds">
     			<h2 className="odds-title">超值特惠</h2>
     			<div className="odds-warp">
     				{oddsList}
     			</div>
     		</div>
    )
  }
}

export default HomeAd;