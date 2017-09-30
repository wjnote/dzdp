import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component{
	render(){
		return (
			<div>
				<h1>this is home11222</h1>
				<Link to="/list">go to list</Link>
			</div>
		)
	}
}