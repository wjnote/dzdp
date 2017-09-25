import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import RouteMap from './router/routerMap.jsx';
import './index.less'

ReactDOM.render(
	<RouteMap history={ browserHistory }/>, 
	document.getElementById('app')
);