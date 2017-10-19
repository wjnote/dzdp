import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
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
	<Provider store={store}>
		<RouteMap history={ browserHistory }/>
	</Provider>,
	document.getElementById('app')
);


// mock 数据的
// import { getData, postData } from './fetch/data';
// getData();
// postData();
