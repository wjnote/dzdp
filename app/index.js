import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouteMap from './router/routerMap';
import configureStore from './store/configureStore';
import './util/htmlFontSize';
import 'antd/dist/antd.css';
import './static/css/reset.less';
import './static/css/iconfont.css';
import './static/css/common.less';


// redux 第二步，生成store
const store = configureStore();
ReactDOM.render(
  <Provider store = { store } >
			<RouteMap />
		</Provider>,
  document.getElementById('app')
);
