import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default Header;