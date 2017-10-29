import React from 'react'

import './style.less'

class CityList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const cityList = this.props.citylist;
    const cityHTML = cityList.length 
    ? cityList.map((item, index)=>{
        return <li key={index}><span onClick={this.boundChangeCity.bind(this, {item})}>{item}</span></li>
    })
    : 'no data!'

    return (
      <div className="choosecitylist">
      	<p className="hotCity">热门城市</p>
        <div className="choosecity-wrap clearfix"> 
            {cityHTML} 
        </div>
      </div>
    )
  }

  boundChangeCity(newCity){
    const changecity = this.props.changecity;
    changecity(newCity.item);
  }
}

export default CityList;