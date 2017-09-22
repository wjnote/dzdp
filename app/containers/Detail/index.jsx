import React from 'react';
import ReactDOM from 'react-dom';

export default class Detail extends React.Component{
	render() {
		return (
			<div className="b">this detail id is {this.props.params.id}</div>
		);
	}
}