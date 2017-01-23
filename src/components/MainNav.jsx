import * as React from "react";


class MainNav extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentWillReact() {
		console.log("MainNav will re-render, since the todo has changed!");
	}


	render() {


		return (


				<nav className="top-bar" data-sticky data-options="marginTop:0;">
					<div className="top-bar-left">
						<h1>mryarbles.com</h1>
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
