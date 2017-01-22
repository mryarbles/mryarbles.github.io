import * as React from "react";

import Menu from "../components/Menu";
import MainNav from "../components/MainNav";

class App extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentDidMount() {

	}

	onEnter() {
		console.log("HomePage.onEnter");

	}

	componentWillUnmount() {
		// Lifecycle function that is triggered just before a component unmounts
	}

	render() {
		return (
				<div className="site off-canvas-wrapper">
					<div className="off-canvas position-left" id="mainMenu" data-off-canvas>
						<Menu />
					</div>
					<div className="off-canvas-content" data-off-canvas-content>
						<MainNav></MainNav>
						<div id="PageContainer">
							{ this.props.children }
						</div>
					</div>
				</div>
		);
	}
}


export default App;