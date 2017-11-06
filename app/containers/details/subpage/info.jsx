import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import DetailInfo from '../../../components/DetailInfo'
import { getInfoData } from '../../../fetch/detail/detail'

import './style.less'

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
    	detailInfo : false
    } 
  }
  render() {
    return (
      <div>
      		{
      			this.state.detailInfo
      			?	<DetailInfo infoData={this.state.detailInfo}/>
      			: ""
      		}
      </div>
    )
  }
  componentDidMount(){
  	const detailId = this.props.detailId;
  	const infoData = getInfoData(detailId);

  	this.disposeData(infoData)
  }
  disposeData(result){
  	result.then((res) => {
  		return res.json()
  	}).then((json) => {
  		this.setState({
  			detailInfo: json
  		})
  	})
  }
}

export default Info;