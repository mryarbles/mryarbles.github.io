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

			<div data-sticky-container>
				<nav className="top-bar" data-sticky data-options="marginTop:0;">
					<div className="top-bar-left">
						<h1>mryarbles.com</h1>
					</div>
					<div className="top-bar-right">
						<button type="button" className="button" data-toggle="mainMenu">Open Menu</button>
					</div>
				</nav>
			</div>

		);
	}
}


export default MainNav;
