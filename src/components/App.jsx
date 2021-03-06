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
				<div>
					<MainNav></MainNav>
					<div className="off-canvas-wrapper">
						<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
							<div className="off-canvas position-left" id="mainMenu" data-off-canvas>
								<Menu />
							</div>
							<div className="off-canvas-content" data-off-canvas-content>
								<div id="PageContainer">{ this.props.children }</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}


export default App;

/*
 <div>
 <MainNav></MainNav>
 <div className="site off-canvas-wrapper">
 <div className="off-canvas position-left" id="mainMenu" data-off-canvas>
 <Menu />
 </div>
 <div className="off-canvas-content" data-off-canvas-content>
 <div id="PageContainer">
 { this.props.children }
 </div>
 </div>
 </div>
 </div>
 */