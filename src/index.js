import 'babel-polyfill';
import * as React from "react";
import {Component} from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import{ BrowserRouter, Match, Miss, Link } from 'react-router';

import MainNav from "./components/MainNav";

const jsx =
			<AppContainer>
				<BrowserRouter>
						<div className="site">
							<MainNav></MainNav>
							<div id="PageContainer">
								<div className="site-overlay"></div>
								<Match exactly pattern="/" component={HomePage} />
								<Miss component={ The404Page } />
								<footer className="main-footer"></footer>
							</div>
						</div>
				</BrowserRouter>
			</AppContainer>;


ReactDOM.render(jsx, rootElement);