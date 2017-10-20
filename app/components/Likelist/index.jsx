import React from 'react';
import Item from './Item';
import './style.less';

class Likelist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listitem = this.props.data.map((item, index) => {
      return <Item key={index} data={item}/>
    })

    return (
      <div>
        { listitem }
      </div>
    )
  }
}

export default Likelist;