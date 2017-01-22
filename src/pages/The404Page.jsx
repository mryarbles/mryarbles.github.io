import * as React from "react";

class AboutPage extends React.Component {

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
				<div classNane="container">
					<div className="row flex-items-xs-center">
						<h1>About</h1>
					</div>
				</div>
		);
	}
}


export default AboutPage;