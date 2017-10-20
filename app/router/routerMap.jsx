import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from '../containers';
import Home from '../containers/Home';
import NotFound from '../containers/404';

export default class RouteMap extends React.Component {
  updateHandle() {
    // 路由变化的时触发函数
    // console.log(' 每次路由变化后触发');
  }
  render() {
    return (
      <Router history={ hashHistory } onUpdate={this.updateHandle.bind(this)}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
				</Route>
			</Router>
    );
  }
}
