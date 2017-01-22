import 'babel-polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from "./components/App";
import HomePage from "./pages/HomePage";
import Page from "./pages/Page";


require('./sass/styles.scss');

const rootElement = document.getElementById('app');

const jsx =
				<Router hashType="hashbang" history={ hashHistory }>
								<Route path="/" component={App}>
									<IndexRoute component={HomePage}/>
									<Route path="/page/:id/:count" component={ Page } />
								</Route>
				</Router>
		;


ReactDOM.render(jsx, rootElement);