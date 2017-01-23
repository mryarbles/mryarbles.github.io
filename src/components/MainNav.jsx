import * as React from "react";
import { Link } from 'react-router'

class MainNav extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentWillReact() {
		console.log("MainNav will re-render, since the todo has changed!");
	}


	render() {


		return (


				<nav className="top-bar">
					<div className="top-bar-left">
						<Link to="/"><h1>mryarbles.com</h1></Link>
					</div>
					<div className="top-bar-right">
						<button type="button" className="button menu-btn" data-toggle="mainMenu">
							<i></i>
							<i></i>
							<i></i>
						</button>
					</div>
				</nav>

		);
	}
}


export default MainNav;
