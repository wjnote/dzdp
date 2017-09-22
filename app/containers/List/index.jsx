import React from 'react';
import { browserHistory } from 'react-router';

export default class List extends React.Component{
	clickHandler(value){
		browserHistory.push('/detail/'+ value);
	}
	render(){
		const arr = [1,2,3]
		return (
			<ul>
				{arr.map((item, index)=>{
					return <li key={index} onClick={this.clickHandler.bind(this, item)}>js up to {item}</li>
				})}
			</ul>
		)
	}
}