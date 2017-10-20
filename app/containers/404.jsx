import React from 'react'

class NotFound extends React.Component {
  /* 如果要在组件结构中使用this.props 则要使用 super()继承 */
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>404 not found page</h1>
    )
  }
}

export default NotFound;