import React from 'react';

import './style.less';

class CityChoose extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="city-choosed">
      		<h2>{this.props.city}</h2>
      </div>
    )
  }
}

export default CityChoose;