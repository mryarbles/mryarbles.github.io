import * as React from "react";
import { Link } from 'react-router'

const $ = window["jQuery"];


class MainNav extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentDidMount() {
		$("#mainNav").PeekabooNav();
	}

	componentWillReact() {
		console.log("MainNav will re-render, since the todo has changed!");
	}


	render() {


		return (

				<div class="fixed">
					<nav className="top-bar" id="mainNav">
						<div className="top-bar-left">
							<Link to="/"><h1>mryarbles.com</h1></Link>
						</div>
						<div className="top-bar-right">
							<button id="menuButton" type="button" className="button menu-btn" data-toggle="mainMenu">
								<i></i>
								<i></i>
								<i></i>
							</button>
						</div>
					</nav>
				</div>

		);
	}
}


export default MainNav;
