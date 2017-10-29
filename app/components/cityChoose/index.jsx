import React from 'react';

import './style.less';

class CityChoose extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="citychoose">{this.props.city}</div>
    )
  }
}

export default CityChoose;