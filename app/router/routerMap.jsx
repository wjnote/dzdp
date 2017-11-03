import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from '../containers';
import Home from '../containers/Home';
import City from '../containers/city';
import Search from '../containers/Search';
import Details from '../containers/details'
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
          <Route path="/city" component={City}/>
          <Route path="/search/:category(/:keyword)" component={Search}/>
          <Route path="/details/:id" component={Details}/>
          <Route path="*" component={NotFound}/>
				</Route>
			</Router>
    );
  }
}
