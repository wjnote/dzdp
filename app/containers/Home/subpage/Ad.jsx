import React from 'react'
import {
  getAdData
} from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd'

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: []
    }
  }
  render() {
    return (
      <div>
          <HomeAd data={this.state.data}/>
      </div>
    )
  }

  componentDidMount() {
    const result = getAdData();
    result.then((res) => {
      return res.json();
    }).then((json) => {
      const data = json;
      if(data.length){
      	this.setState({
      		data
      	})
      }
    })
  }
}

export default Ad;

/**/